import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$setMOTD",
    version: "1.0.0",
    description: "Sets the message of the day (MOTD) for this server",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "motd",
            description: "The MOTD to set",
            rest: false,
            required: true,
            type: ArgType.String,
        }
    ],
    async execute(ctx, [motd]) {
        await ctx.client.minecraft.server?.settings().setMOTD(motd).catch(ctx.noop)
        return this.success()
    }
})