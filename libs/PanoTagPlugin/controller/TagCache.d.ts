import type { Five } from '@realsee/five';
import type { ValueOf } from 'type-fest';
import type { TagId, TagCacheInterface, EventMap, State } from '../typings';
import * as BasePlugin from '../../base/BasePlugin';
export declare abstract class TagCache extends BasePlugin.Controller<State, EventMap> {
    private tagCacheByPanoIndex;
    protected constructor(five: Five);
    clearCacheById(id: TagId): void;
    /**
     * @description 获取缓存
     */
    protected getPanoIndexCache(params?: {
        panoIndex?: number;
    }): Map<TagId, TagCacheInterface>;
    protected getPanoIndexCache(params?: {
        panoIndex?: number;
        id: TagId;
    }): TagCacheInterface;
    protected getPanoIndexCache(params?: {
        panoIndex?: number;
        id: TagId;
        key: keyof TagCacheInterface;
    }): ValueOf<TagCacheInterface> | undefined;
    /**
     * @description 清除所有缓存
     */
    protected clearCache(): void;
    protected removeCache(): void;
}
