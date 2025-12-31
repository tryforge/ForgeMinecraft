"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$addIPBan",
    version: "1.0.0",
    description: "Adds an IP address to the server's ban list, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "ip",
            description: "The IP address to ban from the server",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "reason",
            description: "The reason for the ban",
            rest: false,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "source",
            description: "The source of the ban",
            rest: false,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "expires",
            description: "The expire date of the ban",
            rest: false,
            type: forgescript_1.ArgType.Date,
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [ip, reason, source, expires]) {
        return this.success(!!(await ctx.client.minecraft.server?.ipBanList().add(ip, reason || undefined, source || undefined, expires || undefined).catch(ctx.noop)));
    }
});
//# sourceMappingURL=addIPBan.js.map