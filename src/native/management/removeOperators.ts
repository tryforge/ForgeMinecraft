import { ArgType, NativeFunction } from "@tryforge/forgescript"
import parsePlayer from "../../functions/parsePlayer"

export default new NativeFunction({
    name: "$removeOperators",
    version: "1.0.0",
    description: "Removes players from the server's operator list, returns bool",
    aliases: ["$removeOperator"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "players",
            description: "The players to remove as operator",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [players]) {
        return this.success(!!(
            await ctx.client.minecraft.server?.operatorList().remove(players.map(parsePlayer)).catch(ctx.noop)
        ))
    }
})