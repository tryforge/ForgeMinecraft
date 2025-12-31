"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setAcceptTransfers",
    version: "1.0.0",
    description: "Sets whether the server accepts players transferred from other servers",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "accept",
            description: "Whether to accept transferred players",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Boolean,
        }
    ],
    async execute(ctx, [accept]) {
        await ctx.client.minecraft.server?.settings().setAcceptTransfers(accept).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=setAcceptTransfers.js.map