import { ArgType, NativeFunction } from "@tryforge/forgescript"
import parsePlayer from "../../functions/parsePlayer"

export default new NativeFunction({
    name: "$removePlayerBans",
    version: "1.0.0",
    description: "Removes players from the server's ban list, returns bool",
    aliases: ["$removePlayerBan"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "players",
            description: "The players to unban",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [players]) {
        return this.success(!!(
            await ctx.client.minecraft.server?.banList().remove(players.map(parsePlayer)).catch(ctx.noop)
        ))
    }
})