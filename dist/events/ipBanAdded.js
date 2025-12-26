"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const handlers_1 = require("../handlers");
const __1 = require("..");
exports.default = new handlers_1.MinecraftEventHandler({
    name: "ipBanAdded",
    version: "1.0.0",
    description: "This event is fired when an IP was banned",
    listener: async function (obj) {
        const commands = this.getExtension(__1.ForgeMinecraft, true).commands.get("ipBanAdded");
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
//# sourceMappingURL=ipBanAdded.js.map