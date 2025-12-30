import { ArgType, NativeFunction } from "@tryforge/forgescript";
export declare enum JavaVersionProperty {
    nameRaw = "name_raw",
    nameClean = "name_clean",
    nameHtml = "name_html",
    protocol = "protocol"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof JavaVersionProperty;
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
//# sourceMappingURL=javaVersion.d.ts.map