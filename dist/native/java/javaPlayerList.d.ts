import { ArgType, NativeFunction } from "@tryforge/forgescript";
export declare enum JavaPlayerProperty {
    uuid = "uuid",
    nameRaw = "name_raw",
    nameClean = "name_clean",
    nameHtml = "name_html"
}
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
    enum: typeof JavaPlayerProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=javaPlayerList.d.ts.map