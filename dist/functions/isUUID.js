"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIDRegexNoDashes = exports.UUIDRegex = void 0;
exports.default = default_1;
exports.UUIDRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
exports.UUIDRegexNoDashes = /^[0-9a-f]{32}$/i;
/**
 * Returns whether the given value is a valid UUID.
 * @param value The value to check.
 * @returns
 */
function default_1(value) {
    return exports.UUIDRegex.test(value) || exports.UUIDRegexNoDashes.test(value);
}
//# sourceMappingURL=isUUID.js.map