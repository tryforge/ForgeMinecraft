"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setUseAllowList",
    version: "1.0.0",
    description: "Sets whether the server uses the allow list",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "enable",
            description: "Whether to enable the allow list",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Boolean,
        }
    ],
    async execute(ctx, [enable]) {
        await ctx.client.minecraft.server?.settings().setUseAllowList(enable).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=setUseAllowList.js.map