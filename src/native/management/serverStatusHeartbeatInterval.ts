import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverStatusHeartbeatInterval",
    version: "1.0.0",
    description: "Returns the interval in seconds between status heartbeats sent to server management clients",
    unwrap: false,
    output: ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getStatusHeartbeatInterval().catch(ctx.noop))
    }
})