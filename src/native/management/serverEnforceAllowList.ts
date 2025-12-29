import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverEnforceAllowList",
    version: "1.0.0",
    description: "Returns whether the server immediately kicks players when they are removed from the allow list",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getEnforceAllowList().catch(ctx.noop))
    }
})