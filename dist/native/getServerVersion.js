"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionProperty = void 0;
const forgescript_1 = require("@tryforge/forgescript");
var VersionProperty;
(function (VersionProperty) {
    VersionProperty["name"] = "name";
    VersionProperty["protocol"] = "protocol";
})(VersionProperty || (exports.VersionProperty = VersionProperty = {}));
exports.default = new forgescript_1.NativeFunction({
    name: "$getServerVersion",
    version: "1.0.0",
    description: "Returns the version of a minecraft server",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "force",
            description: "Whether to force a direct fetch",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Boolean,
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            required: false,
            type: forgescript_1.ArgType.Enum,
            enum: VersionProperty,
        }
    ],
    output: [
        forgescript_1.ArgType.Json,
        forgescript_1.ArgType.String
    ],
    async execute(ctx, [force, prop]) {
        const version = (await ctx.client.minecraft.server?.getStatus(force || false))?.version;
        if (!version || prop)
            return this.success(version?.[prop]);
        return this.successJSON(version);
    }
});
//# sourceMappingURL=getServerVersion.js.map