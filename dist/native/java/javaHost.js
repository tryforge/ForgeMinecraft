"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$javaHost",
    description: "Returns the host name of the java server",
    unwrap: false,
    output: forgescript_1.ArgType.String,
    async execute(ctx) {
        return this.success((await ctx.client.minecraft.getJavaStatus().catch(ctx.noop))?.host);
    }
});
//# sourceMappingURL=javaHost.js.map