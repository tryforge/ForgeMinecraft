import { EnumLike } from "@tryforge/forgescript"

export default function<From extends EnumLike, To extends EnumLike>(
    fromValue: From[keyof From],
    toEnum: To
): To[keyof To] {
    return Object.values(toEnum).find((v) => v === fromValue)
}