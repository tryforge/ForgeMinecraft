import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { PlayerProperty } from "../management/getConnectedPlayers"

export default new NativeFunction({
    name: "$player",
    version: "1.0.0",
    description: "Retrieves data from an event whose context was a player event",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: PlayerProperty,
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    execute(ctx, [prop]) {
        const player = ctx.player
        if (!player || prop) return this.success(player?.[prop])
        return this.successJSON(player)
    },
})