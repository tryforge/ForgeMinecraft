import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverPauseWhenEmptySeconds",
    version: "1.0.0",
    description: "Returns the number of seconds before pausing server when no players are online",
    unwrap: false,
    output: ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getPauseWhenEmptySeconds().catch(ctx.noop))
    }
})