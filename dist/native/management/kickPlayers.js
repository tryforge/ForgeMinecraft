"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const parsePlayer_1 = __importDefault(require("../../functions/parsePlayer"));
exports.default = new forgescript_1.NativeFunction({
    name: "$kickPlayers",
    version: "1.0.0",
    description: "Kicks players from the minecraft server, returns number of kicked players",
    unwrap: true,
    brackets: true,
    experimental: true,
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
        const result = await ctx.client.minecraft.server?.kickPlayers(players.map((x) => (0, parsePlayer_1.default)(x)), msg || undefined).catch((err) => {
            if (err?.code !== -32603)
                ctx.noop(err);
        });
        return this.success(result?.length || 0);
    }
});
//# sourceMappingURL=kickPlayers.js.map