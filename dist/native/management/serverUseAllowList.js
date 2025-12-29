"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverUseAllowList",
    description: "Returns whether the server uses the allow list",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getUseAllowList().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverUseAllowList.js.map