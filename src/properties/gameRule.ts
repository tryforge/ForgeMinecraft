import { GameRuleType, TypedGameRule } from "mc-server-management"
import { convertGameRuleType } from "../functions/convertEnum"
import defineProperties from "../functions/defineProperties"

export enum GameRuleProperty {
    key = "key",
    value = "value",
    type = "type",
}

export const GameRuleProperties = defineProperties<typeof GameRuleProperty, TypedGameRule<GameRuleType>>({
    key: (i) => i?.key,
    value: (i) => i?.value,
    type: (i) => i?.type ? convertGameRuleType(i?.type) : null,
})