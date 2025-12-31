import { IPBan, UserBan } from "mc-server-management";
export declare enum UserBanProperty {
    reason = "reason",
    source = "source",
    playerID = "playerID",
    playerName = "playerName",
    expiresTimestamp = "expiresTimestamp"
}
export declare const UserBanProperties: import("../functions/defineProperties").Properties<typeof UserBanProperty, UserBan>;
export declare enum IPBanProperty {
    ip = "ip",
    reason = "reason",
    source = "source",
    expiresTimestamp = "expiresTimestamp"
}
export declare const IPBanProperties: import("../functions/defineProperties").Properties<typeof IPBanProperty, IPBan>;
//# sourceMappingURL=ban.d.ts.map