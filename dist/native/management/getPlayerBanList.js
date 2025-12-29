"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const ban_1 = require("../../properties/ban");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new forgescript_1.NativeFunction({
    name: "$getPlayerBanList",
    version: "1.0.0",
    description: "Returns the server's player ban list",
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
            enum: ban_1.UserBanProperty,
        },
        {
            name: "separator",
            description: "The separator to use for each value",
            rest: false,
            type: forgescript_1.ArgType.String,
        }
    ],
    output: [
        forgescript_1.ArgType.Json,
        (0, array_1.default)()
    ],
    async execute(ctx, [force, prop, sep]) {
        const bans = await ctx.client.minecraft.server?.banList().get(force || false).catch(ctx.noop);
        if (!bans || prop)
            return this.success(bans?.map((x) => ban_1.UserBanProperties[prop](x)).join(sep ?? ", "));
        return this.successJSON(bans);
    }
});
//# sourceMappingURL=getPlayerBanList.js.map