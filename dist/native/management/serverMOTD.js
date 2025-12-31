"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverMOTD",
    version: "1.0.0",
    description: "Returns the server's message of the day (MOTD)",
    unwrap: false,
    output: forgescript_1.ArgType.String,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getMOTD().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverMOTD.js.map