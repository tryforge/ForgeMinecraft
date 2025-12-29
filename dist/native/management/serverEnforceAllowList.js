"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverEnforceAllowList",
    description: "Returns whether the server immediately kicks players when they are removed from the allow list",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getEnforceAllowList().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverEnforceAllowList.js.map