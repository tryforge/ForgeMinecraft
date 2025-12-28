import { Context as BaseContext, IContextCache, IRunnable, Sendable } from "@tryforge/forgescript"
import { Operator, Player } from "mc-server-management"
import { ForgeMinecraft } from ".."

export type ExtendedSendable = Sendable | Player

export interface IExtendedRunnable extends IRunnable {
    obj: ExtendedSendable
}

export interface IExtendedContextCache extends IContextCache {
    player: Player | null
    operator: Operator | null
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
}

declare module "@tryforge/forgescript" {
    interface Context {
        player: Player | null
        operator: Operator | null
    }
    interface ForgeClient {
        minecraft: ForgeMinecraft
    }
}