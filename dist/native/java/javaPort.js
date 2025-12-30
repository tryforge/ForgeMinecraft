"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$javaPort",
    description: "Returns the port of the java server",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    async execute(ctx) {
        return this.success((await ctx.client.minecraft.getJavaStatus().catch(ctx.noop))?.port);
    }
});
//# sourceMappingURL=javaPort.js.map