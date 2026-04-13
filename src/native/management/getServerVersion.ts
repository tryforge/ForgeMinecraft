import { ArgType, NativeFunction } from "@tryforge/forgescript"

export enum VersionProperty {
    name = "name",
    protocol = "protocol"
}

export default new NativeFunction({
    name: "$getServerVersion",
    version: "1.0.0",
    description: "Returns current version of the java minecraft server",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "force",
            description: "Whether to force a direct fetch, defaults to false",
            rest: false,
            required: true,
            type: ArgType.Boolean,
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: ArgType.Enum,
            enum: VersionProperty,
        }
    ],
    output: [
        ArgType.Json,
        ArgType.String
    ],
    async execute(ctx, [force, prop]) {
        const version = (await ctx.client.minecraft.server?.getStatus(force || false).catch(ctx.noop))?.version
        if (!version || prop) return this.success(version?.[prop!])
        return this.successJSON(version)
    }
})