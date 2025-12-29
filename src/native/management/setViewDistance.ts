import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$setViewDistance",
    version: "1.0.0",
    description: "Sets the view distance of the server in chunks",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "chunks",
            description: "The view distance in chunks",
            rest: false,
            required: true,
            type: ArgType.Number,
        }
    ],
    async execute(ctx, [chunks]) {
        await ctx.client.minecraft.server?.settings().setViewDistance(chunks).catch(ctx.noop)
        return this.success()
    }
})