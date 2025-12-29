import { NativeFunction } from "@tryforge/forgescript"
import { Difficulty } from "../../types"
import convertEnum from "../../functions/convertEnum"

export default new NativeFunction({
    name: "$serverDifficulty",
    version: "1.0.0",
    description: "Returns the difficulty level of the server",
    unwrap: false,
    output: Difficulty,
    async execute(ctx) {
        const diff = await ctx.client.minecraft.server?.settings().getDifficulty().catch(ctx.noop)
        return this.success(diff ? convertEnum(Difficulty, diff) : null)
    }
})