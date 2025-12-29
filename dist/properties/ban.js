"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPBanProperties = exports.IPBanProperty = exports.UserBanProperties = exports.UserBanProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var UserBanProperty;
(function (UserBanProperty) {
    UserBanProperty["reason"] = "reason";
    UserBanProperty["source"] = "source";
    UserBanProperty["playerID"] = "playerID";
    UserBanProperty["playerName"] = "playerName";
    UserBanProperty["expiresTimestamp"] = "expiresTimestamp";
})(UserBanProperty || (exports.UserBanProperty = UserBanProperty = {}));
exports.UserBanProperties = (0, defineProperties_1.default)({
    reason: (i) => i?.reason,
    source: (i) => i?.source,
    playerID: (i) => i?.player.id,
    playerName: (i) => i?.player.name,
    expiresTimestamp: (i) => i?.expires,
});
var IPBanProperty;
(function (IPBanProperty) {
    IPBanProperty["ip"] = "ip";
    IPBanProperty["reason"] = "reason";
    IPBanProperty["source"] = "source";
    IPBanProperty["expiresTimestamp"] = "expiresTimestamp";
})(IPBanProperty || (exports.IPBanProperty = IPBanProperty = {}));
exports.IPBanProperties = (0, defineProperties_1.default)({
    ip: (i) => i?.ip,
    reason: (i) => i?.reason,
    source: (i) => i?.source,
    expiresTimestamp: (i) => i?.expires,
});
//# sourceMappingURL=ban.js.map