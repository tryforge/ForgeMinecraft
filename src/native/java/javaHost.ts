import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$javaHost",
    version: "1.0.0",
    description: "Returns the host name of the java server",
    unwrap: false,
    output: ArgType.String,
    async execute(ctx) {
        return this.success((await ctx.client.minecraft.getJavaStatus().catch(ctx.noop))?.host)
    }
})