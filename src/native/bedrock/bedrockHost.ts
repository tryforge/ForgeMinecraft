import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$bedrockHost",
    version: "1.0.0",
    description: "Returns the host name of the bedrock server",
    unwrap: false,
    output: ArgType.String,
    async execute(ctx) {
        return this.success((await ctx.client.minecraft.getBedrockStatus().catch(ctx.noop))?.host)
    }
})