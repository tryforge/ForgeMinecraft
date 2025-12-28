import { MinecraftServer, WebSocketConnection } from "mc-server-management"
import { TypedEmitter } from "tiny-typed-emitter"
import { Logger } from "@tryforge/forgescript"
import { IManagementServerOptions } from ".."

export interface IConnectionEvents {
    connected: (server: MinecraftServer) => void
    disconnected: () => void
}

export class MinecraftConnectionManager extends TypedEmitter<IConnectionEvents> {
    private connection?: WebSocketConnection
    private server?: MinecraftServer
    private reconnectTimer?: NodeJS.Timeout

    constructor(private readonly options: IManagementServerOptions) {
        super()
    }

    /**
     * Gets the active MinecraftServer instance.
     * @returns 
     */
    public getServer() {
        return this.server
    }

    /**
     * Returns whether a connection exists.
     * @returns 
     */
    public isConnected() {
        return !!this.connection
    }

    /**
     * Starts/Restarts the connection loop.
     * @returns 
     */
    public start() {
        if (this.connection || this.reconnectTimer) return
        void this._connect()
    }

    /**
     * Stops reconnecting and closes the connection.
     * @returns 
     */
    public stop() {
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer)
            delete this.reconnectTimer
        }

        if (this.connection) {
            this.connection.close()
            delete this.connection
        }

        delete this.server
    }

    /**
     * Establishes a connection to the server.
     * @returns 
     */
    private async _connect() {
        try {
            Logger.info("[ForgeMinecraft] Connecting to management server...")

            const { host, port, token } = this.options
            const connection = await WebSocketConnection.connect(`ws://${host}:${port}`, token).catch(() => { })

            if (!connection) {
                Logger.warn("[ForgeMinecraft] Management connection could not be established.")
                return this._scheduleReconnect()
            }

            this.connection = connection
            this.server = new MinecraftServer(this.connection)

            Logger.info("[ForgeMinecraft] Management connection established.")
            this.emit("connected", this.server)

            this.connection.on("close", () => {
                Logger.warn("[ForgeMinecraft] Management connection closed.")
                this._cleanup()
                this.emit("disconnected")
                this._scheduleReconnect()
            })

            this.connection.on("error", (err) => {
                Logger.debug("[ForgeMinecraft] Management socket error:", err.message)
            })
        } catch (err) {
            Logger.error("[ForgeMinecraft] Management connect failed:", err)
            this._scheduleReconnect()
        }
    }

    /**
     * Cleans everything up.
     * @returns 
     */
    private _cleanup() {
        delete this.connection
        delete this.server
    }

    /**
     * Schedules a reconnect to the server.
     * @returns 
     */
    private _scheduleReconnect() {
        if (this.reconnectTimer) return
        const interval = this.options.reconnectInterval!

        Logger.info(`[ForgeMinecraft] Reconnecting in ${interval / 1000}s...`)

        this.reconnectTimer = setTimeout(() => {
            delete this.reconnectTimer
            void this._connect()
        }, interval)
    }
}