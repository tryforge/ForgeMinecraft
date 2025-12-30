"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const parsePlayer_1 = __importDefault(require("../../functions/parsePlayer"));
exports.default = new forgescript_1.NativeFunction({
    name: "$removeOperators",
    description: "Removes players from the server's operator list, returns bool",
    aliases: ["$removeOperator"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "players",
            description: "The players to remove as operator",
            rest: true,
            required: true,
            type: forgescript_1.ArgType.String,
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [players]) {
        return this.success(!!(await ctx.client.minecraft.server?.operatorList().remove(players.map(parsePlayer_1.default)).catch(ctx.noop)));
    }
});
//# sourceMappingURL=removeOperators.js.map