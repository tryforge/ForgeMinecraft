import { ArgType, NativeFunction } from "@tryforge/forgescript"
import parsePlayer from "../../functions/parsePlayer"

export default new NativeFunction({
    name: "$addPlayerBan",
    version: "1.0.0",
    description: "Adds a player to the server's ban list, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "player",
            description: "The player to ban from the server",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "reason",
            description: "The reason for the ban",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "source",
            description: "The source of the ban",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "expires",
            description: "The expire date of the ban",
            rest: false,
            type: ArgType.Date,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [player, reason, source, expires]) {
        return this.success(!!(
            await ctx.client.minecraft.server?.banList().add(
                parsePlayer(player),
                reason || undefined,
                source || undefined,
                expires || undefined
            ).catch(ctx.noop)
        ))
    }
})