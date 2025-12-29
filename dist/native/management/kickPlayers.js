"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$kickPlayers",
    description: "Kicks players from the minecraft server, returns number of kicked players",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "message",
            description: "The message displayed to the players when they are kicked",
            rest: false,
            required: false,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "players",
            description: "The players to kick",
            rest: true,
            required: true,
            type: forgescript_1.ArgType.String,
        }
    ],
    output: forgescript_1.ArgType.Number,
    async execute(ctx, [msg, players]) {
        const result = await ctx.client.minecraft.server?.kickPlayers(players, msg || undefined).catch(ctx.noop);
        return this.success(result?.length || 0);
    }
});
//# sourceMappingURL=kickPlayers.js.map