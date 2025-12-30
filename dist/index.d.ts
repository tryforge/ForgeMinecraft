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
     * The port for the host connection.
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
     * The port for the host connection.
     * @default 19132
     */
    port?: number;
}
export interface IForgeMinecraftOptions {
    events?: Array<keyof IMinecraftEvents>;
    server?: IManagementServerOptions;
    java?: IJavaServerOptions;
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
    getJavaStatus(host?: string | null, port?: number): Promise<import("node-mcstatus").JavaStatusResponse | null>;
    getBedrockStatus(host?: string | null, port?: number): Promise<import("node-mcstatus").BedrockStatusResponse | null>;
    init(client: ForgeClient): Promise<void>;
}
export * from "./handlers";
export * from "./managers";
export * from "./structures";
export * from "./constants";
export * from "./types";
//# sourceMappingURL=index.d.ts.map