import { ArgType, NativeFunction } from "@tryforge/forgescript"
import parsePlayer from "../../functions/parsePlayer"

export default new NativeFunction({
    name: "$sendSystemMessage",
    version: "1.0.0",
    description: "Sends a system message to the minecraft server, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "message",
            description: "The message to send",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "overlay",
            description: "Whether to display the message as an overlay above the hotbar, otherwise in chat",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "players",
            description: "The players receiving the message, omit to send to all players",
            rest: true,
            type: ArgType.String,
        }
    ],
    output: ArgType.Boolean,
    async execute(ctx, [msg, overlay, players]) {
        return this.success(!!(
            await ctx.client.minecraft.server?.sendSystemMessage(
                msg,
                players?.length ? players.map((x) => parsePlayer(x)) : undefined,
                overlay || undefined
            ).catch(ctx.noop)
        ))
    }
})