import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverPlayerIdleTimeout",
    version: "1.0.0",
    description: "Returns the number of minutes a player can be idle before being kicked",
    unwrap: false,
    output: ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getPlayerIdleTimeout().catch(ctx.noop))
    }
})