import { Context as BaseContext, IContextCache, IRunnable, Sendable } from "@tryforge/forgescript";
import { Player } from "mc-server-management";
import { ForgeMinecraft } from "..";
export type ExtendedSendable = Sendable | Player;
export interface IExtendedRunnable extends IRunnable {
    obj: ExtendedSendable;
}
export interface IExtendedContextCache extends IContextCache {
    player: Player | null;
}
export declare class Context extends BaseContext {
    #private;
    readonly runtime: IExtendedRunnable;
    constructor(runtime: IExtendedRunnable);
    get obj(): ExtendedSendable;
    get player(): Player | null;
}
declare module "@tryforge/forgescript" {
    interface Context {
        player: Player | null;
    }
    interface ForgeClient {
        minecraft: ForgeMinecraft;
    }
}
//# sourceMappingURL=Context.d.ts.map