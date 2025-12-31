import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverMaxPlayers",
    version: "1.0.0",
    description: "Returns the maximum number of players that can join the server",
    unwrap: false,
    output: ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getMaxPlayers().catch(ctx.noop))
    }
})