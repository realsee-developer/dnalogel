import type { Five, State as FiveState } from '@realsee/five';
import type { TagInstance } from '../typings';
import { TagUtil } from './TagUtil';
export declare abstract class TagComputer extends TagUtil {
    protected constructor(five: Five);
    /**
     * @description 获取是否可见
     */
    getVisible(tag: TagInstance, _fiveState?: Partial<FiveState>): boolean;
    protected computeTagVisible(tag: TagInstance, _fiveState?: Partial<FiveState>): {
        value: boolean;
        reason?: any;
        do_not_cache?: boolean;
    };
    /**
     * @description 获取是否展开
     */
    getUnfoldedByPanoIndex(tag: TagInstance, panoIndex?: number): boolean;
    /**
     * @description 获取是否展开
     */
    getUnfoldedByCamera(tag: TagInstance): boolean;
    protected setTagZIndex(tags: TagInstance[]): void;
    protected calculateTagZIndex(tag: TagInstance): number;
    protected setVisible(tags?: TagInstance | TagInstance[]): void;
    protected setUnfoldedByPanoIndex(): void;
    /**
     * @description 一个点的标签
     */
    protected getTagProject(tag: TagInstance): {
        x: number;
        y: number;
        z: number;
    };
    /** 通过射线检测标签可用性 */
    protected getTagEnableByIntersect(tag: TagInstance, panoIndex?: number): {
        value: boolean;
        reason: {
            type: string;
            fivePanoIndex: number;
            passedCount?: undefined;
            needPassed?: undefined;
        };
    } | {
        value: boolean;
        reason?: undefined;
    } | {
        value: boolean;
        reason: {
            type: string;
            passedCount: number;
            needPassed: number;
            fivePanoIndex?: undefined;
        };
    };
    /** 检测是否匹配当前楼层 */
    private getVisibleByFloorIndex;
}
