"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverHideOnlinePlayers",
    version: "1.0.0",
    description: "Returns whether the server hides the list of online players from the server list",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getHideOnlinePlayers().catch(ctx.noop));
    }
});
//# sourceMappingURL=serverHideOnlinePlayers.js.map