import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$clearOperators",
    version: "1.0.0",
    description: "Clears the server's operator list, returns bool",
    unwrap: false,
    output: ArgType.Boolean,
    async execute(ctx) {
        return this.successJSON(!!(
            await ctx.client.minecraft.server?.operatorList().clear().catch(ctx.noop)
        ))
    }
})