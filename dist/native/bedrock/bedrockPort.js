"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$bedrockPort",
    description: "Returns the port of the bedrock server",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    async execute(ctx) {
        return this.success((await ctx.client.minecraft.getBedrockStatus().catch(ctx.noop))?.port);
    }
});
//# sourceMappingURL=bedrockPort.js.map