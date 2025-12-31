"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setHideOnlinePlayers",
    version: "1.0.0",
    description: "Sets whether the server hides the list of online players from the server list",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "hide",
            description: "Whether to hide the list of online players",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Boolean,
        }
    ],
    async execute(ctx, [hide]) {
        await ctx.client.minecraft.server?.settings().setHideOnlinePlayers(hide).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=setHideOnlinePlayers.js.map