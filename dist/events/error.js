"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const handlers_1 = require("../handlers");
const __1 = require("..");
exports.default = new handlers_1.MinecraftEventHandler({
    name: "error",
    version: "1.0.0",
    description: "This event is fired when an error occurred",
    listener: async function (err) {
        const commands = this.getExtension(__1.ForgeMinecraft, true).commands.get("error");
        for (const command of commands) {
            const ctx = new __1.Context({
                obj: {},
                command,
                client: this,
                extras: err.message,
                data: command.compiled.code,
            });
            forgescript_1.Interpreter.run(ctx);
        }
    },
});
//# sourceMappingURL=error.js.map