"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setContext = void 0;
const _ = require("lodash");
const shortid = require("shortid");
const request_context_1 = require("../utils/request-context");
function setContext(appName) {
    return (req, res, next) => {
        request_context_1.default.bind(req, res);
        _.each(req.headers, (value, key) => {
            request_context_1.default.set(key, value);
        });
        let correlationId = req.get('x-correlation-id');
        if (!correlationId) {
            correlationId = `${appName}-${shortid.generate()}`;
        }
        request_context_1.default.set('correlationId', correlationId);
        next();
    };
}
exports.setContext = setContext;
//# sourceMappingURL=setContext.js.map