import { ArgType, NativeFunction } from "@tryforge/forgescript"
import parsePlayer from "../../functions/parsePlayer"

export default new NativeFunction({
    name: "$addOperator",
    version: "1.0.0",
    description: "Adds a player to the server's operator list, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "player",
            description: "The player to add as an operator",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "level",
            description: "The operator permission level to grant (from 1 to 4, with 4 being the highest)",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "bypass",
            description: "Whether the operator bypasses the player limit",
            rest: false,
            type: ArgType.Boolean,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [player, level, bypass]) {
        return this.success(!!(
            await ctx.client.minecraft.server?.operatorList().add(
                parsePlayer(player),
                level || undefined,
                typeof(bypass) === "boolean" ? bypass : undefined
            ).catch(ctx.noop)
        ))
    }
})