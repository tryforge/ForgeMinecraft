import { GameRuleType as BaseGameRuleType, TypedGameRule } from "mc-server-management"
import defineProperties from "../functions/defineProperties"
import convertEnum from "../functions/convertEnum"
import { GameRuleType } from "../types"

export enum GameRuleProperty {
    key = "key",
    value = "value",
    type = "type",
}

export const GameRuleProperties = defineProperties<typeof GameRuleProperty, TypedGameRule<BaseGameRuleType>>({
    key: (i) => i?.key,
    value: (i) => i?.value,
    type: (i) => i?.type ? convertEnum(GameRuleType, i.type) : null,
})