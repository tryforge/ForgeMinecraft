"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaVersionProperty = void 0;
const forgescript_1 = require("@tryforge/forgescript");
var JavaVersionProperty;
(function (JavaVersionProperty) {
    JavaVersionProperty["nameRaw"] = "name_raw";
    JavaVersionProperty["nameClean"] = "name_clean";
    JavaVersionProperty["nameHtml"] = "name_html";
    JavaVersionProperty["protocol"] = "protocol";
})(JavaVersionProperty || (exports.JavaVersionProperty = JavaVersionProperty = {}));
exports.default = new forgescript_1.NativeFunction({
    name: "$javaVersion",
    description: "Returns the version of a java server",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: forgescript_1.ArgType.Enum,
            enum: JavaVersionProperty,
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
        forgescript_1.ArgType.Unknown
    ],
    async execute(ctx, [prop, host, port]) {
        const version = (await ctx.client.minecraft.getJavaStatus(host, port || undefined).catch(ctx.noop))?.version;
        if (!version || prop)
            return this.success(version?.[prop]);
        return this.successJSON(version);
    }
});
//# sourceMappingURL=javaVersion.js.map