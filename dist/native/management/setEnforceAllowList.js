"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setEnforceAllowList",
    description: "Sets whether the server immediately kicks players when they are removed from the allow list",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "enforce",
            description: "Whether to enable enforcement",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Boolean,
        }
    ],
    async execute(ctx, [enforce]) {
        await ctx.client.minecraft.server?.settings().setEnforceAllowList(enforce).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=setEnforceAllowList.js.map