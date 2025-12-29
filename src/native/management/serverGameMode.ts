import { NativeFunction } from "@tryforge/forgescript"
import { GameMode } from "../../types"
import convertEnum from "../../functions/convertEnum"

export default new NativeFunction({
    name: "$serverGameMode",
    version: "1.0.0",
    description: "Returns the default game mode for players when they join the server for the first time",
    unwrap: false,
    output: GameMode,
    async execute(ctx) {
        const mode = await ctx.client.minecraft.server?.settings().getGameMode().catch(ctx.noop)
        return this.success(mode ? convertEnum(GameMode, mode) : null)
    }
})