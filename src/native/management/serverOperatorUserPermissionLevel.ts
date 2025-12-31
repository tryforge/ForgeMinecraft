import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverOperatorUserPermissionLevel",
    version: "1.0.0",
    description: "Returns the permission level granted to new operators",
    unwrap: false,
    output: ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getOperatorUserPermissionLevel().catch(ctx.noop))
    }
})