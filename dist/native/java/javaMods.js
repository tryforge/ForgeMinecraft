"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaModsProperty = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const array_1 = __importDefault(require("../../functions/array"));
var JavaModsProperty;
(function (JavaModsProperty) {
    JavaModsProperty["name"] = "name";
    JavaModsProperty["version"] = "version";
})(JavaModsProperty || (exports.JavaModsProperty = JavaModsProperty = {}));
exports.default = new forgescript_1.NativeFunction({
    name: "$javaMods",
    version: "1.0.0",
    description: "Returns the mods of a java server",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "host",
            description: "The host domain of the server",
            rest: false,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "port",
            description: "The port of the host connection",
            rest: false,
            type: forgescript_1.ArgType.Number,
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: forgescript_1.ArgType.Enum,
            enum: JavaModsProperty,
        },
        {
            name: "separator",
            description: "The separator to use for each value",
            rest: false,
            type: forgescript_1.ArgType.String,
        },
    ],
    output: [
        forgescript_1.ArgType.Json,
        (0, array_1.default)()
    ],
    async execute(ctx, [host, port, prop, sep]) {
        const mods = (await ctx.client.minecraft.getJavaStatus(host, port || undefined).catch(ctx.noop))?.mods;
        if (!mods || prop)
            return this.success(mods?.map((x) => x[prop]).join(sep ?? ", "));
        return this.successJSON(mods);
    }
});
//# sourceMappingURL=javaMods.js.map