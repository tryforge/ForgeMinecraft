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
    name: "$setGameMode",
    version: "1.0.0",
    description: "Sets the default game mode for players when they join the server for the first time",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "mode",
            description: "The default game mode to set",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Enum,
            enum: types_1.GameMode,
        }
    ],
    async execute(ctx, [mode]) {
        await ctx.client.minecraft.server?.settings().setGameMode((0, transformEnum_1.default)(mode, mc_server_management_1.GameMode)).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=setGameMode.js.map