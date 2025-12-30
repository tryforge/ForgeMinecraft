"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverSpawnProtectionRadius",
    version: "1.0.0",
    description: "Returns the radius around the world spawn point that is protected from non-operator players",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getSpawnProtectionRadius().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverSpawnProtectionRadius.js.map