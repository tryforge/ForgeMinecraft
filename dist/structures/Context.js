"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const forgescript_1 = require("@tryforge/forgescript");
const mc_server_management_1 = require("mc-server-management");
class Context extends forgescript_1.Context {
    runtime;
    #cache = {};
    constructor(runtime) {
        super(runtime);
        this.runtime = runtime;
    }
    get obj() {
        return this.runtime.obj;
    }
    get player() {
        return this.#cache.player ??= this.obj instanceof mc_server_management_1.Player ? this.obj : null;
    }
    get operator() {
        return this.#cache.operator ??= this.obj instanceof mc_server_management_1.Operator ? this.obj : null;
    }
    get serverState() {
        return this.#cache.serverState ??= this.obj instanceof mc_server_management_1.ServerState ? this.obj : null;
    }
    get gameRule() {
        return this.#cache.gameRule ??= this.obj instanceof mc_server_management_1.TypedGameRule ? this.obj : null;
    }
    get userBan() {
        return this.#cache.userBan ??= this.obj instanceof mc_server_management_1.UserBan ? this.obj : null;
    }
    get ipBan() {
        return this.#cache.ipBan ??= this.obj instanceof mc_server_management_1.IPBan ? this.obj : null;
    }
}
exports.Context = Context;
//# sourceMappingURL=Context.js.map