"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setSpawnProtectionRadius",
    description: "Sets the radius around the world spawn point that is protected from non-operator players",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "radius",
            description: "The spawn protection radius to set",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Number,
        }
    ],
    async execute(ctx, [radius]) {
        await ctx.client.minecraft.server?.settings().setSpawnProtectionRadius(radius).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=setSpawnProtectionRadius.js.map