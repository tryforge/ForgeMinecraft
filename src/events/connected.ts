import { Interpreter } from "@tryforge/forgescript"
import { MinecraftEventHandler } from "../handlers"
import { Context, ForgeMinecraft } from ".."

export default new MinecraftEventHandler({
    name: "connected",
    version: "1.0.0",
    description: "This event is fired when the management server has connected",
    listener: async function() {
        const commands = this.getExtension(ForgeMinecraft, true).commands.get("connected")

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