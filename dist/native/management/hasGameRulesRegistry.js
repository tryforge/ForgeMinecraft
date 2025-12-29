"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$hasGameRulesRegistry",
    description: "Returns whether the server has the new game rules registry",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        return this.success(!!(await ctx.client.minecraft.server?.hasGameRulesRegistry().catch(ctx.noop)));
    }
});
//# sourceMappingURL=hasGameRulesRegistry.js.map