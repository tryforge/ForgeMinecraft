import { ArgType, NativeFunction } from "@tryforge/forgescript"
import parsePlayer from "../../functions/parsePlayer"

export default new NativeFunction({
    name: "$setAllowList",
    version: "1.0.0",
    description: "Overwrites the existing allow list with a set of players, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "players",
            description: "The players to set",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [players]) {
        return this.success(!!(
            await ctx.client.minecraft.server?.allowlist().set(players.map(parsePlayer)).catch(ctx.noop)
        ))
    }
})