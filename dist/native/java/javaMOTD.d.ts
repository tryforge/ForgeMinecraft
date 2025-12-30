import { ArgType, NativeFunction } from "@tryforge/forgescript";
export declare enum JavaMOTDProperty {
    Raw = "raw",
    Clean = "clean",
    Html = "html"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof JavaMOTDProperty;
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