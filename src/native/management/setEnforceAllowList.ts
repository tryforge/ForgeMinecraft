import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$setEnforceAllowList",
    version: "1.0.0",
    description: "Sets whether the server immediately kicks players when they are removed from the allow list",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "enforce",
            description: "Whether to enable enforcement",
            rest: false,
            required: true,
            type: ArgType.Boolean,
        }
    ],
    async execute(ctx, [enforce]) {
        await ctx.client.minecraft.server?.settings().setEnforceAllowList(enforce).catch(ctx.noop)
        return this.success()
    }
})