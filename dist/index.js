"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeMinecraft = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const mc_server_management_1 = require("mc-server-management");
const node_mcstatus_1 = require("node-mcstatus");
const tiny_typed_emitter_1 = require("tiny-typed-emitter");
const package_json_1 = require("../package.json");
const managers_1 = require("./managers");
const constants_1 = require("./constants");
class ForgeMinecraft extends forgescript_1.ForgeExtension {
    options;
    name = "forge.minecraft";
    description = package_json_1.description;
    version = package_json_1.version;
    server;
    commands;
    manager;
    emitter = new tiny_typed_emitter_1.TypedEmitter();
    constructor(options = {}) {
        super();
        this.options = options;
    }
    /**
     * Gets the status response of a Java Minecraft server. Uses the `java` client options if no parameters are provided.
     * @param host The host domain of the server.
     * @param port The port for the host domain.
     * @returns
     */
    async getJavaStatus(host, port) {
        host ||= this.options.java?.host;
        port ??= this.options.java?.port;
        if (!host)
            return null;
        return await (0, node_mcstatus_1.statusJava)(host, port);
    }
    /**
     * Gets the status response of a Bedrock Minecraft server. Uses the `bedrock` client options if no parameters are provided.
     * @param host The host domain of the server.
     * @param port The port for the host domain.
     * @returns
     */
    async getBedrockStatus(host, port) {
        host ||= this.options.bedrock?.host;
        port ??= this.options.bedrock?.port;
        if (!host)
            return null;
        return await (0, node_mcstatus_1.statusBedrock)(host, port);
    }
    async init(client) {
        forgescript_1.ForgeClient.prototype.minecraft = this;
        this.commands = new managers_1.MinecraftCommandManager(client);
        if (this.options.server) {
            forgescript_1.Logger.info("[ForgeMinecraft] Connecting to management server...");
            const { host, port, token, reconnect, reconnectInterval, maxReconnectAttempts } = this.options.server;
            const connection = await mc_server_management_1.WebSocketConnection.connect(`ws://${host}:${port}`, token, {
                reconnect,
                reconnect_interval: reconnectInterval,
                max_reconnects: maxReconnectAttempts
            }).catch(() => { });
            if (connection) {
                connection.on("open", () => {
                    this.server = new mc_server_management_1.MinecraftServer(connection);
                    forgescript_1.Logger.info("[ForgeMinecraft] Management connection established.");
                    const attachListeners = () => {
                        const listen = (event, targetEvent = event) => {
                            this.server.on(event, (data) => this.emitter.emit(targetEvent, data));
                        };
                        listen("error");
                        listen(mc_server_management_1.Notifications.ALLOWLIST_ADDED, "allowListAdded");
                        listen(mc_server_management_1.Notifications.ALLOWLIST_REMOVED, "allowListRemoved");
                        listen(mc_server_management_1.Notifications.BAN_ADDED, "banAdded");
                        listen(mc_server_management_1.Notifications.BAN_REMOVED, "banRemoved");
                        listen(mc_server_management_1.Notifications.GAME_RULE_UPDATED, "gameRuleUpdated");
                        listen(mc_server_management_1.Notifications.IP_BAN_ADDED, "ipBanAdded");
                        listen(mc_server_management_1.Notifications.IP_BAN_REMOVED, "ipBanRemoved");
                        listen(mc_server_management_1.Notifications.OPERATOR_ADDED, "operatorAdded");
                        listen(mc_server_management_1.Notifications.OPERATOR_REMOVED, "operatorRemoved");
                        listen(mc_server_management_1.Notifications.PLAYER_JOINED, "playerJoined");
                        listen(mc_server_management_1.Notifications.PLAYER_LEFT, "playerLeft");
                        listen(mc_server_management_1.Notifications.SERVER_ACTIVITY, "serverActivity");
                        listen(mc_server_management_1.Notifications.SERVER_SAVED, "serverSaved");
                        listen(mc_server_management_1.Notifications.SERVER_SAVING, "serverSaving");
                        listen(mc_server_management_1.Notifications.SERVER_STARTED, "serverStarted");
                        listen(mc_server_management_1.Notifications.SERVER_STATUS, "serverStatus");
                        listen(mc_server_management_1.Notifications.SERVER_STOPPING, "serverStopping");
                    };
                    if (client.isReady())
                        attachListeners();
                    else
                        client.once("clientReady", attachListeners);
                });
                connection.on("close", () => {
                    forgescript_1.Logger.warn("[ForgeMinecraft] Management connection closed.");
                    this.server = undefined;
                });
            }
            else {
                forgescript_1.Logger.warn("[ForgeMinecraft] Management connection could not be established.");
            }
        }
        forgescript_1.EventManager.load(constants_1.ForgeMinecraftEventHandlerName, __dirname + `/events`);
        this.load(__dirname + `/native`);
        if (this.options.events?.length) {
            client.events.load(constants_1.ForgeMinecraftEventHandlerName, this.options.events);
        }
    }
}
exports.ForgeMinecraft = ForgeMinecraft;
__exportStar(require("./handlers"), exports);
__exportStar(require("./managers"), exports);
__exportStar(require("./structures"), exports);
__exportStar(require("./constants"), exports);
__exportStar(require("./types"), exports);
//# sourceMappingURL=index.js.map