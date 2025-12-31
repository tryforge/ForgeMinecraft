export const UUIDRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
export const UUIDRegexNoDashes = /^[0-9a-f]{32}$/i

/**
 * Returns whether the given value is a valid UUID.
 * @param value The value to check.
 * @returns 
 */
export default function(value: string) {
    return UUIDRegex.test(value) || UUIDRegexNoDashes.test(value)
}