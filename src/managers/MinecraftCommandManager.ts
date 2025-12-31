import { BaseCommandManager } from "@tryforge/forgescript"
import { IMinecraftEvents } from "../handlers"
import { ForgeMinecraftEventHandlerName } from "../constants"

export class MinecraftCommandManager extends BaseCommandManager<keyof IMinecraftEvents> {
    handlerName = ForgeMinecraftEventHandlerName
}