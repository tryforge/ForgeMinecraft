"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const gameRule_1 = require("../../properties/gameRule");
exports.default = new forgescript_1.NativeFunction({
    name: "$gameRule",
    version: "1.0.0",
    description: "Retrieves data from an event whose context was a game rule event",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Enum,
            enum: gameRule_1.GameRuleProperty,
        },
    ],
    output: [
        forgescript_1.ArgType.Json,
        forgescript_1.ArgType.Unknown
    ],
    execute(ctx, [prop]) {
        const rule = ctx.gameRule;
        if (!rule || prop)
            return this.success(gameRule_1.GameRuleProperties[prop](rule));
        return this.successJSON(rule);
    },
});
//# sourceMappingURL=gameRule.js.map