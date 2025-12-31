import { IPBan, UserBan } from "mc-server-management"
import defineProperties from "../functions/defineProperties"

export enum UserBanProperty {
    reason = "reason",
    source = "source",
    playerID = "playerID",
    playerName = "playerName",
    expiresTimestamp = "expiresTimestamp",
}

export const UserBanProperties = defineProperties<typeof UserBanProperty, UserBan>({
    reason: (i) => i?.reason,
    source: (i) => i?.source,
    playerID: (i) => i?.player.id,
    playerName: (i) => i?.player.name,
    expiresTimestamp: (i) => i?.expires,
})

export enum IPBanProperty {
    ip = "ip",
    reason = "reason",
    source = "source",
    expiresTimestamp = "expiresTimestamp",
}

export const IPBanProperties = defineProperties<typeof IPBanProperty, IPBan>({
    ip: (i) => i?.ip,
    reason: (i) => i?.reason,
    source: (i) => i?.source,
    expiresTimestamp: (i) => i?.expires,
})