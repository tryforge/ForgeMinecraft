"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BedrockEdition = void 0;
const forgescript_1 = require("@tryforge/forgescript");
var BedrockEdition;
(function (BedrockEdition) {
    BedrockEdition[BedrockEdition["MCPE"] = 0] = "MCPE";
    BedrockEdition[BedrockEdition["MCEE"] = 1] = "MCEE";
})(BedrockEdition || (exports.BedrockEdition = BedrockEdition = {}));
exports.default = new forgescript_1.NativeFunction({
    name: "$bedrockEdition",
    version: "1.0.0",
    description: "Returns the edition of a bedrock server",
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
    output: BedrockEdition,
    async execute(ctx, [host, port]) {
        return this.success((await ctx.client.minecraft.getBedrockStatus(host, port || undefined).catch(ctx.noop))?.edition);
    }
});
//# sourceMappingURL=bedrockEdition.js.map