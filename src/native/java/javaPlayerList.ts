import { ArgType, NativeFunction } from "@tryforge/forgescript"
import array from "../../functions/array"

export enum JavaPlayerProperty {
    uuid = "uuid",
    nameRaw = "name_raw",
    nameClean = "name_clean",
    nameHtml = "name_html",
}

export default new NativeFunction({
    name: "$javaPlayerList",
    version: "1.0.0",
    description: "Returns the online player list of a java server",
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
            enum: JavaPlayerProperty,
        },
        {
            name: "separator",
            description: "The separator to use for each value",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: [
        ArgType.Json,
        array<ArgType.String>()
    ],
    async execute(ctx, [host, port, prop, sep]) {
        const players = (await ctx.client.minecraft.getJavaStatus(host, port || undefined).catch(ctx.noop))?.players?.list
        if (!players || prop) return this.success(players?.map((x) => x[prop!]).join(sep ?? ", "))
        return this.successJSON(players)
    }
})