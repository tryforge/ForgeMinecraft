"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setStatusReplies",
    description: "Sets whether the server responds to status requests in the multiplayer server list",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "respond",
            description: "Whether to respond to status requests",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Boolean,
        }
    ],
    async execute(ctx, [respond]) {
        await ctx.client.minecraft.server?.settings().setStatusReplies(respond).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=setStatusReplies.js.map