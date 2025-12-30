import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { VersionProperty } from "../management/getServerVersion";
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
    enum: typeof VersionProperty;
}], true>;
export default _default;
//# sourceMappingURL=bedrockVersion.d.ts.map