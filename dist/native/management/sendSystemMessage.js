"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$sendSystemMessage",
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
        return this.success(!!(await ctx.client.minecraft.server?.sendSystemMessage(msg, players || undefined, overlay || undefined).catch(ctx.noop)));
    }
});
//# sourceMappingURL=sendSystemMessage.js.map