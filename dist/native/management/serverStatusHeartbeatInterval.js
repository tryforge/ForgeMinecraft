"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverStatusHeartbeatInterval",
    description: "Returns the interval in seconds between status heartbeats sent to server management clients",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getStatusHeartbeatInterval().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverStatusHeartbeatInterval.js.map