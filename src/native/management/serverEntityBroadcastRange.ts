import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverEntityBroadcastRange",
    version: "1.0.0",
    description: "Returns the range in chunks around each player in which entities are updated to the player, in percentage",
    unwrap: false,
    output: ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getEntityBroadcastRange().catch(ctx.noop))
    }
})