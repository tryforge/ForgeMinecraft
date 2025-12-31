"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinecraftCommandManager = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const constants_1 = require("../constants");
class MinecraftCommandManager extends forgescript_1.BaseCommandManager {
    handlerName = constants_1.ForgeMinecraftEventHandlerName;
}
exports.MinecraftCommandManager = MinecraftCommandManager;
//# sourceMappingURL=MinecraftCommandManager.js.map