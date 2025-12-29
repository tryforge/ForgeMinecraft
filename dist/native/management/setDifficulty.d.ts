import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { Difficulty } from "../../types";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Enum;
    enum: typeof Difficulty;
}], true>;
export default _default;
//# sourceMappingURL=setDifficulty.d.ts.map