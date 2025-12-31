import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$setAutoSave",
    version: "1.0.0",
    description: "Sets whether the server automatically saves the world periodically",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "save",
            description: "Whether to enable auto-saving the world",
            rest: false,
            required: true,
            type: ArgType.Boolean,
        }
    ],
    async execute(ctx, [save]) {
        await ctx.client.minecraft.server?.settings().setAutoSave(save).catch(ctx.noop)
        return this.success()
    }
})