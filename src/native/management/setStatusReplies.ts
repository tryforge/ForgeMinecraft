import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$setStatusReplies",
    version: "1.0.0",
    description: "Sets whether the server responds to status requests in the multiplayer server list",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "respond",
            description: "Whether to respond to status requests",
            rest: false,
            required: true,
            type: ArgType.Boolean,
        }
    ],
    async execute(ctx, [respond]) {
        await ctx.client.minecraft.server?.settings().setStatusReplies(respond).catch(ctx.noop)
        return this.success()
    }
})