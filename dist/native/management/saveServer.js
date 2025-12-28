"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$saveServer",
    version: "1.0.0",
    description: "Saves the minecraft server",
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
    async execute(ctx, [flush]) {
        await ctx.client.minecraft.server?.save(flush ?? true).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=saveServer.js.map