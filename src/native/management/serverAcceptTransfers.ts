import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverAcceptTransfers",
    version: "1.0.0",
    description: "Returns whether the server accepts players transferred from other servers",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getAcceptTransfers().catch(ctx.noop))
    }
})