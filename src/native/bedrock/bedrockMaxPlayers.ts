import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$bedrockMaxPlayers",
    version: "1.0.0",
    description: "Returns the maximum amount of allowed players on a bedrock server",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "host",
            description: "The host domain of the server",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "port",
            description: "The port of the host connection",
            rest: false,
            type: ArgType.Number,
        }
    ],
    output: ArgType.Number,
    async execute(ctx, [host, port]) {
        return this.success((await ctx.client.minecraft.getBedrockStatus(host, port || undefined).catch(ctx.noop))?.players?.max)
    }
})