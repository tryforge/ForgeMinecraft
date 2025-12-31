"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setStatusHeartbeatInterval",
    version: "1.0.0",
    description: "Sets the interval in seconds between status heartbeats sent to server management clients",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "seconds",
            description: "The status heartbeat interval in seconds",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Number,
        }
    ],
    async execute(ctx, [seconds]) {
        await ctx.client.minecraft.server?.settings().setStatusHeartbeatInterval(seconds).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=setStatusHeartbeatInterval.js.map