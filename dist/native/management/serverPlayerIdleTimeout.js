"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverPlayerIdleTimeout",
    description: "Returns the number of minutes a player can be idle before being kicked",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getPlayerIdleTimeout().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverPlayerIdleTimeout.js.map