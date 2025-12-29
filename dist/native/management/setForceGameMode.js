"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setForceGameMode",
    description: "Sets whether players are forced to use the server's game mode when they join",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "force",
            description: "Whether to force the server's game mode",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Boolean,
        }
    ],
    async execute(ctx, [force]) {
        await ctx.client.minecraft.server?.settings().setForceGameMode(force).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=setForceGameMode.js.map