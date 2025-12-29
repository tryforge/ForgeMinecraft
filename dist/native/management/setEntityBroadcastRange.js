"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setEntityBroadcastRange",
    description: "Sets the range in chunks around each player in which entities are updated to the players, in percentage",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "percentage",
            description: "The entity broadcast range percentage (min 10, max 1000)",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Number,
        }
    ],
    async execute(ctx, [percentage]) {
        await ctx.client.minecraft.server?.settings().setEntityBroadcastRange(percentage).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=setEntityBroadcastRange.js.map