import { generateMetadata } from "@tryforge/forgescript"
import { ForgeMinecraftEventHandlerName } from "./constants"

generateMetadata(
    `${__dirname}/native`,
    "native",
    ForgeMinecraftEventHandlerName,
    undefined,
    undefined,
    `${__dirname}/events`
)