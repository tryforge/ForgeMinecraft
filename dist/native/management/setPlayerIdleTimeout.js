"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setPlayerIdleTimeout",
    version: "1.0.0",
    description: "Sets the number of minutes a player can be idle before being kicked",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "minutes",
            description: "The number of minutes before kicking idle players",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Number,
        }
    ],
    async execute(ctx, [minutes]) {
        await ctx.client.minecraft.server?.settings().setPlayerIdleTimeout(minutes).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=setPlayerIdleTimeout.js.map