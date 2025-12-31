import { GameRuleType, IPBan, Operator, Player, ServerState, TypedGameRule, UserBan } from "mc-server-management";
import { BaseEventHandler, ForgeClient } from "@tryforge/forgescript";
export interface IMinecraftEvents {
    error: [Error];
    connected: [];
    reconnecting: [];
    disconnected: [];
    serverStarted: [];
    serverStopping: [];
    serverSaving: [];
    serverSaved: [];
    serverActivity: [];
    serverStatus: [ServerState];
    playerJoined: [Player];
    playerLeft: [Player];
    operatorAdded: [Operator];
    operatorRemoved: [Operator];
    allowListAdded: [Player];
    allowListRemoved: [Player];
    banAdded: [UserBan];
    banRemoved: [Player];
    ipBanAdded: [IPBan];
    ipBanRemoved: [string];
    gameRuleUpdated: [TypedGameRule<GameRuleType>];
}
export declare class MinecraftEventHandler<T extends keyof IMinecraftEvents> extends BaseEventHandler<IMinecraftEvents, T> {
    register(client: ForgeClient): void;
}
//# sourceMappingURL=MinecraftEventHandler.d.ts.map