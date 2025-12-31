"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$removeIPBans",
    version: "1.0.0",
    description: "Removes IP addresses from the server's ban list, returns bool",
    aliases: ["$removeIPBan"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "ips",
            description: "The IP addresses to unban",
            rest: true,
            required: true,
            type: forgescript_1.ArgType.String,
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [ips]) {
        return this.success(!!(await ctx.client.minecraft.server?.ipBanList().remove(ips).catch(ctx.noop)));
    }
});
//# sourceMappingURL=removeIPBans.js.map