import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$hasServerStarted",
    version: "1.0.0",
    description: "Returns whether the server has fully started",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "force",
            description: "Whether to force a direct fetch, defaults to false",
            rest: false,
            required: true,
            type: ArgType.Boolean,
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [force]) {
        return this.success(!!(await ctx.client.minecraft.server?.getStatus(force || false).catch(ctx.noop))?.started)
    }
})