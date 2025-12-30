"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinecraftConnectionManager = void 0;
const mc_server_management_1 = require("mc-server-management");
const tiny_typed_emitter_1 = require("tiny-typed-emitter");
const forgescript_1 = require("@tryforge/forgescript");
class MinecraftConnectionManager extends tiny_typed_emitter_1.TypedEmitter {
    options;
    connection;
    server;
    reconnectTimer;
    constructor(options) {
        super();
        this.options = options;
    }
    /**
     * Gets the active MinecraftServer instance.
     * @returns
     */
    getServer() {
        return this.server;
    }
    /**
     * Returns whether a connection exists.
     * @returns
     */
    isConnected() {
        return !!this.connection;
    }
    /**
     * Starts/Restarts the connection loop.
     * @returns
     */
    start() {
        if (this.connection || this.reconnectTimer)
            return;
        void this._connect();
    }
    /**
     * Stops reconnecting and closes the connection.
     * @returns
     */
    stop() {
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            delete this.reconnectTimer;
        }
        if (this.connection) {
            this.connection.close();
            delete this.connection;
        }
        delete this.server;
    }
    /**
     * Establishes a connection to the server.
     * @returns
     */
    async _connect() {
        try {
            forgescript_1.Logger.info("[ForgeMinecraft] Connecting to management server...");
            const { host, port, token, reconnect, reconnectInterval, maxReconnectAttempts } = this.options;
            const connection = await mc_server_management_1.WebSocketConnection.connect(`ws://${host}:${port}`, token, {
                reconnect,
                reconnect_interval: reconnectInterval,
                max_reconnects: maxReconnectAttempts
            }).catch(() => { });
            if (!connection) {
                forgescript_1.Logger.warn("[ForgeMinecraft] Management connection could not be established.");
                return this._scheduleReconnect();
            }
            this.connection = connection;
            this.server = new mc_server_management_1.MinecraftServer(this.connection);
            forgescript_1.Logger.info("[ForgeMinecraft] Management connection established.");
            this.emit("connected", this.server);
            this.connection.on("close", () => {
                forgescript_1.Logger.warn("[ForgeMinecraft] Management connection closed.");
                this._cleanup();
                this.emit("disconnected");
                this._scheduleReconnect();
            });
            this.connection.on("error", (err) => {
                forgescript_1.Logger.debug("[ForgeMinecraft] Management socket error:", err.message);
            });
        }
        catch (err) {
            forgescript_1.Logger.error("[ForgeMinecraft] Management connect failed:", err);
            this._scheduleReconnect();
        }
    }
    /**
     * Cleans everything up.
     * @returns
     */
    _cleanup() {
        delete this.connection;
        delete this.server;
    }
    /**
     * Schedules a reconnect to the server.
     * @returns
     */
    _scheduleReconnect() {
        if (this.reconnectTimer)
            return;
        const interval = this.options.reconnectInterval;
        forgescript_1.Logger.info(`[ForgeMinecraft] Reconnecting in ${interval / 1000}s...`);
        this.reconnectTimer = setTimeout(() => {
            delete this.reconnectTimer;
            void this._connect();
        }, interval);
    }
}
exports.MinecraftConnectionManager = MinecraftConnectionManager;
//# sourceMappingURL=MinecraftConnectionManager.js.map