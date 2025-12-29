"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerStateProperties = exports.ServerStateProperty = void 0;
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var ServerStateProperty;
(function (ServerStateProperty) {
    ServerStateProperty["hasStarted"] = "hasStarted";
    ServerStateProperty["playerIDs"] = "playerIDs";
    ServerStateProperty["playerNames"] = "playerNames";
    ServerStateProperty["versionName"] = "versionName";
    ServerStateProperty["versionProtocol"] = "versionProtocol";
})(ServerStateProperty || (exports.ServerStateProperty = ServerStateProperty = {}));
exports.ServerStateProperties = (0, defineProperties_1.default)({
    hasStarted: (i) => i?.started,
    playerIDs: (i, sep) => i?.players.map((x) => x.id).join(sep ?? ", "),
    playerNames: (i, sep) => i?.players.map((x) => x.name).join(sep ?? ", "),
    versionName: (i) => i?.version.name,
    versionProtocol: (i) => i?.version.protocol,
});
//# sourceMappingURL=serverState.js.map