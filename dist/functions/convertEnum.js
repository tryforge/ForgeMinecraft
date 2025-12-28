"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertGameRuleType = convertGameRuleType;
const types_1 = require("../types");
function convertGameRuleType(value) {
    return Object.keys(types_1.GameRuleType).find((key) => types_1.GameRuleType[key] === value);
}
//# sourceMappingURL=convertEnum.js.map