"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const parsePlayer_1 = __importDefault(require("../../functions/parsePlayer"));
exports.default = new forgescript_1.NativeFunction({
    name: "$addPlayerBan",
    version: "1.0.0",
    description: "Adds a player to the server's ban list, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "player",
            description: "The player to ban from the server",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "reason",
            description: "The reason for the ban",
            rest: false,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "source",
            description: "The source of the ban",
            rest: false,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "expires",
            description: "The expire date of the ban",
            rest: false,
            type: forgescript_1.ArgType.Date,
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [player, reason, source, expires]) {
        return this.success(!!(await ctx.client.minecraft.server?.banList().add((0, parsePlayer_1.default)(player), reason || undefined, source || undefined, expires || undefined).catch(ctx.noop)));
    }
});
//# sourceMappingURL=addPlayerBan.js.map