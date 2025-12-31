import { Interpreter } from "@tryforge/forgescript"
import { MinecraftEventHandler } from "../handlers"
import { Context, ForgeMinecraft } from ".."

export default new MinecraftEventHandler({
    name: "reconnecting",
    version: "1.0.0",
    description: "This event is fired when the management server is reconnecting",
    listener: async function() {
        const commands = this.getExtension(ForgeMinecraft, true).commands.get("reconnecting")

        for (const command of commands) {
            const ctx = new Context({
                obj: {},
                command,
                client: this,
                data: command.compiled.code,
            })

            Interpreter.run(ctx)
        }
    },
})