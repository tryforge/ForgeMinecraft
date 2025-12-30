"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$bedrockPlayerCount",
    description: "Returns the online player count of a bedrock server",
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
        }
    ],
    output: forgescript_1.ArgType.Number,
    async execute(ctx, [host, port]) {
        return this.success((await ctx.client.minecraft.getBedrockStatus(host, port || undefined).catch(ctx.noop))?.players?.online);
    }
});
//# sourceMappingURL=bedrockPlayerCount.js.map