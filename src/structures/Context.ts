import { Context as BaseContext, IContextCache, IRunnable, Sendable } from "@tryforge/forgescript"
import { GameRuleType, IPBan, Operator, Player, ServerState, TypedGameRule, UserBan } from "mc-server-management"
import { ForgeMinecraft } from ".."

export type ExtendedSendable =
    | Sendable
    | Player
    | Operator
    | ServerState
    | TypedGameRule<GameRuleType>
    | UserBan
    | IPBan

export interface IExtendedRunnable extends IRunnable {
    obj: ExtendedSendable
}

export interface IExtendedContextCache extends IContextCache {
    player: Player | null
    operator: Operator | null
    serverState: ServerState | null
    gameRule: TypedGameRule<GameRuleType> | null
    userBan: UserBan | null
    ipBan: IPBan | null
}

export class Context extends BaseContext {
    #cache: Partial<IExtendedContextCache> = {}

    public constructor(public readonly runtime: IExtendedRunnable) {
        super(runtime)
    }

    public get obj() {
        return this.runtime.obj
    }

    public get player() {
        return this.#cache.player ??= this.obj instanceof Player ? this.obj : null
    }

    public get operator() {
        return this.#cache.operator ??= this.obj instanceof Operator ? this.obj : null
    }

    public get serverState() {
        return this.#cache.serverState ??= this.obj instanceof ServerState ? this.obj : null
    }

    public get gameRule() {
        return this.#cache.gameRule ??= this.obj instanceof TypedGameRule ? this.obj as TypedGameRule<GameRuleType> : null
    }

    public get userBan() {
        return this.#cache.userBan ??= this.obj instanceof UserBan ? this.obj : null
    }

    public get ipBan() {
        return this.#cache.ipBan ??= this.obj instanceof IPBan ? this.obj : null
    }
}

declare module "@tryforge/forgescript" {
    interface Context {
        player: Player | null
        operator: Operator | null
        serverState: ServerState | null
        gameRule: TypedGameRule<GameRuleType> | null
        userBan: UserBan | null
        ipBan: IPBan | null
    }
    interface ForgeClient {
        minecraft: ForgeMinecraft
    }
}