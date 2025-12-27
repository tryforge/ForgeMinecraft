import { ArgType, NativeFunction } from "@tryforge/forgescript";
export declare enum PlayerProperty {
    id = "id",
    name = "name"
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
    enum: typeof PlayerProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=getConnectedPlayers.d.ts.map