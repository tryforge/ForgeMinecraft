"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOTDProperty = void 0;
const forgescript_1 = require("@tryforge/forgescript");
var MOTDProperty;
(function (MOTDProperty) {
    MOTDProperty["Raw"] = "raw";
    MOTDProperty["Clean"] = "clean";
    MOTDProperty["Html"] = "html";
})(MOTDProperty || (exports.MOTDProperty = MOTDProperty = {}));
exports.default = new forgescript_1.NativeFunction({
    name: "$javaMOTD",
    version: "1.0.0",
    description: "Returns the message of the day (MOTD) from a java server",
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
            enum: MOTDProperty,
        },
    ],
    output: [
        forgescript_1.ArgType.Json,
        forgescript_1.ArgType.Unknown
    ],
    async execute(ctx, [host, port, prop]) {
        const motd = (await ctx.client.minecraft.getJavaStatus(host, port || undefined).catch(ctx.noop))?.motd;
        if (!motd || prop)
            return this.success(motd?.[prop]);
        return this.successJSON(motd);
    }
});
//# sourceMappingURL=javaMOTD.js.map