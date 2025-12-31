/**
 * Resolves to a status response from a Minecraft server.
 * @param resolver The resolver function.
 * @param defaults The default server options.
 * @param host The host domain of the server.
 * @param port The port for the host domain.
 * @returns 
 */
export default async function<T>(
    resolver: (host: string, port?: number) => Promise<T>,
    defaults: { host?: string; port?: number } | undefined,
    host?: string | null,
    port?: number
) {
    host ||= defaults?.host
    port ??= defaults?.port

    if (!host) return null
    return resolver(host, port)
}