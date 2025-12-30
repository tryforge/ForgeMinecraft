"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const parsePlayer_1 = __importDefault(require("../../functions/parsePlayer"));
exports.default = new forgescript_1.NativeFunction({
    name: "$setAllowList",
    description: "Overwrites the existing allow list with a set of players, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "players",
            description: "The players to set",
            rest: true,
            required: true,
            type: forgescript_1.ArgType.String,
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [players]) {
        return this.success(!!(await ctx.client.minecraft.server?.allowlist().set(players.map(parsePlayer_1.default)).catch(ctx.noop)));
    }
});
//# sourceMappingURL=setAllowList.js.map