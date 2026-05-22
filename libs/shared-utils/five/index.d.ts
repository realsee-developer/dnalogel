import type { Five } from '@realsee/five';
/** Five 模型是否加载完成 */
export declare function checkFiveModelLoaded(five: Five): {
    result: boolean;
    msg: string;
};
export * from './mode';
export * from './lookObject';
export * from './lookPoint';
export * from './fiveModelLoad';
export * from './FiveDomEvents';
export * from './initialCSS3DRender';
