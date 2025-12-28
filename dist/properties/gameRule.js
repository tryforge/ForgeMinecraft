"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRuleProperties = exports.GameRuleProperty = void 0;
const convertEnum_1 = require("../functions/convertEnum");
const defineProperties_1 = __importDefault(require("../functions/defineProperties"));
var GameRuleProperty;
(function (GameRuleProperty) {
    GameRuleProperty["key"] = "key";
    GameRuleProperty["value"] = "value";
    GameRuleProperty["type"] = "type";
})(GameRuleProperty || (exports.GameRuleProperty = GameRuleProperty = {}));
exports.GameRuleProperties = (0, defineProperties_1.default)({
    key: (i) => i?.key,
    value: (i) => i?.value,
    type: (i) => i?.type ? (0, convertEnum_1.convertGameRuleType)(i?.type) : null,
});
//# sourceMappingURL=gameRule.js.map