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
            name: "property",
            description: "The property to return",
            rest: false,
            type: ArgType.Enum,
            enum: JavaModsProperty,
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
        array<ArgType.String>()
    ],
    async execute(ctx, [prop, host, port]) {
        const mods = (await ctx.client.minecraft.getJavaStatus(host, port || undefined).catch(ctx.noop))?.mods
        if (!mods || prop) return this.success(mods?.map((x) => x[prop!]))
        return this.successJSON(mods)
    }
})