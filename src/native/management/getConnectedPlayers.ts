import { ArgType, NativeFunction } from "@tryforge/forgescript"
import array from "../../functions/array"

export enum PlayerProperty {
    id = "id",
    name = "name"
}

export default new NativeFunction({
    name: "$getConnectedPlayers",
    version: "1.0.0",
    description: "Returns the server's currently connected players",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "force",
            description: "Whether to force a direct fetch, defaults to false",
            rest: false,
            required: true,
            type: ArgType.Boolean,
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: ArgType.Enum,
            enum: PlayerProperty,
        },
        {
            name: "separator",
            description: "The separator to use for each value",
            rest: false,
            type: ArgType.String,
        }
    ],
    output: [
        ArgType.Json,
        array<ArgType.String>()
    ],
    async execute(ctx, [force, prop, sep]) {
        const players = await ctx.client.minecraft.server?.getConnectedPlayers(force || false).catch(ctx.noop)
        if (!players || prop) return this.success(players?.map((x) => x[prop!]).join(sep ?? ", "))
        return this.successJSON(players)
    }
})