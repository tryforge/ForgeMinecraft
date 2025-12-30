"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const types_1 = require("../../types");
exports.default = new forgescript_1.NativeFunction({
    name: "$bedrockGameMode",
    version: "1.0.0",
    description: "Returns the game mode of a bedrock server",
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
    output: types_1.GameMode,
    async execute(ctx, [host, port]) {
        return this.success((await ctx.client.minecraft.getBedrockStatus(host, port || undefined).catch(ctx.noop))?.gamemode);
    }
});
//# sourceMappingURL=bedrockGameMode.js.map