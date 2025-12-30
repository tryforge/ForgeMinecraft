import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { MOTDProperty } from "../java/javaMOTD";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Number;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof MOTDProperty;
}], true>;
export default _default;
//# sourceMappingURL=bedrockMOTD.d.ts.map