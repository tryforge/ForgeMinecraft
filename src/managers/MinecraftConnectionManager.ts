import { EventData, MinecraftServer, Notifications, WebSocketConnection } from "mc-server-management"
import { ForgeClient, Logger } from "@tryforge/forgescript"
import { TypedEmitter } from "tiny-typed-emitter"
import { IMinecraftEvents } from "../handlers"
import { IManagementServerOptions, TransformEvents } from "../index"

export interface IConnectionEvents {
    connected: (server: MinecraftServer) => void
    disconnected: () => void
}

export class MinecraftConnectionManager extends TypedEmitter<IConnectionEvents> {
    public connection?: WebSocketConnection
    public server?: MinecraftServer

    constructor(
        private readonly options: IManagementServerOptions,
        private readonly emitter: TypedEmitter<TransformEvents<IMinecraftEvents>>
    ) {
        super()
    }

    public async connect(client: ForgeClient) {
        Logger.info("[ForgeMinecraft] Connecting to management server...")

        const { host, port, token, reconnect, reconnectInterval, maxReconnectAttempts } = this.options
        const connection = await WebSocketConnection.connect(`ws://${host}:${port}`, token, {
            reconnect,
            reconnect_interval: reconnectInterval,
            max_reconnects: maxReconnectAttempts
        }).catch(() => undefined)

        if (!connection) {
            Logger.warn("[ForgeMinecraft] Management connection could not be established.")
            return
        }

        Logger.info("[ForgeMinecraft] Management connection established.")

        this.connection = connection
        this.server = new MinecraftServer(connection)

        this._attachSocketListeners(connection)

        if (client.isReady() as boolean) this._attachServerListeners(this.server)
        else client.once("clientReady", () => this._attachServerListeners(this.server!))

        this.emit("connected", this.server)
    }

    private _attachSocketListeners(connection: WebSocketConnection) {
        connection.on("open", () => {
            Logger.info("[ForgeMinecraft] Management connection established.")
        })

        connection.on("close", () => {
            Logger.warn("[ForgeMinecraft] Management connection closed.")
            this.emit("disconnected")
            if (this.options.reconnect !== false) {
                Logger.info("[ForgeMinecraft] Reconnecting to management server...")
            }
        })

        connection.on("max_reconnects_reached", () => {
            Logger.warn("[ForgeMinecraft] Maximum reconnect attempts reached. Connection closed.")
        })

        connection.on("error", (err) => {
            Logger.debug("[ForgeMinecraft] Management socket error:", err.message)
        })
    }

    private _attachServerListeners(server: MinecraftServer) {
        const events: Array<[keyof EventData, keyof IMinecraftEvents]> = [
            ["error", "error"],
            [Notifications.ALLOWLIST_ADDED, "allowListAdded"],
            [Notifications.ALLOWLIST_REMOVED, "allowListRemoved"],
            [Notifications.BAN_ADDED, "banAdded"],
            [Notifications.BAN_REMOVED, "banRemoved"],
            [Notifications.GAME_RULE_UPDATED, "gameRuleUpdated"],
            [Notifications.IP_BAN_ADDED, "ipBanAdded"],
            [Notifications.IP_BAN_REMOVED, "ipBanRemoved"],
            [Notifications.OPERATOR_ADDED, "operatorAdded"],
            [Notifications.OPERATOR_REMOVED, "operatorRemoved"],
            [Notifications.PLAYER_JOINED, "playerJoined"],
            [Notifications.PLAYER_LEFT, "playerLeft"],
            [Notifications.SERVER_ACTIVITY, "serverActivity"],
            [Notifications.SERVER_SAVED, "serverSaved"],
            [Notifications.SERVER_SAVING, "serverSaving"],
            [Notifications.SERVER_STARTED, "serverStarted"],
            [Notifications.SERVER_STATUS, "serverStatus"],
            [Notifications.SERVER_STOPPING, "serverStopping"]
        ]

        for (const [event, targetEvent] of events) {
            server.on(event, (...data) => {
                this.emitter.emit(targetEvent, ...data)
            })
        }
    }
}