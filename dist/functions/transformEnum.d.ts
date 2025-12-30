import { EnumLike } from "@tryforge/forgescript";
/**
 * Transforms an enum value from one enum to another.
 * @param fromValue The value to transform.
 * @param toEnum The enum to transform the value into.
 * @returns
 */
export default function <From extends EnumLike, To extends EnumLike>(fromValue: From[keyof From], toEnum: To): To[keyof To];
//# sourceMappingURL=transformEnum.d.ts.map