/**
 * Resolves to a status response from a Minecraft server.
 * @param resolver The resolver function.
 * @param defaults The default server options.
 * @param host The host domain of the server.
 * @param port The port for the host domain.
 * @returns
 */
export default function <T>(resolver: (host: string, port?: number) => Promise<T>, defaults: {
    host?: string;
    port?: number;
} | undefined, host?: string | null, port?: number): Promise<T | null>;
//# sourceMappingURL=resolveStatus.d.ts.map