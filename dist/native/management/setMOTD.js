"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setMOTD",
    version: "1.0.0",
    description: "Sets the message of the day (MOTD) for this server",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "motd",
            description: "The MOTD to set",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String,
        }
    ],
    async execute(ctx, [motd]) {
        await ctx.client.minecraft.server?.settings().setMOTD(motd).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=setMOTD.js.map