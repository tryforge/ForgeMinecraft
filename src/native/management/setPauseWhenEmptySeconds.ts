import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$setPauseWhenEmptySeconds",
    version: "1.0.0",
    description: "Sets the number of seconds before pausing server when no players are online",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "seconds",
            description: "The number of seconds before pausing when empty",
            rest: false,
            required: true,
            type: ArgType.Number,
        }
    ],
    async execute(ctx, [seconds]) {
        await ctx.client.minecraft.server?.settings().setPauseWhenEmptySeconds(seconds).catch(ctx.noop)
        return this.success()
    }
})