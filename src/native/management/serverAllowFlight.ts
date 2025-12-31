import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverAllowFlight",
    version: "1.0.0",
    description: "Returns whether players are allowed to fly on the server",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getAllowFlight().catch(ctx.noop))
    }
})