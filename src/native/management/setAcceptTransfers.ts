import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$setAcceptTransfers",
    version: "1.0.0",
    description: "Sets whether the server accepts players transferred from other servers",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "accept",
            description: "Whether to accept transferred players",
            rest: false,
            required: true,
            type: ArgType.Boolean,
        }
    ],
    async execute(ctx, [accept]) {
        await ctx.client.minecraft.server?.settings().setAcceptTransfers(accept).catch(ctx.noop)
        return this.success()
    }
})