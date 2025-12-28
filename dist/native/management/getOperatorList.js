"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const operator_1 = require("../../properties/operator");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new forgescript_1.NativeFunction({
    name: "$getOperatorList",
    description: "Returns the server's operator list",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "force",
            description: "Whether to force a direct fetch, defaults to false",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Boolean,
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: forgescript_1.ArgType.Enum,
            enum: operator_1.OperatorProperty,
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: forgescript_1.ArgType.String,
        }
    ],
    output: [
        forgescript_1.ArgType.Json,
        (0, array_1.default)()
    ],
    async execute(ctx, [force, prop, sep]) {
        const operators = await ctx.client.minecraft.server?.operatorList().get(force || false).catch(ctx.noop);
        if (!operators || prop)
            return this.success(operators?.map((x) => operator_1.OperatorProperties[prop](x)).join(sep ?? ", "));
        return this.successJSON(operators);
    }
});
//# sourceMappingURL=getOperatorList.js.map