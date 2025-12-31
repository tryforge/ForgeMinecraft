import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverSpawnProtectionRadius",
    version: "1.0.0",
    description: "Returns the radius around the world spawn point that is protected from non-operator players",
    unwrap: false,
    output: ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getSpawnProtectionRadius().catch(ctx.noop))
    }
})