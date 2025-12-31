import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$javaPort",
    version: "1.0.0",
    description: "Returns the port of the java server",
    unwrap: false,
    output: ArgType.Number,
    async execute(ctx) {
        return this.success((await ctx.client.minecraft.getJavaStatus().catch(ctx.noop))?.port)
    }
})