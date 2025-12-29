"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const operator_1 = require("../../properties/operator");
exports.default = new forgescript_1.NativeFunction({
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
            type: forgescript_1.ArgType.Enum,
            enum: operator_1.OperatorProperty,
        },
    ],
    output: [
        forgescript_1.ArgType.Json,
        forgescript_1.ArgType.Unknown
    ],
    execute(ctx, [prop]) {
        const operator = ctx.operator;
        if (!operator || prop)
            return this.success(operator_1.OperatorProperties[prop](operator));
        return this.successJSON(operator);
    },
});
//# sourceMappingURL=operator.js.map