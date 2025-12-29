import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { ServerStateProperties, ServerStateProperty } from "../../properties/serverState"

export default new NativeFunction({
    name: "$serverState",
    version: "1.0.0",
    description: "Retrieves data from an event whose context was a server status event",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: ServerStateProperty,
        },
        {
            name: "separator",
            description: "The separator to use for each value",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    execute(ctx, [prop, sep]) {
        const state = ctx.serverState
        if (!state || prop) return this.success(ServerStateProperties[prop](state, sep))
        return this.successJSON(state)
    },
})