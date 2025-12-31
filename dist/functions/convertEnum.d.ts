import { EnumLike } from "@tryforge/forgescript";
/**
 * Converts an enum string value into an enum key.
 * @param en The enum to convert the value into.
 * @param value The value to convert.
 * @returns
 */
export default function <Enum extends EnumLike>(en: Enum, value: string): keyof Enum | undefined;
//# sourceMappingURL=convertEnum.d.ts.map