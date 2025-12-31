"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaPlayerProperty = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const array_1 = __importDefault(require("../../functions/array"));
var JavaPlayerProperty;
(function (JavaPlayerProperty) {
    JavaPlayerProperty["uuid"] = "uuid";
    JavaPlayerProperty["nameRaw"] = "name_raw";
    JavaPlayerProperty["nameClean"] = "name_clean";
    JavaPlayerProperty["nameHtml"] = "name_html";
})(JavaPlayerProperty || (exports.JavaPlayerProperty = JavaPlayerProperty = {}));
exports.default = new forgescript_1.NativeFunction({
    name: "$javaPlayerList",
    version: "1.0.0",
    description: "Returns the online player list of a java server",
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
            enum: JavaPlayerProperty,
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
        const players = (await ctx.client.minecraft.getJavaStatus(host, port || undefined).catch(ctx.noop))?.players?.list;
        if (!players || prop)
            return this.success(players?.map((x) => x[prop]).join(sep ?? ", "));
        return this.successJSON(players);
    }
});
//# sourceMappingURL=javaPlayerList.js.map