"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverMaxPlayers",
    version: "1.0.0",
    description: "Returns the maximum number of players that can join the server",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getMaxPlayers().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverMaxPlayers.js.map