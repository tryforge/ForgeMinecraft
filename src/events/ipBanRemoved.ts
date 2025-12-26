import { Interpreter } from "@tryforge/forgescript"
import { MinecraftEventHandler } from "../handlers"
import { Context, ForgeMinecraft } from ".."

export default new MinecraftEventHandler({
    name: "ipBanRemoved",
    version: "1.0.0",
    description: "This event is fired when an IP was unbanned",
    listener: async function(obj) {
        const commands = this.getExtension(ForgeMinecraft, true).commands.get("ipBanRemoved")

        for (const command of commands) {
            const ctx = new Context({
                obj,
                command,
                client: this,
                data: command.compiled.code,
            })

            Interpreter.run(ctx)
        }
    },
})