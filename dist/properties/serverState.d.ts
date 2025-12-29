import { ServerState } from "mc-server-management";
export declare enum ServerStateProperty {
    hasStarted = "hasStarted",
    playerIDs = "playerIDs",
    playerNames = "playerNames",
    versionName = "versionName",
    versionProtocol = "versionProtocol"
}
export declare const ServerStateProperties: import("../functions/defineProperties").Properties<typeof ServerStateProperty, ServerState>;
//# sourceMappingURL=serverState.d.ts.map