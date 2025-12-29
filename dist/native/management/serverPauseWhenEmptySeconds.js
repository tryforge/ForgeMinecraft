"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverPauseWhenEmptySeconds",
    description: "Returns the number of seconds before pausing server when no players are online",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getPauseWhenEmptySeconds().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverPauseWhenEmptySeconds.js.map