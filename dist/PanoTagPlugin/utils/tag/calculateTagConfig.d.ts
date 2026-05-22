import { type Tag, type Tags, type TagInstance } from '../../typings';
/**
 * @description 获取merge后的配置
 */
export declare function calculateTagConfig(tag: Tag, baseConfig: Pick<Tags, 'globalConfig' | 'contentTypeConfig'>, params?: {
    useCache?: boolean;
}): TagInstance['computedConfig'];
