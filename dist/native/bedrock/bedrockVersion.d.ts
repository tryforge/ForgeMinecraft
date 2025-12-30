import { ArgType, NativeFunction } from "@tryforge/forgescript";
import { VersionProperty } from "../management/getServerVersion";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof VersionProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Number;
}], true>;
export default _default;
//# sourceMappingURL=bedrockVersion.d.ts.map