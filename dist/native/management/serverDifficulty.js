"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const types_1 = require("../../types");
const convertEnum_1 = __importDefault(require("../../functions/convertEnum"));
exports.default = new forgescript_1.NativeFunction({
    name: "$serverDifficulty",
    version: "1.0.0",
    description: "Returns the difficulty level of the server",
    unwrap: false,
    output: types_1.Difficulty,
    async execute(ctx) {
        const diff = await ctx.client.minecraft.server?.settings().getDifficulty().catch(ctx.noop);
        return this.success(diff ? (0, convertEnum_1.default)(types_1.Difficulty, diff) : null);
    }
});
//# sourceMappingURL=serverDifficulty.js.map