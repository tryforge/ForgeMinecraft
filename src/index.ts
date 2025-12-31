import { EventManager, ForgeClient, ForgeExtension, Logger } from "@tryforge/forgescript"
import { MinecraftServer, Notifications, WebSocketConnection } from "mc-server-management"
import { statusBedrock, statusJava } from "node-mcstatus"
import { TypedEmitter } from "tiny-typed-emitter"
import { description, version } from "../package.json"
import { MinecraftCommandManager, MinecraftConnectionManager } from "./managers"
import { ForgeMinecraftEventHandlerName } from "./constants"
import { IMinecraftEvents } from "./handlers"

export interface IManagementServerOptions {
    /**
     * The host domain of the server.
     */
    host: string

    /**
     * The port for the host connection.
     */
    port: number

    /**
     * The token needed to connect to the server.
     */
    token: string

    /**
     * Whether to automatically reconnect to the server if the connection is lost.
     * @default true
     */
    reconnect?: boolean

    /**
     * The interval in ms used to reconnect to the server.
     * @default 1000
     */
    reconnectInterval?: number

    /**
     * The maximum number of times to attempt to reconnect to the server. Set to `0` for infinite attempts.
     * @default 5
     */
    maxReconnectAttempts?: number
}

export interface IJavaServerOptions {
    /**
     * The host domain of the server.
     */
    host: string

    /**
     * The port for the host domain.
     * @default 25565
     */
    port?: number
}

export interface IBedrockServerOptions {
    /**
     * The host domain of the server.
     */
    host: string

    /**
     * The port for the host domain.
     * @default 19132
     */
    port?: number
}

export interface IForgeMinecraftOptions {
    /**
     * The events to receive from the management server.
     */
    events?: Array<keyof IMinecraftEvents>

    /**
     * The management server options used to establish a connection.
     */
    server?: IManagementServerOptions

    /**
     * The default Java server options to use for java functions.
     */
    java?: IJavaServerOptions

    /**
     * The default Bedrock server options to use for bedrock functions.
     */
    bedrock?: IBedrockServerOptions
}

export type TransformEvents<T> = {
    [P in keyof T]: T[P] extends any[] ? (...args: T[P]) => any : never
}

export class ForgeMinecraft extends ForgeExtension {
    name = "forge.minecraft"
    description = description
    version = version

    public server?: MinecraftServer
    public connection?: WebSocketConnection
    public commands!: MinecraftCommandManager

    private emitter = new TypedEmitter<TransformEvents<IMinecraftEvents>>()

    public constructor(public readonly options: IForgeMinecraftOptions = {}) {
        super()
    }

    /**
     * Gets the status response of a Java Minecraft server. Uses the `java` client options if no parameters are provided.
     * @param host The host domain of the server.
     * @param port The port for the host domain.
     * @returns 
     */
    public async getJavaStatus(host?: string | null, port?: number) {
        host ||= this.options.java?.host
        port ??= this.options.java?.port

        if (!host) return null
        return await statusJava(host, port)
    }

    /**
     * Gets the status response of a Bedrock Minecraft server. Uses the `bedrock` client options if no parameters are provided.
     * @param host The host domain of the server.
     * @param port The port for the host domain.
     * @returns 
     */
    public async getBedrockStatus(host?: string | null, port?: number) {
        host ||= this.options.bedrock?.host
        port ??= this.options.bedrock?.port

        if (!host) return null
        return await statusBedrock(host, port)
    }

    public async init(client: ForgeClient) {
        ForgeClient.prototype.minecraft = this

        this.commands = new MinecraftCommandManager(client)

        if (this.options.server) {
            Logger.info("[ForgeMinecraft] Connecting to management server...")

            const { host, port, token, reconnect, reconnectInterval, maxReconnectAttempts } = this.options.server
            const connection = await WebSocketConnection.connect(`ws://${host}:${port}`, token, {
                reconnect,
                reconnect_interval: reconnectInterval,
                max_reconnects: maxReconnectAttempts
            }).catch(() => { })

            if (connection) {
                this.connection = connection
                this.server = new MinecraftServer(connection)
                Logger.info("[ForgeMinecraft] Management connection established.")

                const attachListeners = () => {
                    const listen = (event: any, targetEvent: keyof IMinecraftEvents = event) => {
                        this.server!.on(event, (data) => this.emitter.emit(targetEvent, data))
                    }

                    listen("error")
                    listen(Notifications.ALLOWLIST_ADDED, "allowListAdded")
                    listen(Notifications.ALLOWLIST_REMOVED, "allowListRemoved")
                    listen(Notifications.BAN_ADDED, "banAdded")
                    listen(Notifications.BAN_REMOVED, "banRemoved")
                    listen(Notifications.GAME_RULE_UPDATED, "gameRuleUpdated")
                    listen(Notifications.IP_BAN_ADDED, "ipBanAdded")
                    listen(Notifications.IP_BAN_REMOVED, "ipBanRemoved")
                    listen(Notifications.OPERATOR_ADDED, "operatorAdded")
                    listen(Notifications.OPERATOR_REMOVED, "operatorRemoved")
                    listen(Notifications.PLAYER_JOINED, "playerJoined")
                    listen(Notifications.PLAYER_LEFT, "playerLeft")
                    listen(Notifications.SERVER_ACTIVITY, "serverActivity")
                    listen(Notifications.SERVER_SAVED, "serverSaved")
                    listen(Notifications.SERVER_SAVING, "serverSaving")
                    listen(Notifications.SERVER_STARTED, "serverStarted")
                    listen(Notifications.SERVER_STATUS, "serverStatus")
                    listen(Notifications.SERVER_STOPPING, "serverStopping")
                }

                if (client.isReady() as boolean) attachListeners()
                else client.once("clientReady", attachListeners)

                connection.on("open", () => {
                    Logger.info("[ForgeMinecraft] Management connection established.")
                })

                connection.on("close", () => {
                    Logger.warn("[ForgeMinecraft] Management connection closed.")
                    Logger.info("[ForgeMinecraft] Reconnecting to management server...")
                })

                connection.on("max_reconnects_reached", () => {
                    Logger.warn("[ForgeMinecraft] Maximum reconnect attempts reached. Management connection closed.")
                })

                connection.on("error", (err) => {
                    Logger.debug("[ForgeMinecraft] Management socket error:", err.message)
                })
            } else {
                Logger.warn("[ForgeMinecraft] Management connection could not be established.")
            }
        }

        EventManager.load(ForgeMinecraftEventHandlerName, __dirname + `/events`)
        this.load(__dirname + `/native`)

        if (this.options.events?.length) {
            client.events.load(ForgeMinecraftEventHandlerName, this.options.events)
        }
    }
}

export * from "./handlers"
export * from "./managers"
export * from "./structures"
export * from "./constants"
export * from "./types"