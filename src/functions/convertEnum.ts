import { GameRuleType } from "../types"

type GameRuleTypeName = keyof typeof GameRuleType

export function convertGameRuleType(value: string) {
    return (Object.keys(GameRuleType) as GameRuleTypeName[]).find((key) => GameRuleType[key] === value)
}