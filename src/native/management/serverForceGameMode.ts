import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverForceGameMode",
    version: "1.0.0",
    description: "Returns whether players are forced to use the server's game mode when they join",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getForceGameMode().catch(ctx.noop))
    }
})