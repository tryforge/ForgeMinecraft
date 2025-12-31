"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinecraftEventHandler = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
class MinecraftEventHandler extends forgescript_1.BaseEventHandler {
    register(client) {
        // @ts-ignore
        client.getExtension(__1.ForgeMinecraft, true).emitter.on(this.name, this.listener.bind(client));
    }
}
exports.MinecraftEventHandler = MinecraftEventHandler;
//# sourceMappingURL=MinecraftEventHandler.js.map