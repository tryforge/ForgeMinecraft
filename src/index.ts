import { EventManager, ForgeClient, ForgeExtension } from "@tryforge/forgescript"
import { MinecraftServer, Notifications, WebSocketConnection } from "mc-server-management"
import { TypedEmitter } from "tiny-typed-emitter"
import { description, version } from "../package.json"
import { MinecraftCommandManager } from "./managers"
import { IMinecraftEvents } from "./handlers"
import { ForgeMinecraftEventHandlerName } from "./constants"
import noop from "./functions/noop"

export interface IMinecraftServerOptions {
    host: string
    port?: number
    token?: string
}

export interface IForgeMinecraftOptions {
    server?: IMinecraftServerOptions
    events?: Array<keyof IMinecraftEvents>
}

export type TransformEvents<T> = {
    [P in keyof T]: T[P] extends any[] ? (...args: T[P]) => any : never
}

export class ForgeMinecraft extends ForgeExtension {
    name = "forge.minecraft"
    description = description
    version = version

    public server?: MinecraftServer
    public commands!: MinecraftCommandManager

    private emitter = new TypedEmitter<TransformEvents<IMinecraftEvents>>()

    public constructor(public readonly options: IForgeMinecraftOptions = {}) {
        super()
        if (options.server) options.server.port ??= 25565
    }

    public async init(client: ForgeClient) {
        this.commands = new MinecraftCommandManager(client)

        if (this.options.server?.token) {
            const connection = await WebSocketConnection.connect(
                `wss://${this.options.server.host}:${this.options.server.port}`,
                this.options.server.token
            ).catch(noop)

            if (connection) this.server = new MinecraftServer(connection)

            const listen = (event: any, targetEvent: keyof IMinecraftEvents = event) => {
                this.server?.on(event, (data) => this.emitter.emit(targetEvent, data))
            }

            client.once("clientReady", () => {
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
            })
        }

        EventManager.load(ForgeMinecraftEventHandlerName, __dirname + `/events`)
        this.load(__dirname + `/native`)

        if (this.options.events?.length) {
            client.events.load(ForgeMinecraftEventHandlerName, this.options.events)
        }

        ForgeClient.prototype.minecraft = this
    }
}

export * from "./handlers"
export * from "./managers"
export * from "./structures"
export * from "./constants"