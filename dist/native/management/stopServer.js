"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$stopServer",
    description: "Stops the minecraft server, returns bool",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        return this.success(!!(await ctx.client.minecraft.server?.stop().catch(ctx.noop)));
    }
});
//# sourceMappingURL=stopServer.js.map