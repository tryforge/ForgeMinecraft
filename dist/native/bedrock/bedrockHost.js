"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$bedrockHost",
    version: "1.0.0",
    description: "Returns the host name of the bedrock server",
    unwrap: false,
    output: forgescript_1.ArgType.String,
    async execute(ctx) {
        return this.success((await ctx.client.minecraft.getBedrockStatus().catch(ctx.noop))?.host);
    }
});
//# sourceMappingURL=bedrockHost.js.map