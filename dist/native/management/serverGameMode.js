"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const types_1 = require("../../types");
const convertEnum_1 = __importDefault(require("../../functions/convertEnum"));
exports.default = new forgescript_1.NativeFunction({
    name: "$serverGameMode",
    description: "Returns the default game mode for players when they join the server for the first time",
    unwrap: false,
    output: types_1.GameMode,
    async execute(ctx) {
        const mode = await ctx.client.minecraft.server?.settings().getGameMode().catch(ctx.noop);
        return this.success(mode ? (0, convertEnum_1.default)(types_1.GameMode, mode) : null);
    }
});
//# sourceMappingURL=serverGameMode.js.map