import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { OperatorProperties, OperatorProperty } from "../../properties/operator"
import array from "../../functions/array"

export default new NativeFunction({
    name: "$getOperatorList",
    version: "1.0.0",
    description: "Returns the server's operator list",
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
            enum: OperatorProperty,
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: ArgType.String,
        }
    ],
    output: [
        ArgType.Json,
        array<ArgType.Unknown>()
    ],
    async execute(ctx, [force, prop, sep]) {
        const operators = await ctx.client.minecraft.server?.operatorList().get(force || false).catch(ctx.noop)
        if (!operators || prop) return this.success(operators?.map((x) => OperatorProperties[prop!](x)).join(sep ?? ", "))
        return this.successJSON(operators)
    }
})