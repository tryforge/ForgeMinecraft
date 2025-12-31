"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const mc_server_management_1 = require("mc-server-management");
const isUUID_1 = __importDefault(require("./isUUID"));
/**
 * Parses a player input into a Player instance.
 * @param value The value to parse.
 * @returns
 */
function default_1(value) {
    return ((0, isUUID_1.default)(value) ? mc_server_management_1.Player.withId(value) : mc_server_management_1.Player.withName(value));
}
//# sourceMappingURL=parsePlayer.js.map