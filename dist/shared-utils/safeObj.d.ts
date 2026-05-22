export default function safeObj<T>(object: T): Exclude<Extract<T, Record<any, any>>, Function>;
