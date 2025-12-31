import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$setAllowFlight",
    version: "1.0.0",
    description: "Sets whether players are allowed to fly on the server",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "allow",
            description: "Whether to allow flying for players",
            rest: false,
            required: true,
            type: ArgType.Boolean,
        }
    ],
    async execute(ctx, [allow]) {
        await ctx.client.minecraft.server?.settings().setAllowFlight(allow).catch(ctx.noop)
        return this.success()
    }
})