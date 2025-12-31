"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const parsePlayer_1 = __importDefault(require("../../functions/parsePlayer"));
exports.default = new forgescript_1.NativeFunction({
    name: "$sendSystemMessage",
    version: "1.0.0",
    description: "Sends a system message to the minecraft server, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "message",
            description: "The message to send",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "overlay",
            description: "Whether to display the message as an overlay above the hotbar, otherwise in chat",
            rest: false,
            type: forgescript_1.ArgType.Boolean,
        },
        {
            name: "players",
            description: "The players receiving the message, omit to send to all players",
            rest: true,
            type: forgescript_1.ArgType.String,
        }
    ],
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [msg, overlay, players]) {
        return this.success(!!(await ctx.client.minecraft.server?.sendSystemMessage(msg, players?.length ? players.map((x) => (0, parsePlayer_1.default)(x)) : undefined, overlay || undefined).catch(ctx.noop)));
    }
});
//# sourceMappingURL=sendSystemMessage.js.map