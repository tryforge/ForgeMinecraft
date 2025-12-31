"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinecraftConnectionManager = void 0;
const mc_server_management_1 = require("mc-server-management");
const forgescript_1 = require("@tryforge/forgescript");
const tiny_typed_emitter_1 = require("tiny-typed-emitter");
class MinecraftConnectionManager extends tiny_typed_emitter_1.TypedEmitter {
    options;
    emitter;
    connection;
    server;
    constructor(options, emitter) {
        super();
        this.options = options;
        this.emitter = emitter;
    }
    async connect(client) {
        forgescript_1.Logger.info("[ForgeMinecraft] Connecting to management server...");
        const { host, port, token, reconnect, reconnectInterval, maxReconnectAttempts } = this.options;
        const connection = await mc_server_management_1.WebSocketConnection.connect(`ws://${host}:${port}`, token, {
            reconnect,
            reconnect_interval: reconnectInterval,
            max_reconnects: maxReconnectAttempts
        }).catch(() => undefined);
        if (!connection) {
            forgescript_1.Logger.warn("[ForgeMinecraft] Management connection could not be established.");
            return;
        }
        this.connection = connection;
        this.server = new mc_server_management_1.MinecraftServer(connection);
        forgescript_1.Logger.info("[ForgeMinecraft] Management connection established.");
        this._attachSocketListeners(connection);
        this.emit("connected", this.server);
        const onReady = () => {
            this.emitter.emit("connected");
            this._attachServerListeners(this.server);
        };
        if (client.isReady())
            onReady();
        else
            client.once("clientReady", () => onReady());
    }
    _attachSocketListeners(connection) {
        connection.on("open", () => {
            forgescript_1.Logger.info("[ForgeMinecraft] Management connection established.");
            this.emitter.emit("connected");
        });
        connection.on("close", () => {
            forgescript_1.Logger.warn("[ForgeMinecraft] Management connection closed.");
            // this.emit("disconnected")
            this.emitter.emit("disconnected");
            if (this.options.reconnect !== false) {
                forgescript_1.Logger.info("[ForgeMinecraft] Reconnecting to management server...");
                // this.emit("reconnecting")
                this.emitter.emit("reconnecting");
            }
        });
        connection.on("max_reconnects_reached", () => {
            forgescript_1.Logger.warn("[ForgeMinecraft] Maximum reconnect attempts reached. Connection closed.");
        });
        connection.on("error", (err) => {
            forgescript_1.Logger.error("[ForgeMinecraft] Management socket error:", err);
        });
    }
    _attachServerListeners(server) {
        const events = [
            ["error", "error"],
            [mc_server_management_1.Notifications.ALLOWLIST_ADDED, "allowListAdded"],
            [mc_server_management_1.Notifications.ALLOWLIST_REMOVED, "allowListRemoved"],
            [mc_server_management_1.Notifications.BAN_ADDED, "banAdded"],
            [mc_server_management_1.Notifications.BAN_REMOVED, "banRemoved"],
            [mc_server_management_1.Notifications.GAME_RULE_UPDATED, "gameRuleUpdated"],
            [mc_server_management_1.Notifications.IP_BAN_ADDED, "ipBanAdded"],
            [mc_server_management_1.Notifications.IP_BAN_REMOVED, "ipBanRemoved"],
            [mc_server_management_1.Notifications.OPERATOR_ADDED, "operatorAdded"],
            [mc_server_management_1.Notifications.OPERATOR_REMOVED, "operatorRemoved"],
            [mc_server_management_1.Notifications.PLAYER_JOINED, "playerJoined"],
            [mc_server_management_1.Notifications.PLAYER_LEFT, "playerLeft"],
            [mc_server_management_1.Notifications.SERVER_ACTIVITY, "serverActivity"],
            [mc_server_management_1.Notifications.SERVER_SAVED, "serverSaved"],
            [mc_server_management_1.Notifications.SERVER_SAVING, "serverSaving"],
            [mc_server_management_1.Notifications.SERVER_STARTED, "serverStarted"],
            [mc_server_management_1.Notifications.SERVER_STATUS, "serverStatus"],
            [mc_server_management_1.Notifications.SERVER_STOPPING, "serverStopping"]
        ];
        for (const [event, targetEvent] of events) {
            server.on(event, (...data) => {
                this.emitter.emit(targetEvent, ...data);
            });
        }
    }
}
exports.MinecraftConnectionManager = MinecraftConnectionManager;
//# sourceMappingURL=MinecraftConnectionManager.js.map