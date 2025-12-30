"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverSimulationDistance",
    version: "1.0.0",
    description: "Returns the simulation distance of the server in chunks",
    unwrap: false,
    output: forgescript_1.ArgType.Number,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getSimulationDistance().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverSimulationDistance.js.map