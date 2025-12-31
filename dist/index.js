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
const node_mcstatus_1 = require("node-mcstatus");
const tiny_typed_emitter_1 = require("tiny-typed-emitter");
const package_json_1 = require("../package.json");
const managers_1 = require("./managers");
const constants_1 = require("./constants");
const resolveStatus_1 = __importDefault(require("./functions/resolveStatus"));
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
        return (0, resolveStatus_1.default)(node_mcstatus_1.statusJava, this.options.java, host, port);
    }
    /**
     * Gets the status response of a Bedrock Minecraft server. Uses the `bedrock` client options if no parameters are provided.
     * @param host The host domain of the server.
     * @param port The port for the host domain.
     * @returns
     */
    async getBedrockStatus(host, port) {
        return (0, resolveStatus_1.default)(node_mcstatus_1.statusBedrock, this.options.bedrock, host, port);
    }
    async init(client) {
        client.minecraft = this;
        this.commands = new managers_1.MinecraftCommandManager(client);
        if (this.options.server) {
            this.manager = new managers_1.MinecraftConnectionManager(this.options.server, this.emitter);
            this.manager.on("connected", (server) => {
                this.server = server;
            });
            this.manager.connect(client);
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