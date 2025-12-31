"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const forgescript_1 = require("@tryforge/forgescript");
function default_1(...args) {
    if (this.hasDisabledConsoleErrors()) {
        return;
    }
    forgescript_1.Logger.error("[ForgeMinecraft]", ...args);
}
//# sourceMappingURL=contextNoop.js.map