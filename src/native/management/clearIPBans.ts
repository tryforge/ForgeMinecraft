import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$clearIPBans",
    version: "1.0.0",
    description: "Clears the server's IP ban list, returns bool",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.successJSON(!!(
            await ctx.client.minecraft.server?.ipBanList().clear().catch(ctx.noop)
        ))
    }
})