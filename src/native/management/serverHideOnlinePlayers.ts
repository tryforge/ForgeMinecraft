import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverHideOnlinePlayers",
    version: "1.0.0",
    description: "Returns whether the server hides the list of online players from the server list",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getHideOnlinePlayers().catch(ctx.noop))
    }
})