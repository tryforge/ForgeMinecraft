import { Interpreter } from "@tryforge/forgescript"
import { MinecraftEventHandler } from "../handlers"
import { Context, ForgeMinecraft } from ".."

export default new MinecraftEventHandler({
    name: "banAdded",
    version: "1.0.0",
    description: "This event is fired when a player was banned",
    listener: async function(obj) {
        const commands = this.getExtension(ForgeMinecraft, true).commands.get("banAdded")

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