import { ArgType, NativeFunction } from "@tryforge/forgescript";
export declare enum VersionProperty {
    name = "name",
    protocol = "protocol"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    required: true;
    type: ArgType.Boolean;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof VersionProperty;
}], true>;
export default _default;
//# sourceMappingURL=getServerVersion.d.ts.map