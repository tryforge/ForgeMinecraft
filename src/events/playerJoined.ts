import { Interpreter } from "@tryforge/forgescript"
import { MinecraftEventHandler } from "../handlers"
import { Context, ForgeMinecraft } from ".."

export default new MinecraftEventHandler({
    name: "playerJoined",
    version: "1.0.0",
    description: "This event is fired when a player has joined the server",
    listener: async function(obj) {
        const commands = this.getExtension(ForgeMinecraft, true).commands.get("playerJoined")

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