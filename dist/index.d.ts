import { ForgeClient, ForgeExtension } from "@tryforge/forgescript";
import { MinecraftServer } from "mc-server-management";
import { MinecraftCommandManager } from "./managers";
import { IMinecraftEvents } from "./handlers";
export interface IManagementServerOptions {
    /**
     * The host domain of the server.
     */
    host: string;
    /**
     * The port for the host connection.
     */
    port: number;
    /**
     * The token needed to connect to the server.
     */
    token: string;
    /**
     * The interval in ms used to reconnect to the server.
     * @default 60_000
     */
    reconnectInterval?: number;
}
export interface IJavaServerOptions {
    /**
     * The host domain of the server.
     */
    host: string;
    /**
     * The port for the host domain.
     * @default 25565
     */
    port?: number;
}
export interface IBedrockServerOptions {
    /**
     * The host domain of the server.
     */
    host: string;
    /**
     * The port for the host domain.
     * @default 19132
     */
    port?: number;
}
export interface IForgeMinecraftOptions {
    /**
     * The events to receive from the management server.
     */
    events?: Array<keyof IMinecraftEvents>;
    /**
     * The management server options used to establish a connection.
     */
    server?: IManagementServerOptions;
    /**
     * The default Java server options to use for java functions.
     */
    java?: IJavaServerOptions;
    /**
     * The default Bedrock server options to use for bedrock functions.
     */
    bedrock?: IBedrockServerOptions;
}
export type TransformEvents<T> = {
    [P in keyof T]: T[P] extends any[] ? (...args: T[P]) => any : never;
};
export declare class ForgeMinecraft extends ForgeExtension {
    readonly options: IForgeMinecraftOptions;
    name: string;
    description: string;
    version: string;
    server?: MinecraftServer;
    commands: MinecraftCommandManager;
    private manager?;
    private emitter;
    constructor(options?: IForgeMinecraftOptions);
    /**
     * Gets the status response of a Java Minecraft server. Uses the `java` client options if no parameters are provided.
     * @param host The host domain of the server.
     * @param port The port for the host domain.
     * @returns
     */
    getJavaStatus(host?: string | null, port?: number): Promise<import("node-mcstatus").JavaStatusResponse | null>;
    /**
     * Gets the status response of a Bedrock Minecraft server. Uses the `bedrock` client options if no parameters are provided.
     * @param host The host domain of the server.
     * @param port The port for the host domain.
     * @returns
     */
    getBedrockStatus(host?: string | null, port?: number): Promise<import("node-mcstatus").BedrockStatusResponse | null>;
    init(client: ForgeClient): Promise<void>;
}
export * from "./handlers";
export * from "./managers";
export * from "./structures";
export * from "./constants";
export * from "./types";
//# sourceMappingURL=index.d.ts.map