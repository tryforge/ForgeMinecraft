"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerProperty = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const array_1 = __importDefault(require("../../functions/array"));
var PlayerProperty;
(function (PlayerProperty) {
    PlayerProperty["id"] = "id";
    PlayerProperty["name"] = "name";
})(PlayerProperty || (exports.PlayerProperty = PlayerProperty = {}));
exports.default = new forgescript_1.NativeFunction({
    name: "$getConnectedPlayers",
    version: "1.0.0",
    description: "Returns all connected players of the minecraft server",
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
            enum: PlayerProperty,
        },
        {
            name: "separator",
            description: "The separator to use for each player",
            rest: false,
            type: forgescript_1.ArgType.String,
        }
    ],
    output: [
        forgescript_1.ArgType.Json,
        (0, array_1.default)()
    ],
    async execute(ctx, [force, prop, sep]) {
        const players = await ctx.client.minecraft.server?.getConnectedPlayers(force || false).catch(ctx.noop);
        if (!players || prop)
            return this.success(players?.map((x) => x[prop]).join(sep ?? ", "));
        return this.successJSON(players);
    }
});
//# sourceMappingURL=getConnectedPlayers.js.map