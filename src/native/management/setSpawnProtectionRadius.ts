import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$setSpawnProtectionRadius",
    version: "1.0.0",
    description: "Sets the radius around the world spawn point that is protected from non-operator players",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "radius",
            description: "The spawn protection radius to set",
            rest: false,
            required: true,
            type: ArgType.Number,
        }
    ],
    async execute(ctx, [radius]) {
        await ctx.client.minecraft.server?.settings().setSpawnProtectionRadius(radius).catch(ctx.noop)
        return this.success()
    }
})