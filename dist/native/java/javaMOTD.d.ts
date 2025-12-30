import { ArgType, NativeFunction } from "@tryforge/forgescript";
export declare enum MOTDProperty {
    Raw = "raw",
    Clean = "clean",
    Html = "html"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof MOTDProperty;
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
//# sourceMappingURL=javaMOTD.d.ts.map