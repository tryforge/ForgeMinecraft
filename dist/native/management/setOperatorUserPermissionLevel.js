"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setOperatorUserPermissionLevel",
    version: "1.0.0",
    description: "Sets the permission level granted to new operators",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "level",
            description: "The operator user permission level (from 1 to 4, with 4 being the highest)",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Number,
        }
    ],
    async execute(ctx, [level]) {
        await ctx.client.minecraft.server?.settings().setOperatorUserPermissionLevel(level).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=setOperatorUserPermissionLevel.js.map