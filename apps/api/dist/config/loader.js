"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = exports.util = void 0;
exports.util = {
    isObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    },
    merge(target, source) {
        Object.keys(source).forEach((key) => {
            if (this.isObject(target[key]) && this.isObject(source[key])) {
                Object.assign(source[key], this.merge(target[key], source[key]));
            }
        });
        return { ...target, ...source };
    },
};
const getEnvLoaderFile = (envFileName) => {
    switch (envFileName) {
        case '.env.local':
            return 'local';
        case '.env.development':
            return 'dev';
        case '.env.staging':
            return 'stg';
        case '.env.production':
            return 'prod';
    }
};
const configuration = async () => {
    const envLoader = getEnvLoaderFile(process.env.ENV_FILE);
    const environment = await Promise.resolve().then(() => require(`../../.env`));
    const common = await Promise.resolve().then(() => require(`./common`));
    return exports.util.merge(common.config, environment.config);
};
exports.configuration = configuration;
//# sourceMappingURL=loader.js.map