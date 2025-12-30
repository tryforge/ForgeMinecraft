import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$addIPBan",
    version: "1.0.0",
    description: "Adds an IP address to the server's ban list, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "ip",
            description: "The IP address to ban from the server",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "reason",
            description: "The reason for the ban",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "source",
            description: "The source of the ban",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "expires",
            description: "The expire date of the ban",
            rest: false,
            type: ArgType.Date,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ip, reason, source, expires]) {
        return this.success(!!(
            await ctx.client.minecraft.server?.ipBanList().add(
                ip,
                reason || undefined,
                source || undefined,
                expires || undefined
            ).catch(ctx.noop)
        ))
    }
})