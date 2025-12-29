import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { GameMode as BaseGameMode } from "mc-server-management"
import { GameMode } from "../../types"
import transformEnum from "../../functions/transformEnum"

export default new NativeFunction({
    name: "$setGameMode",
    version: "1.0.0",
    description: "Sets the default game mode for players when they join the server for the first time",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "mode",
            description: "The default game mode to set",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: GameMode,
        }
    ],
    async execute(ctx, [mode]) {
        await ctx.client.minecraft.server?.settings().setGameMode(transformEnum(mode, BaseGameMode)).catch(ctx.noop)
        return this.success()
    }
})