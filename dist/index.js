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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeMinecraft = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const mc_server_management_1 = require("mc-server-management");
const tiny_typed_emitter_1 = require("tiny-typed-emitter");
const package_json_1 = require("../package.json");
const managers_1 = require("./managers");
const constants_1 = require("./constants");
const noop_1 = __importDefault(require("./functions/noop"));
class ForgeMinecraft extends forgescript_1.ForgeExtension {
    options;
    name = "forge.minecraft";
    description = package_json_1.description;
    version = package_json_1.version;
    server;
    commands;
    emitter = new tiny_typed_emitter_1.TypedEmitter();
    constructor(options = {}) {
        super();
        this.options = options;
    }
    async init(client) {
        this.commands = new managers_1.MinecraftCommandManager(client);
        if (this.options.server?.token) {
            const connection = await mc_server_management_1.WebSocketConnection.connect(`ws://${this.options.server.host}:${this.options.server.port}`, this.options.server.token).catch(noop_1.default);
            if (connection) {
                const server = new mc_server_management_1.MinecraftServer(connection);
                this.server = server;
                const listen = (event, targetEvent = event) => {
                    server.on(event, (data) => this.emitter.emit(targetEvent, data));
                };
                client.once("clientReady", () => {
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
                });
            }
        }
        forgescript_1.EventManager.load(constants_1.ForgeMinecraftEventHandlerName, __dirname + `/events`);
        this.load(__dirname + `/native`);
        if (this.options.events?.length) {
            client.events.load(constants_1.ForgeMinecraftEventHandlerName, this.options.events);
        }
        forgescript_1.ForgeClient.prototype.minecraft = this;
    }
}
exports.ForgeMinecraft = ForgeMinecraft;
__exportStar(require("./handlers"), exports);
__exportStar(require("./managers"), exports);
__exportStar(require("./structures"), exports);
__exportStar(require("./constants"), exports);
//# sourceMappingURL=index.js.map