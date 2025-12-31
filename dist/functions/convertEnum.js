"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
/**
 * Converts an enum string value into an enum key.
 * @param en The enum to convert the value into.
 * @param value The value to convert.
 * @returns
 */
function default_1(en, value) {
    return Object.keys(en).find((key) => en[key] === value);
}
//# sourceMappingURL=convertEnum.js.map