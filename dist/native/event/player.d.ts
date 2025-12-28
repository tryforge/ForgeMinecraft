import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { PlayerProperty } from "../management/getConnectedPlayers";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Enum;
    enum: typeof PlayerProperty;
}], true>;
export default _default;
//# sourceMappingURL=player.d.ts.map