import { Interpreter } from "@tryforge/forgescript"
import { MinecraftEventHandler } from "../handlers"
import { Context, ForgeMinecraft } from ".."

export default new MinecraftEventHandler({
    name: "allowListRemoved",
    version: "1.0.0",
    description: "This event is fired when a player was removed from the allow list",
    listener: async function(obj) {
        const commands = this.getExtension(ForgeMinecraft, true).commands.get("allowListRemoved")

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