import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { VersionProperty } from "../management/getServerVersion"

export default new NativeFunction({
    name: "$bedrockVersion",
    version: "1.0.0",
    description: "Returns the version of a bedrock server",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: ArgType.Enum,
            enum: VersionProperty,
        },
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
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    async execute(ctx, [prop, host, port]) {
        const version = (await ctx.client.minecraft.getBedrockStatus(host, port || undefined).catch(ctx.noop))?.version
        if (!version || prop) return this.success(version?.[prop!])
        return this.successJSON(version)
    }
})