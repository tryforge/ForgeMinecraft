import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$kickPlayers",
    version: "1.0.0",
    description: "Kicks players from the minecraft server, returns number of kicked players",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "message",
            description: "The message displayed to the players when they are kicked",
            rest: false,
            required: false,
            type: ArgType.String,
        },
        {
            name: "players",
            description: "The players to kick",
            rest: true,
            required: true,
            type: ArgType.String,
        }
    ],
    output: ArgType.Number,
    async execute(ctx, [msg, players]) {
        const result = await ctx.client.minecraft.server?.kickPlayers(players, msg || undefined).catch(ctx.noop)
        return this.success(result?.length || 0)
    }
})