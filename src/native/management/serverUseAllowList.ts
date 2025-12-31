import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverUseAllowList",
    version: "1.0.0",
    description: "Returns whether the server uses the allow list",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getUseAllowList().catch(ctx.noop))
    }
})