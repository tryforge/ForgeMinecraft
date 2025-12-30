"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const parsePlayer_1 = __importDefault(require("../../functions/parsePlayer"));
exports.default = new forgescript_1.NativeFunction({
    name: "$addOperator",
    version: "1.0.0",
    description: "Adds a player to the server's operator list, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "player",
            description: "The player to add as an operator",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "level",
            description: "The operator permission level to grant (from 1 to 4, with 4 being the highest)",
            rest: false,
            type: forgescript_1.ArgType.Number,
        },
        {
            name: "bypass",
            description: "Whether the operator bypasses the player limit",
            rest: false,
            type: forgescript_1.ArgType.Boolean,
        },
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [player, level, bypass]) {
        return this.success(!!(await ctx.client.minecraft.server?.operatorList().add((0, parsePlayer_1.default)(player), level || undefined, typeof (bypass) === "boolean" ? bypass : undefined).catch(ctx.noop)));
    }
});
//# sourceMappingURL=addOperator.js.map