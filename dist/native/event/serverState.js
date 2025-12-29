"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const serverState_1 = require("../../properties/serverState");
exports.default = new forgescript_1.NativeFunction({
    name: "$serverState",
    description: "Retrieves data from an event whose context was a server status event",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Enum,
            enum: serverState_1.ServerStateProperty,
        },
        {
            name: "separator",
            description: "The separator to use for each value",
            rest: false,
            type: forgescript_1.ArgType.String,
        },
    ],
    output: [
        forgescript_1.ArgType.Json,
        forgescript_1.ArgType.Unknown
    ],
    execute(ctx, [prop, sep]) {
        const state = ctx.serverState;
        if (!state || prop)
            return this.success(serverState_1.ServerStateProperties[prop](state, sep));
        return this.successJSON(state);
    },
});
//# sourceMappingURL=serverState.js.map