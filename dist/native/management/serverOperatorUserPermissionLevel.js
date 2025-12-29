"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverOperatorUserPermissionLevel",
    description: "Returns the permission level granted to new operators",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getOperatorUserPermissionLevel().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverOperatorUserPermissionLevel.js.map