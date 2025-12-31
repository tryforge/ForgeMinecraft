"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorProperties = exports.OperatorProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var OperatorProperty;
(function (OperatorProperty) {
    OperatorProperty["permissionLevel"] = "permissionLevel";
    OperatorProperty["bypassesPlayerLimit"] = "bypassesPlayerLimit";
    OperatorProperty["playerName"] = "playerName";
    OperatorProperty["playerID"] = "playerID";
})(OperatorProperty || (exports.OperatorProperty = OperatorProperty = {}));
exports.OperatorProperties = (0, defineProperties_1.default)({
    permissionLevel: (i) => i?.permissionLevel,
    bypassesPlayerLimit: (i) => !!i?.bypassesPlayerLimit,
    playerName: (i) => i?.player.name,
    playerID: (i) => i?.player.id
});
//# sourceMappingURL=operator.js.map