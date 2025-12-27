import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$stopServer",
    version: "1.0.0",
    description: "Stops the minecraft server, returns bool",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.success(!!(await ctx.client.minecraft.server?.stop().catch(ctx.noop)))
    }
})