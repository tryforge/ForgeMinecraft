import { Interpreter } from "@tryforge/forgescript"
import { MinecraftEventHandler } from "../handlers"
import { Context, ForgeMinecraft } from ".."

export default new MinecraftEventHandler({
    name: "playerLeft",
    version: "1.0.0",
    description: "This event is fired when a player has left the server",
    listener: async function(obj) {
        const commands = this.getExtension(ForgeMinecraft, true).commands.get("playerLeft")

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