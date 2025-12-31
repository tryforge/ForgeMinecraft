import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$clearPlayerBans",
    version: "1.0.0",
    description: "Clears the server's player ban list, returns bool",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.successJSON(!!(
            await ctx.client.minecraft.server?.banList().clear().catch(ctx.noop)
        ))
    }
})