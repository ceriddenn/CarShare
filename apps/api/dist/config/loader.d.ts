export declare const util: {
    isObject<T>(value: T): boolean;
    merge(target: Record<string, any>, source: Record<string, any>): Record<string, unknown>;
};
export declare const configuration: () => Promise<Record<string, unknown>>;
