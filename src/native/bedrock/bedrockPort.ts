import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$bedrockPort",
    version: "1.0.0",
    description: "Returns the port of the bedrock server",
    unwrap: false,
    output: ArgType.Number,
    async execute(ctx) {
        return this.success((await ctx.client.minecraft.getBedrockStatus().catch(ctx.noop))?.port)
    }
})