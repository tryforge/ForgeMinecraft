"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const getServerVersion_1 = require("../management/getServerVersion");
exports.default = new forgescript_1.NativeFunction({
    name: "$bedrockVersion",
    version: "1.0.0",
    description: "Returns the version of a bedrock server",
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
            enum: getServerVersion_1.VersionProperty,
        },
    ],
    output: [
        forgescript_1.ArgType.Json,
        forgescript_1.ArgType.Unknown
    ],
    async execute(ctx, [host, port, prop]) {
        const version = (await ctx.client.minecraft.getBedrockStatus(host, port || undefined).catch(ctx.noop))?.version;
        if (!version || prop)
            return this.success(version?.[prop]);
        return this.successJSON(version);
    }
});
//# sourceMappingURL=bedrockVersion.js.map