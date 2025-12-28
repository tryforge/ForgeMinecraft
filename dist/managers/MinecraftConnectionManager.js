"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinecraftConnectionManager = void 0;
const mc_server_management_1 = require("mc-server-management");
const tiny_typed_emitter_1 = require("tiny-typed-emitter");
const forgescript_1 = require("@tryforge/forgescript");
const noop_1 = __importDefault(require("../functions/noop"));
class MinecraftConnectionManager extends tiny_typed_emitter_1.TypedEmitter {
    options;
    connection;
    server;
    reconnectTimer;
    attempts = 0;
    interval;
    constructor(options) {
        super();
        this.options = options;
        this.interval = options.reconnectInterval ?? 60_000;
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
        this.attempts = 0;
    }
    /**
     * Establishes a connection to the server.
     * @returns
     */
    async _connect() {
        try {
            forgescript_1.Logger.info("[ForgeMinecraft] Connecting to management server...");
            const { host, port, token } = this.options;
            const connection = await mc_server_management_1.WebSocketConnection.connect(`ws://${host}:${port}`, token).catch(noop_1.default);
            if (!connection) {
                forgescript_1.Logger.warn("[ForgeMinecraft] An error has occurred. Management connection could not be established.");
                this._scheduleReconnect();
                return;
            }
            this.connection = connection;
            this.server = new mc_server_management_1.MinecraftServer(this.connection);
            this.attempts = 0;
            forgescript_1.Logger.info("[ForgeMinecraft] Management connection established.");
            this.emit("connected", this.server);
            this.connection.on("close", () => {
                forgescript_1.Logger.warn("[ForgeMinecraft] Management connection closed.");
                this._cleanup();
                this.emit("disconnected");
                this._scheduleReconnect();
            });
            this.connection.on("error", (err) => {
                forgescript_1.Logger.error("[ForgeMinecraft] Management socket error:", err);
            });
        }
        catch (err) {
            forgescript_1.Logger.warn("[ForgeMinecraft] Management connect failed:", err);
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
        const delay = Math.min(1000 * 2 ** this.attempts, this.interval);
        this.attempts++;
        forgescript_1.Logger.info(`[ForgeMinecraft] Reconnecting in ${delay / 1000}s...`);
        this.reconnectTimer = setTimeout(() => {
            delete this.reconnectTimer;
            void this._connect();
        }, delay);
    }
}
exports.MinecraftConnectionManager = MinecraftConnectionManager;
//# sourceMappingURL=MinecraftConnectionManager.js.map