import type { Five } from '@realsee/five';
import { BaseUtil } from './BaseUtil';
import { WorkUtil } from './WorkUtil';
export declare class FiveUtil extends BaseUtil {
    workUtil: WorkUtil;
    get version(): string;
    get majorVersion(): number;
    get model(): import("@realsee/five").Model;
    constructor(five: Five);
    moveToPano(panoNumber: number, movePanoOptions: Parameters<Five['moveToPano']>[1]): Promise<void>;
}
