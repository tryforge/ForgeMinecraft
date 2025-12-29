import { Interpreter } from "@tryforge/forgescript"
import { MinecraftEventHandler } from "../handlers"
import { Context, ForgeMinecraft } from ".."
import { IPBan } from "mc-server-management"

export default new MinecraftEventHandler({
    name: "ipBanRemoved",
    version: "1.0.0",
    description: "This event is fired when an IP was unbanned",
    listener: async function(ip) {
        const commands = this.getExtension(ForgeMinecraft, true).commands.get("ipBanRemoved")
        const ban = new IPBan(ip)

        for (const command of commands) {
            const ctx = new Context({
                obj: ban,
                command,
                client: this,
                data: command.compiled.code,
            })

            Interpreter.run(ctx)
        }
    },
})