import { Operator } from "mc-server-management"
import defineProperties from "../functions/defineProperties"

export enum OperatorProperty {
    permissionLevel = "permissionLevel",
    bypassesPlayerLimit = "bypassesPlayerLimit",
    playerName = "playerName",
    playerID = "playerID"
}

export const OperatorProperties = defineProperties<typeof OperatorProperty, Operator>({
    permissionLevel: (i) => i?.permissionLevel,
    bypassesPlayerLimit: (i) => !!i?.bypassesPlayerLimit,
    playerName: (i) => i?.player.name,
    playerID: (i) => i?.player.id
})