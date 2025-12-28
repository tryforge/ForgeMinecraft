import { MinecraftServer } from "mc-server-management";
import { TypedEmitter } from "tiny-typed-emitter";
import { IManagementServerOptions } from "..";
export interface IConnectionEvents {
    connected: (server: MinecraftServer) => void;
    disconnected: () => void;
}
export declare class MinecraftConnectionManager extends TypedEmitter<IConnectionEvents> {
    private readonly options;
    private connection?;
    private server?;
    private reconnectTimer?;
    private attempts;
    private readonly interval;
    constructor(options: IManagementServerOptions);
    /**
    * Gets the active MinecraftServer instance.
    * @returns
    */
    getServer(): MinecraftServer | undefined;
    /**
     * Returns whether a connection exists.
     * @returns
     */
    isConnected(): boolean;
    /**
    * Starts/Restarts the connection loop.
    * @returns
    */
    start(): void;
    /**
    * Stops reconnecting and closes the connection.
    * @returns
    */
    stop(): void;
    /**
     * Establishes a connection to the server.
     * @returns
     */
    private _connect;
    /**
     * Cleans everything up.
     * @returns
     */
    private _cleanup;
    /**
     * Schedules a reconnect to the server.
     * @returns
     */
    private _scheduleReconnect;
}
//# sourceMappingURL=MinecraftConnectionManager.d.ts.map