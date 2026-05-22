export type RecordKeys<T> = T extends Record<infer P, any> ? P : any;
export type RecordValue<T> = T extends Record<any, infer P> ? P : any;
