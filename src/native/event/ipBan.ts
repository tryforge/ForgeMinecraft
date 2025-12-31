import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { IPBanProperties, IPBanProperty } from "../../properties/ban"

export default new NativeFunction({
    name: "$ipBan",
    version: "1.0.0",
    description: "Retrieves data from an event whose context was an IP ban event",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: IPBanProperty,
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    execute(ctx, [prop]) {
        const ban = ctx.ipBan
        if (!ban || prop) return this.success(IPBanProperties[prop](ban))
        return this.successJSON(ban)
    },
})