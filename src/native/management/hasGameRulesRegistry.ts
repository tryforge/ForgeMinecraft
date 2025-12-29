import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$hasGameRulesRegistry",
    version: "1.0.0",
    description: "Returns whether the server has the new game rules registry",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.success(!!(await ctx.client.minecraft.server?.hasGameRulesRegistry().catch(ctx.noop)))
    }
})