"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverAllowFlight",
    description: "Returns whether players are allowed to fly on the server",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getAllowFlight().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverAllowFlight.js.map