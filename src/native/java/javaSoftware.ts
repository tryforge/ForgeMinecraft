import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$javaSoftware",
    version: "1.0.0",
    description: "Returns the software of a java server",
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
        return this.success((await ctx.client.minecraft.getJavaStatus(host, port || undefined).catch(ctx.noop))?.software)
    }
})