import { ArgType, NativeFunction } from "@tryforge/forgescript"

export default new NativeFunction({
    name: "$removeIPBans",
    version: "1.0.0",
    description: "Removes IP addresses from the server's ban list, returns bool",
    aliases: ["$removeIPBan"],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "ips",
            description: "The IP addresses to unban",
            rest: true,
            required: true,
            type: ArgType.String,
        },
    ],
    output: ArgType.Boolean,
    async execute(ctx, [ips]) {
        return this.success(!!(
            await ctx.client.minecraft.server?.ipBanList().remove(ips).catch(ctx.noop)
        ))
    }
})