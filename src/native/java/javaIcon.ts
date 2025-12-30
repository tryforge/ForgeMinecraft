import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { AttachmentBuilder } from "discord.js"

export default new NativeFunction({
    name: "$javaIcon",
    version: "1.0.0",
    description: "Returns the icon of a java server as attachment",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "host",
            description: "The host domain of the server",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "port",
            description: "The port of the host connection",
            rest: false,
            type: ArgType.Number,
        }
    ],
    async execute(ctx, [host, port]) {
        const icon = (await ctx.client.minecraft.getJavaStatus(host, port || undefined).catch(ctx.noop))?.icon
        if (icon) {
            const buffer = Buffer.from(icon.split(",")[1], "base64")
            ctx.container.files.push(new AttachmentBuilder(buffer).setName("icon.png"))
        }
        return this.success()
    }
})