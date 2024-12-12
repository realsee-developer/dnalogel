import type { Five } from '@realsee/five';
/**
 * @description: 等待 five model 加载完成
 */
export declare function waitFiveModelLoaded(five: Five): Promise<void>;
/**
 * @note five 6.0 修复了 多次 load work 时，`five.model.loaded` 不会变为 `false` 的问题，不再需要 `five.model.name === five.work?.model.file` 的判断了
 */
export declare function fiveModelIsLoaded(five: Five): boolean;
