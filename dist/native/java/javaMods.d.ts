import { ArgType, NativeFunction } from "@tryforge/forgescript";
export declare enum JavaModsProperty {
    name = "name",
    version = "version"
}
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof JavaModsProperty;
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
//# sourceMappingURL=javaMods.d.ts.map