import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { OperatorProperties, OperatorProperty } from "../../properties/operator"

export default new NativeFunction({
    name: "$operator",
    version: "1.0.0",
    description: "Retrieves data from an event whose context was an operator event",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: OperatorProperty,
        },
    ],
    output: [
        ArgType.Json,
        ArgType.Unknown
    ],
    execute(ctx, [prop]) {
        const operator = ctx.operator
        if (!operator || prop) return this.success(OperatorProperties[prop](operator))
        return this.successJSON(operator)
    },
})