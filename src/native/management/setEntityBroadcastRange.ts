import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$setEntityBroadcastRange",
    version: "1.0.0",
    description: "Sets the range in chunks around each player in which entities are updated to the players, in percentage",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "percentage",
            description: "The entity broadcast range percentage (min 10, max 1000)",
            rest: false,
            required: true,
            type: ArgType.Number,
        }
    ],
    async execute(ctx, [percentage]) {
        await ctx.client.minecraft.server?.settings().setEntityBroadcastRange(percentage).catch(ctx.noop)
        return this.success()
    }
})