"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$setViewDistance",
    description: "Sets the view distance of the server in chunks",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "chunks",
            description: "The view distance in chunks",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Number,
        }
    ],
    async execute(ctx, [chunks]) {
        await ctx.client.minecraft.server?.settings().setViewDistance(chunks).catch(ctx.noop);
        return this.success();
    }
});
//# sourceMappingURL=setViewDistance.js.map