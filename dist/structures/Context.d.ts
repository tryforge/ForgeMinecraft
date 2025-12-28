import { Context as BaseContext, IContextCache, IRunnable, Sendable } from "@tryforge/forgescript";
import { Operator, Player } from "mc-server-management";
import { ForgeMinecraft } from "..";
export type ExtendedSendable = Sendable | Player;
export interface IExtendedRunnable extends IRunnable {
    obj: ExtendedSendable;
}
export interface IExtendedContextCache extends IContextCache {
    player: Player | null;
    operator: Operator | null;
}
export declare class Context extends BaseContext {
    #private;
    readonly runtime: IExtendedRunnable;
    constructor(runtime: IExtendedRunnable);
    get obj(): ExtendedSendable;
    get player(): Player | null;
    get operator(): Operator | null;
}
declare module "@tryforge/forgescript" {
    interface Context {
        player: Player | null;
        operator: Operator | null;
    }
    interface ForgeClient {
        minecraft: ForgeMinecraft;
    }
}
//# sourceMappingURL=Context.d.ts.map