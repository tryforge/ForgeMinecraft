import { MinecraftServer, WebSocketConnection } from "mc-server-management"
import { TypedEmitter } from "tiny-typed-emitter"
import { Logger } from "@tryforge/forgescript"
import { IManagementServerOptions } from ".."
import noop from "../functions/noop"

export interface IConnectionEvents {
    connected: (server: MinecraftServer) => void
    disconnected: () => void
}

export class MinecraftConnectionManager extends TypedEmitter<IConnectionEvents> {
    private connection?: WebSocketConnection
    private server?: MinecraftServer
    private reconnectTimer?: NodeJS.Timeout

    private attempts = 0
    private readonly interval: number

    constructor(private readonly options: IManagementServerOptions) {
        super()
        this.interval = options.reconnectInterval ?? 60_000
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
        this.attempts = 0
    }

    /**
     * Establishes a connection to the server.
     * @returns 
     */
    private async _connect() {
        try {
            Logger.info("[ForgeMinecraft] Connecting to management server...")

            const { host, port, token } = this.options
            const connection = await WebSocketConnection.connect(`ws://${host}:${port}`, token).catch(noop)

            if (!connection) {
                Logger.warn("[ForgeMinecraft] An error has occurred. Management connection could not be established.")
                this._scheduleReconnect()
                return
            }

            this.connection = connection
            this.server = new MinecraftServer(this.connection)
            this.attempts = 0

            Logger.info("[ForgeMinecraft] Management connection established.")
            this.emit("connected", this.server)

            this.connection.on("close", () => {
                Logger.warn("[ForgeMinecraft] Management connection closed.")
                this._cleanup()
                this.emit("disconnected")
                this._scheduleReconnect()
            })

            this.connection.on("error", (err) => {
                Logger.error("[ForgeMinecraft] Management socket error:", err)
            })
        } catch (err) {
            Logger.warn("[ForgeMinecraft] Management connect failed:", err)
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

        const delay = Math.min(1000 * 2 ** this.attempts, this.interval)
        this.attempts++

        Logger.info(`[ForgeMinecraft] Reconnecting in ${delay / 1000}s...`)

        this.reconnectTimer = setTimeout(() => {
            delete this.reconnectTimer
            void this._connect()
        }, delay)
    }
}