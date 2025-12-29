import { EnumLike } from "@tryforge/forgescript";
export default function <From extends EnumLike, To extends EnumLike>(fromValue: From[keyof From], toEnum: To): To[keyof To];
//# sourceMappingURL=transformEnum.d.ts.map