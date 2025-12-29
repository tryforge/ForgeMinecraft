import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$setForceGameMode",
    version: "1.0.0",
    description: "Sets whether players are forced to use the server's game mode when they join",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "force",
            description: "Whether to force the server's game mode",
            rest: false,
            required: true,
            type: ArgType.Boolean,
        }
    ],
    async execute(ctx, [force]) {
        await ctx.client.minecraft.server?.settings().setForceGameMode(force).catch(ctx.noop)
        return this.success()
    }
})