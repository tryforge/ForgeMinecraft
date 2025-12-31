import { Player } from "mc-server-management"
import isUUID from "./isUUID"

/**
 * Parses a player input into a Player instance.
 * @param value The value to parse.
 * @returns 
 */
export default function(value: string) {
    return (isUUID(value) ? Player.withId(value) : Player.withName(value))
}