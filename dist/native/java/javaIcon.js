"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const discord_js_1 = require("discord.js");
exports.default = new forgescript_1.NativeFunction({
    name: "$javaIcon",
    description: "Returns the icon of a java server",
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
    output: forgescript_1.ArgType.URL,
    async execute(ctx, [host, port]) {
        const icon = (await ctx.client.minecraft.getJavaStatus(host, port || undefined).catch(ctx.noop))?.icon;
        if (icon) {
            ctx.container.files.push(new discord_js_1.AttachmentBuilder(Buffer.from(icon.split(",")[1], "base64")).setName("icon.png"));
        }
        return this.success();
    }
});
//# sourceMappingURL=javaIcon.js.map