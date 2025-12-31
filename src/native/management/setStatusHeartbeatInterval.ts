import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
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
            type: ArgType.Number,
        }
    ],
    async execute(ctx, [seconds]) {
        await ctx.client.minecraft.server?.settings().setStatusHeartbeatInterval(seconds).catch(ctx.noop)
        return this.success()
    }
})