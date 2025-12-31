import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { Difficulty as BaseDifficulty } from "mc-server-management"
import { Difficulty } from "../../types"
import transformEnum from "../../functions/transformEnum"

export default new NativeFunction({
    name: "$setDifficulty",
    version: "1.0.0",
    description: "Sets the difficulty level of the world",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "difficulty",
            description: "The difficulty level to set",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: Difficulty
        }
    ],
    async execute(ctx, [diff]) {
        await ctx.client.minecraft.server?.settings().setDifficulty(transformEnum(diff, BaseDifficulty)).catch(ctx.noop)
        return this.success()
    }
})