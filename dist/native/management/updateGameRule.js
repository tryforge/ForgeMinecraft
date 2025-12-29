"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$updateGameRule",
    version: "1.0.0",
    description: "Updates a game rule of the minecraft server, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "key",
            description: "The key of the game rule to update",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "value",
            description: "The new value for the game rule",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String,
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [key, value]) {
        return this.success(!!(await ctx.client.minecraft.server?.updateGameRule(key, value).catch(ctx.noop)));
    }
});
//# sourceMappingURL=updateGameRule.js.map