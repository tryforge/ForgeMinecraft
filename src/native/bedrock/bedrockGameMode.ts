import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { GameMode } from "../../types"

export default new NativeFunction({
    name: "$bedrockGameMode",
    version: "1.0.0",
    description: "Returns the game mode of a bedrock server",
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
    output: GameMode,
    async execute(ctx, [host, port]) {
        return this.success((await ctx.client.minecraft.getBedrockStatus(host, port || undefined).catch(ctx.noop))?.gamemode)
    }
})