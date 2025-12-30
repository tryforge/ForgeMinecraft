"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const parsePlayer_1 = __importDefault(require("../../functions/parsePlayer"));
exports.default = new forgescript_1.NativeFunction({
    name: "$removePlayerBans",
    description: "Removes players from the server's ban list, returns bool",
    aliases: ["$removePlayerBan"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "players",
            description: "The players to unban",
            rest: true,
            required: true,
            type: forgescript_1.ArgType.String,
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [players]) {
        return this.success(!!(await ctx.client.minecraft.server?.banList().remove(players.map(parsePlayer_1.default)).catch(ctx.noop)));
    }
});
//# sourceMappingURL=removePlayerBans.js.map