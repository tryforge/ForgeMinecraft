import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { GameRuleProperties, GameRuleProperty } from "../../properties/gameRule"

export default new NativeFunction({
    name: "$gameRule",
    version: "1.0.0",
    description: "Retrieves data from an event whose context was a game rule event",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: GameRuleProperty,
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    execute(ctx, [prop]) {
        const rule = ctx.gameRule
        if (!rule || prop) return this.success(GameRuleProperties[prop](rule))
        return this.successJSON(rule)
    },
})