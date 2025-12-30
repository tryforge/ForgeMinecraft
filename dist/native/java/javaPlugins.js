"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaPluginsProperty = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const array_1 = __importDefault(require("../../functions/array"));
var JavaPluginsProperty;
(function (JavaPluginsProperty) {
    JavaPluginsProperty["name"] = "name";
    JavaPluginsProperty["version"] = "version";
})(JavaPluginsProperty || (exports.JavaPluginsProperty = JavaPluginsProperty = {}));
exports.default = new forgescript_1.NativeFunction({
    name: "$javaPlugins",
    description: "Returns the plugins of a java server",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: forgescript_1.ArgType.Enum,
            enum: JavaPluginsProperty,
        },
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
        }
    ],
    output: [
        forgescript_1.ArgType.Json,
        (0, array_1.default)()
    ],
    async execute(ctx, [prop, host, port]) {
        const plugins = (await ctx.client.minecraft.getJavaStatus(host, port || undefined).catch(ctx.noop))?.plugins;
        if (!plugins || prop)
            return this.success(plugins?.map((x) => x[prop]));
        return this.successJSON(plugins);
    }
});
//# sourceMappingURL=javaPlugins.js.map