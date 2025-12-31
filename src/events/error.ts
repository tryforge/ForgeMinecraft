import { Interpreter } from "@tryforge/forgescript"
import { MinecraftEventHandler } from "../handlers"
import { Context, ForgeMinecraft } from ".."

export default new MinecraftEventHandler({
    name: "error",
    version: "1.0.0",
    description: "This event is fired when an error occurred",
    listener: async function(err) {
        const commands = this.getExtension(ForgeMinecraft, true).commands.get("error")

        for (const command of commands) {
            const ctx = new Context({
                obj: {},
                command,
                client: this,
                extras: err.message,
                data: command.compiled.code,
            })

            Interpreter.run(ctx)
        }
    },
})