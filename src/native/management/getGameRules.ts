import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { GameRuleProperties, GameRuleProperty } from "../../properties/gameRule"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$getGameRules",
    version: "1.0.0",
    description: "Returns the server's game rules",
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
            enum: GameRuleProperty,
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
        const map = await ctx.client.minecraft.server?.getGameRules(force || false).catch(ctx.noop)
        const rules = Array.from(map?.values() || [])
        if (!map || prop) return this.success(rules.map((x) => GameRuleProperties[prop!](x)).join(sep ?? ", "))
        return this.successJSON(rules)
    }
})