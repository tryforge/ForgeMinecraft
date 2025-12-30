"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$javaIPAddress",
    version: "1.0.0",
    description: "Returns the IP address of a java server",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "host",
            description: "The host domain of the server",
            rest: false,
            type: forgescript_1.ArgType.String,
        },
        {
            name: "port",
            description: "The port of the host connection",
            rest: false,
            type: forgescript_1.ArgType.Number,
        }
    ],
    output: forgescript_1.ArgType.String,
    async execute(ctx, [host, port]) {
        const status = await ctx.client.minecraft.getJavaStatus(host, port || undefined).catch(ctx.noop);
        return this.success(status && "ip_address" in status ? status?.ip_address : null);
    }
});
//# sourceMappingURL=javaIPAddress.js.map