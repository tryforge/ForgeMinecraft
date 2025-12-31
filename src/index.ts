import { EventManager, ForgeClient, ForgeExtension, Logger } from "@tryforge/forgescript"
import { MinecraftServer, Notifications, WebSocketConnection } from "mc-server-management"
import { statusBedrock, statusJava } from "node-mcstatus"
import { TypedEmitter } from "tiny-typed-emitter"
import { description, version } from "../package.json"
import { MinecraftCommandManager, MinecraftConnectionManager } from "./managers"
import { ForgeMinecraftEventHandlerName } from "./constants"
import { IMinecraftEvents } from "./handlers"
import resolveStatus from "./functions/resolveStatus"

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
    public commands!: MinecraftCommandManager

    private manager?: MinecraftConnectionManager
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
        return resolveStatus(statusJava, this.options.java, host, port)
    }

    /**
     * Gets the status response of a Bedrock Minecraft server. Uses the `bedrock` client options if no parameters are provided.
     * @param host The host domain of the server.
     * @param port The port for the host domain.
     * @returns 
     */
    public async getBedrockStatus(host?: string | null, port?: number) {
        return resolveStatus(statusBedrock, this.options.bedrock, host, port)
    }

    public async init(client: ForgeClient) {
        client.minecraft = this
        this.commands = new MinecraftCommandManager(client)

        if (this.options.server) {
            this.manager = new MinecraftConnectionManager(this.options.server, this.emitter)

            this.manager.on("connected", (server) => {
                this.server = server
            })

            await this.manager.connect(client)
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