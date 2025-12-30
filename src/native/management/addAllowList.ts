import { ArgType, NativeFunction } from "@tryforge/forgescript"
import parsePlayer from "../../functions/parsePlayer"

export default new NativeFunction({
    name: "$addAllowList",
    version: "1.0.0",
    description: "Adds players to the server's allow list, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "players",
            description: "The players to add",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [players]) {
        return this.success(!!(
            await ctx.client.minecraft.server?.allowlist().add(players.map(parsePlayer)).catch(ctx.noop)
        ))
    }
})