"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const getConnectedPlayers_1 = require("../management/getConnectedPlayers");
exports.default = new forgescript_1.NativeFunction({
    name: "$player",
    description: "Retrieves data from an event whose context was a player event",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Enum,
            enum: getConnectedPlayers_1.PlayerProperty,
        },
    ],
    output: [
        forgescript_1.ArgType.Json,
        forgescript_1.ArgType.Unknown
    ],
    execute(ctx, [prop]) {
        const player = ctx.player;
        if (!player || prop)
            return this.success(player?.[prop]);
        return this.successJSON(player);
    },
});
//# sourceMappingURL=player.js.map