"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverEntityBroadcastRange",
    version: "1.0.0",
    description: "Returns the range in chunks around each player in which entities are updated to the player, in percentage",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getEntityBroadcastRange().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverEntityBroadcastRange.js.map