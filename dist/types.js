"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Difficulty = exports.GameMode = exports.GameRuleType = void 0;
var GameRuleType;
(function (GameRuleType) {
    GameRuleType["Boolean"] = "boolean";
    GameRuleType["Integer"] = "integer";
})(GameRuleType || (exports.GameRuleType = GameRuleType = {}));
var GameMode;
(function (GameMode) {
    GameMode["Survival"] = "survival";
    GameMode["Creative"] = "creative";
    GameMode["Spectator"] = "spectator";
    GameMode["Adventure"] = "adventure";
})(GameMode || (exports.GameMode = GameMode = {}));
var Difficulty;
(function (Difficulty) {
    Difficulty["Peaceful"] = "peaceful";
    Difficulty["Easy"] = "easy";
    Difficulty["Normal"] = "normal";
    Difficulty["Hard"] = "hard";
})(Difficulty || (exports.Difficulty = Difficulty = {}));
//# sourceMappingURL=types.js.map