import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { IPBanProperties, IPBanProperty } from "../../properties/ban"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$getIPBans",
    version: "1.0.0",
    description: "Returns the server's IP ban list",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "force",
            description: "Whether to force a direct fetch, defaults to false",
            rest: false,
            required: true,
            type: ArgType.Boolean,
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: ArgType.Enum,
            enum: IPBanProperty,
        },
        {
            name: "separator",
            description: "The separator to use for each value",
            rest: false,
            type: ArgType.String,
        }
    ],
    output: [
        ArgType.Json,
        array<ArgType.Unknown>()
    ],
    async execute(ctx, [force, prop, sep]) {
        const bans = await ctx.client.minecraft.server?.ipBanList().get(force || false).catch(ctx.noop)
        if (!bans || prop) return this.success(bans?.map((x) => IPBanProperties[prop!](x)).join(sep ?? ", "))
        return this.successJSON(bans)
    }
})