"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverForceGameMode",
    version: "1.0.0",
    description: "Returns whether players are forced to use the server's game mode when they join",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getForceGameMode().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverForceGameMode.js.map