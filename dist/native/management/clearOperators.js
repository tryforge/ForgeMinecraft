"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$clearOperators",
    description: "Clears the server's operator list, returns bool",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        return this.successJSON(!!(await ctx.client.minecraft.server?.operatorList().clear().catch(ctx.noop)));
    }
});
//# sourceMappingURL=clearOperators.js.map