import { EnumLike } from "@tryforge/forgescript"

export default function<Enum extends EnumLike>(en: Enum, value: string) {
    return (Object.keys(en) as (keyof Enum)[]).find((key) => en[key] === value)
}