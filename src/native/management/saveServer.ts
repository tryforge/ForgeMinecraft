import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$saveServer",
    version: "1.0.0",
    description: "Saves the minecraft server",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "flush",
            description: "Whether to save chunks to disk immediately, defaults to true",
            rest: false,
            required: true,
            type: ArgType.Boolean,
        }
    ],
    async execute(ctx, [flush]) {
        await ctx.client.minecraft.server?.save(flush ?? true).catch(ctx.noop)
        return this.success()
    }
})