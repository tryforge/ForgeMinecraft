import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverAutoSave",
    version: "1.0.0",
    description: "Returns whether the server automatically saves the world periodically",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getAutoSave().catch(ctx.noop))
    }
})