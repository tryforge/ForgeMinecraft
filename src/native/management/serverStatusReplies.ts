import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverStatusReplies",
    version: "1.0.0",
    description: "Returns whether the server responds to status requests in the multiplayer server list",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getStatusReplies().catch(ctx.noop))
    }
})