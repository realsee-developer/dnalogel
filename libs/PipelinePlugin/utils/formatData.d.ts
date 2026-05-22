import type { PluginData, ServerData, LoadOptions } from '../typing';
/** 从 PluginData 中找到符合「从 ID 为 startLibraryID 的设备到 ID 为 endLibraryID 的设备」的 pipe data */
export declare function getPipesFromLibrary(params: {
    data: PluginData.RootObject;
    target: {
        startLibraryID: number;
        endLibraryID: number;
    }[];
}): PluginData.Pipe[];
/** 获取默认的管道贴图 */
export declare function getDefaultPipeUrl<T extends PluginData.Water>(water: T): string | undefined;
export declare function format(origin: ServerData.RootObject, options?: Partial<LoadOptions>): PluginData.RootObject;
