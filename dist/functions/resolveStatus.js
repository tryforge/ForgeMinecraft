"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
/**
 * Resolves to a status response from a Minecraft server.
 * @param resolver The resolver function.
 * @param defaults The default server options.
 * @param host The host domain of the server.
 * @param port The port for the host domain.
 * @returns
 */
async function default_1(resolver, defaults, host, port) {
    host ||= defaults?.host;
    port ??= defaults?.port;
    if (!host)
        return null;
    return resolver(host, port);
}
//# sourceMappingURL=resolveStatus.js.map