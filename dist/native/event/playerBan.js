"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const ban_1 = require("../../properties/ban");
exports.default = new forgescript_1.NativeFunction({
    name: "$playerBan",
    version: "1.0.0",
    description: "Retrieves data from an event whose context was a player ban event",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Enum,
            enum: ban_1.UserBanProperty,
        },
    ],
    output: [
        forgescript_1.ArgType.Json,
        forgescript_1.ArgType.Unknown
    ],
    execute(ctx, [prop]) {
        const ban = ctx.userBan;
        if (!ban || prop)
            return this.success(ban_1.UserBanProperties[prop](ban));
        return this.successJSON(ban);
    },
});
//# sourceMappingURL=playerBan.js.map