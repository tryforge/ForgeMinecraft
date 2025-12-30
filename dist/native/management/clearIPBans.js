"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$clearIPBans",
    description: "Clears the server's IP ban list, returns bool",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        return this.successJSON(!!(await ctx.client.minecraft.server?.ipBanList().clear().catch(ctx.noop)));
    }
});
//# sourceMappingURL=clearIPBans.js.map