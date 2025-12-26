"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const handlers_1 = require("../handlers");
const __1 = require("..");
exports.default = new handlers_1.MinecraftEventHandler({
    name: "ipBanRemoved",
    version: "1.0.0",
    description: "This event is fired when an IP was unbanned",
    listener: async function (obj) {
        const commands = this.getExtension(__1.ForgeMinecraft, true).commands.get("ipBanRemoved");
        for (const command of commands) {
            const ctx = new __1.Context({
                obj,
                command,
                client: this,
                data: command.compiled.code,
            });
            forgescript_1.Interpreter.run(ctx);
        }
    },
});
//# sourceMappingURL=ipBanRemoved.js.map