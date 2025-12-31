import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { MOTDProperty } from "../java/javaMOTD"

export default new NativeFunction({
    name: "$bedrockMOTD",
    version: "1.0.0",
    description: "Returns the message of the day (MOTD) from a bedrock server",
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
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: ArgType.Enum,
            enum: MOTDProperty,
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    async execute(ctx, [host, port, prop]) {
        const motd = (await ctx.client.minecraft.getBedrockStatus(host, port || undefined).catch(ctx.noop))?.motd
        if (!motd || prop) return this.success(motd?.[prop!])
        return this.successJSON(motd)
    }
})