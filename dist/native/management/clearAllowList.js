"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$clearAllowList",
    description: "Clears the server's allow list, returns bool",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        return this.successJSON(!!(await ctx.client.minecraft.server?.allowlist().clear().catch(ctx.noop)));
    }
});
//# sourceMappingURL=clearAllowList.js.map