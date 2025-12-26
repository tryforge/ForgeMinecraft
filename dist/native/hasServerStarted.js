"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$hasServerStarted",
    version: "1.0.0",
    description: "Returns whether the server has fully started",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "force",
            description: "Whether to force a direct fetch",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Boolean,
        }
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [force]) {
        return this.success(!!(await ctx.client.minecraft.server?.getStatus(force || false))?.started);
    }
});
//# sourceMappingURL=hasServerStarted.js.map