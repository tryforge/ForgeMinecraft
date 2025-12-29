import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$setMaxPlayers",
    version: "1.0.0",
    description: "Sets the maximum number of players that can join the server",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "max",
            description: "The maximum number of players",
            rest: false,
            required: true,
            type: ArgType.Number,
        }
    ],
    async execute(ctx, [max]) {
        await ctx.client.minecraft.server?.settings().setMaxPlayers(max).catch(ctx.noop)
        return this.success()
    }
})