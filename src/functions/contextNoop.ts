import { Context, Logger } from "@tryforge/forgescript"

export default function(this: Context, ...args: any[]) {
    if (this.hasDisabledConsoleErrors()) {
        return
    } 

    Logger.error("[ForgeMinecraft]", ...args)
}