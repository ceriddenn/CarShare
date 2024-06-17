"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpContext = require("express-http-context");
class RequestContext {
    static bind(req, res) {
        httpContext.ns.bindEmitter(req);
        httpContext.ns.bindEmitter(res);
    }
    static get(key) {
        return httpContext.get(key) || null;
    }
    static set(key, value) {
        return httpContext.set(key, value);
    }
}
exports.default = RequestContext;
//# sourceMappingURL=request-context.js.map