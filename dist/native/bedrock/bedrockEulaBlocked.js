"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$bedrockEulaBlocked",
    description: "Returns whether a bedrock server has EULA blocked",
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
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [host, port]) {
        return this.success((await ctx.client.minecraft.getBedrockStatus(host, port || undefined).catch(ctx.noop))?.eula_blocked);
    }
});
//# sourceMappingURL=bedrockEulaBlocked.js.map