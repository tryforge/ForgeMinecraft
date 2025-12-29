"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverStatusReplies",
    description: "Returns whether the server responds to status requests in the multiplayer server list",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getStatusReplies().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverStatusReplies.js.map