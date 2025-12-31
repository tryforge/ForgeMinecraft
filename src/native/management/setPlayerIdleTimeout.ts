import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$setPlayerIdleTimeout",
    version: "1.0.0",
    description: "Sets the number of minutes a player can be idle before being kicked",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "minutes",
            description: "The number of minutes before kicking idle players",
            rest: false,
            required: true,
            type: ArgType.Number,
        }
    ],
    async execute(ctx, [minutes]) {
        await ctx.client.minecraft.server?.settings().setPlayerIdleTimeout(minutes).catch(ctx.noop)
        return this.success()
    }
})