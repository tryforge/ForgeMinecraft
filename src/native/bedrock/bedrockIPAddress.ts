import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$bedrockIPAddress",
    version: "1.0.0",
    description: "Returns the IP address of a bedrock server",
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
    output: ArgType.String,
    async execute(ctx, [host, port]) {
        const status = await ctx.client.minecraft.getBedrockStatus(host, port || undefined).catch(ctx.noop)
        return this.success(status && "ip_address" in status ? status?.ip_address : null)
    }
})