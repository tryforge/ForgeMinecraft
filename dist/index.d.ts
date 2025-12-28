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
     */
    reconnectInterval: number;
}
export interface IForgeMinecraftOptions {
    server?: IManagementServerOptions;
    events?: Array<keyof IMinecraftEvents>;
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
    init(client: ForgeClient): Promise<void>;
}
export * from "./handlers";
export * from "./managers";
export * from "./structures";
export * from "./constants";
//# sourceMappingURL=index.d.ts.map