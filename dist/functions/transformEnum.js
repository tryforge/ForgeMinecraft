"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
/**
 * Transforms an enum value from one enum to another.
 * @param fromValue The value to transform.
 * @param toEnum The enum to transform the value into.
 * @returns
 */
function default_1(fromValue, toEnum) {
    return Object.values(toEnum).find((v) => v === fromValue);
}
//# sourceMappingURL=transformEnum.js.map