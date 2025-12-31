import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { UserBanProperties, UserBanProperty } from "../../properties/ban"

export default new NativeFunction({
    name: "$playerBan",
    version: "1.0.0",
    description: "Retrieves data from an event whose context was a player ban event",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: UserBanProperty,
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    execute(ctx, [prop]) {
        const ban = ctx.userBan
        if (!ban || prop) return this.success(UserBanProperties[prop](ban))
        return this.successJSON(ban)
    },
})