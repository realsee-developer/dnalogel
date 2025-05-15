export default function doUtil<T = any>(func: () => T, util: (value: T) => boolean, duration?: number, times?: number): Promise<T>;
