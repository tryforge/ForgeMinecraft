import { ArgType, NativeFunction } from "@tryforge/forgescript"
import array from "../../functions/array"

export enum JavaModsProperty {
    name = "name",
    version = "version",
}

export default new NativeFunction({
    name: "$javaMods",
    version: "1.0.0",
    description: "Returns the mods of a java server",
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
            enum: JavaModsProperty,
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
        const mods = (await ctx.client.minecraft.getJavaStatus(host, port || undefined).catch(ctx.noop))?.mods
        if (!mods || prop) return this.success(mods?.map((x) => x[prop!]).join(sep ?? ", "))
        return this.successJSON(mods)
    }
})