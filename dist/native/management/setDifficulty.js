"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const mc_server_management_1 = require("mc-server-management");
const types_1 = require("../../types");
const transformEnum_1 = __importDefault(require("../../functions/transformEnum"));
exports.default = new forgescript_1.NativeFunction({
    name: "$setDifficulty",
    version: "1.0.0",
    description: "Sets the difficulty level of the world",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "difficulty",
            description: "The difficulty level to set",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Enum,
            enum: types_1.Difficulty
        }
    ],
    async execute(ctx, [diff]) {
        await ctx.client.minecraft.server?.settings().setDifficulty((0, transformEnum_1.default)(diff, mc_server_management_1.Difficulty)).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=setDifficulty.js.map