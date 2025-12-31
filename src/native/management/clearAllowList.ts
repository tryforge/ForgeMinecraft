import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$clearAllowList",
    version: "1.0.0",
    description: "Clears the server's allow list, returns bool",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.successJSON(!!(
            await ctx.client.minecraft.server?.allowlist().clear().catch(ctx.noop)
        ))
    }
})