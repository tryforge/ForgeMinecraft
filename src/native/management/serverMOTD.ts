import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$serverMOTD",
    version: "1.0.0",
    description: "Returns the server's message of the day (MOTD)",
    unwrap: false,
    output: ArgType.String,
    async execute(ctx) {
        return this.success(await ctx.client.minecraft.server?.settings().getMOTD().catch(ctx.noop))
    }
})