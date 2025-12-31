import { MinecraftServer, WebSocketConnection } from "mc-server-management";
import { TypedEmitter } from "tiny-typed-emitter";
import { IMinecraftEvents } from "../handlers";
import { IManagementServerOptions, TransformEvents } from "../index";
export interface IConnectionEvents {
    connected: (server: MinecraftServer) => void;
    disconnected: () => void;
}
export declare class MinecraftConnectionManager extends TypedEmitter<IConnectionEvents> {
    private readonly options;
    private readonly emitter;
    connection?: WebSocketConnection;
    server?: MinecraftServer;
    constructor(options: IManagementServerOptions, emitter: TypedEmitter<TransformEvents<IMinecraftEvents>>);
    connect(): Promise<void>;
    private _attachSocketListeners;
    private _attachServerListeners;
}
//# sourceMappingURL=MinecraftConnectionManager.d.ts.map