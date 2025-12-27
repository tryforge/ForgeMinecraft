"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$saveServer",
    description: "Saves the minecraft server, returns bool",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "flush",
            description: "Whether to save chunks to disk immediately, defaults to true",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Boolean,
        }
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [flush]) {
        return this.success(!!(await ctx.client.minecraft.server?.save(flush ?? true).catch(ctx.noop)));
    }
});
//# sourceMappingURL=saveServer.js.map