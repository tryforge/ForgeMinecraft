import { Context as BaseContext, IContextCache, IRunnable, Sendable } from "@tryforge/forgescript";
import { GameRuleType, IPBan, Operator, Player, ServerState, TypedGameRule, UserBan } from "mc-server-management";
import { ForgeMinecraft } from "..";
export type ExtendedSendable = Sendable | Player | Operator | ServerState | TypedGameRule<GameRuleType> | UserBan | IPBan;
export interface IExtendedRunnable extends IRunnable {
    obj: ExtendedSendable;
}
export interface IExtendedContextCache extends IContextCache {
    player: Player | null;
    operator: Operator | null;
    serverState: ServerState | null;
    gameRule: TypedGameRule<GameRuleType> | null;
    userBan: UserBan | null;
    ipBan: IPBan | null;
}
export declare class Context extends BaseContext {
    #private;
    readonly runtime: IExtendedRunnable;
    constructor(runtime: IExtendedRunnable);
    get obj(): ExtendedSendable;
    get player(): Player | null;
    get operator(): Operator | null;
    get serverState(): ServerState | null;
    get gameRule(): TypedGameRule<GameRuleType> | null;
    get userBan(): UserBan | null;
    get ipBan(): IPBan | null;
}
declare module "@tryforge/forgescript" {
    interface Context {
        player: Player | null;
        operator: Operator | null;
        serverState: ServerState | null;
        gameRule: TypedGameRule<GameRuleType> | null;
        userBan: UserBan | null;
        ipBan: IPBan | null;
    }
    interface ForgeClient {
        minecraft: ForgeMinecraft;
    }
}
//# sourceMappingURL=Context.d.ts.map