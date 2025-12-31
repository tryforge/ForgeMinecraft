import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { GameMode } from "../../types";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Enum;
    enum: typeof GameMode;
}], true>;
export default _default;
//# sourceMappingURL=setGameMode.d.ts.map