"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverAutoSave",
    version: "1.0.0",
    description: "Returns whether the server automatically saves the world periodically",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getAutoSave().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverAutoSave.js.map