import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverViewDistance",
    version: "1.0.0",
    description: "Returns the view distance of the server in chunks",
    unwrap: false,
    output: ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getViewDistance().catch(ctx.noop))
    }
})