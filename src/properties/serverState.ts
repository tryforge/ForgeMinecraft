import { ServerState } from "mc-server-management"
import defineProperties from "../functions/defineProperties"

export enum ServerStateProperty {
    hasStarted = "hasStarted",
    playerIDs = "playerIDs",
    playerNames = "playerNames",
    versionName = "versionName",
    versionProtocol = "versionProtocol",
}

export const ServerStateProperties = defineProperties<typeof ServerStateProperty, ServerState>({
    hasStarted: (i) => i?.started,
    playerIDs: (i, sep) => i?.players.map((x) => x.id).join(sep ?? ", "),
    playerNames: (i, sep) => i?.players.map((x) => x.name).join(sep ?? ", "),
    versionName: (i) => i?.version.name,
    versionProtocol: (i) => i?.version.protocol,
})