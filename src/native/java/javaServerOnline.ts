import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$javaServerOnline",
    version: "1.0.0",
    description: "Returns whether a java server is online",
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
    output: ArgType.Boolean,
    async execute(ctx, [host, port]) {
        return this.success((await ctx.client.minecraft.getJavaStatus(host, port || undefined).catch(ctx.noop))?.online)
    }
})