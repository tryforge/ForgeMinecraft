import { Player } from "mc-server-management"
import isUUID from "./isUUID"

export default function(value: string) {
    return (isUUID(value) ? Player.withId(value) : Player.withName(value))
}