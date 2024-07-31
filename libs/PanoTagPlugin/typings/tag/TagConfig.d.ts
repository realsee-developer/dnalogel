import type { Create3DDomContainerParamsType } from '../../../CSS3DRenderPlugin/Controller';
import type { Five, Mode } from '@realsee/five';
import type { ContentTypeMap, TagContentType } from './TagData';
import type { MinMax } from './Utils';
import type { TagInstance } from './TagInstance';
import type { PartialObjectDeep } from '../../../typings/typings';
import type { Vector3 } from 'three';
type TagVisibleMode = Mode | Mode[] | 'PanoramaLike' | 'ModelLike' | 'all';
export interface TagConfig<C extends TagContentType = TagContentType> {
    /**
     * @description 显示/隐藏相关配置
     */
    visibleConfig?: {
        /**
         * @description 在 `visibleFiveMode` 指定的 `mode` 中，保持可见/不可见。设置后 `visibleConfig` 中除了 `visibleFiveMode` 外的所有其他配置都不生效
         * @default null
         * @example
         * ```typescript
         * // 在 Panorama 和 Floorplan 模式下永远保持可见
         * const config = {
         *  keep: 'visible',
         *  visibleFiveMode: ['Panorama', 'Floorplan'],
         * }
         * // 在 tag.fiveState.mode 中时，永远保持可见
         * const config = {
         *  keep: 'visible',
         * }
         * ```
         */
        keep?: 'visible' | 'hidden' | null;
        /**
         * @description 在哪些 `five mode` 下可见
         * @tips 默认值的设定是在 config 合并后，而不是合并前
         * @default
         * ```
         * 普通全景模式：['Panorama']
         * ```
         * @example
         * ```typescript
         * const tag = {
         *  ...
         *  fiveState: {
         *    mode: 'Floorplan',
         *  }
         *  ...
         *  config: {},
         * }
         * // 相当于
         * const tag = {
         *  ...
         *  fiveState: {
         *    mode: 'Floorplan',
         *  }
         *  ...
         *  config: {
         *    visibleFiveMode: 'Floorplan',
         *  },
         * }
         * ```
         */
        visibleFiveMode?: TagVisibleMode | ((tag: TagInstance) => TagVisibleMode);
        /**
         * @description 当 visibleFiveMode 包含 'Floorplan' 或者 'MapView' 时，是否仅在当前楼层模型下可见
         * @default false
         */
        followModelVisibility?: boolean;
        /**
         * @description 走点时不隐藏
         * @fivemode 只在全景模式下生效
         * @default false
         */
        alwaysShowWhenMovePano?: boolean;
        /**
         * @description 配置可见距离
         * @fivemode 只在全景模式下生效
         * @default 'unLimited'
         */
        visibleDistance?: MinMax | 'unLimited';
        /**
         * @description 配置标签可见点位
         * @fivemode 只在全景模式下生效
         * @param all 不限制
         * @param current 仅当前点位可见
         * @param number[] 仅指定点位可见
         * @default 'all'
         */
        visiblePanoIndex?: 'all' | 'current' | number[];
        /**
         * @description 碰撞检测配置
         * @default true
         */
        intersectRaycaster?: boolean | {
            /**
             * @description 是否开启碰撞检测
             * @default true
             */
            enabled?: boolean;
            /**
             * @description 碰撞检测的允许误差
             * @default 0.01
             */
            distanceAccuracy?: number;
            /**
             * @description 碰撞检测的点
             * @default 'center'
             */
            checkPoints?: 'center' | 'corner' | Vector3[];
            /**
             * @description 碰撞检测策略，多少点通过检测则认为碰撞通过
             * @default 1
             */
            needPassed?: number;
        };
        /**
         * @description 3D标签中 「标签所在平面或垂直于标签法线的平面」 与 「摄像机到标签点或中心点的向量」 的夹角，范围内自动展开，范围外自动收起
         * @fivemode 只在全景模式下生效
         * @default undefined
         */
        angleRange?: MinMax;
    } | ConfigFunction;
    /**
     * @description 展开/收起相关配置
     */
    unfoldedConfig?: {
        /**
         * @description 保持展开/收起，设置后unfoldedConfig下所有其他配置都不生效
         * @default null
         */
        keep?: 'unfolded' | 'folded' | null;
        /**
         * @description 划动到不可见状态时，自动收起，disableFold: true 的标签不受此参数影响
         * @note 部分标签是无法收起的
         * @default true
         */
        autoFoldWhenHide?: false;
        /**
         * @deprecated replace by { keep: 'folded' }
         * @deprecated 部分标签是无法打开的
         * @default undefined
         */
        disableUnfold?: true;
        /**
         * @deprecated replace by { keep: 'unfolded' }
         * @deprecated 部分标签是无法收起的
         * @default undefined
         */
        disableFold?: true;
        /** min-max米内自动展开,否则收起 */
        unfoldDistance?: MinMax;
        /**
         * @description 自动展开策略
         *
         * @strategy 'ScreenPostion'：根据屏幕位置展开
         * @strategy 'MinimumDistance'：最近标签自动展开
         * @strategy 'FoldWhenMove'：移动屏幕自动收起
         */
        autoUnfold?: false | {
            enable?: boolean;
            /** 自动展开 策略 */
            strategy?: 'ScreenPostion';
            /** 自动展开策略，{min,max}为project(camera)后的x值 */
            autoUnfoldProjectX?: MinMax;
        } | {
            enable?: boolean;
            /** 自动展开：最近标签自动展开 */
            strategy?: 'MinimumDistance';
            /**
             * @description 展开的最大数量
             * @default 1
             */
            maxNumber?: number;
            /**
             * @description 展开的最大距离
             * @default 无限制
             */
            distance?: MinMax;
        } | {
            enable?: boolean;
            /** 移动屏幕自动收起 */
            strategy?: 'FoldWhenMove';
        };
    } | ConfigFunction;
    /** 初始状态 */
    initialState?: {
        /**
         * @description 展示状态
         */
        visible?: boolean;
        /**
         * @description 展开状态
         */
        unfolded?: boolean;
    };
    /**
     * @description 标签的默认数据，会将 tag.data 深度合并进来
     * @code `tag.data = ObjectAssignDeep(initialData, tag.data)`
     */
    initialData?: PartialObjectDeep<ContentTypeMap[C]> & {
        /**
         * @description 类似 css 的 !important，会覆盖掉 tag.data 中对应的数据
         * @code
         * ```typescript
         *  if (initialData.important) {
         *     tag.data = ObjectAssignDeep(tag.data, initialData)
         *  } else {
         *     tag.data = ObjectAssignDeep(initialData, tag.data)
         *  }
         * ```
         */
        important?: boolean;
    };
    /**
     * @description 内部使用 css3DRenderer 渲染的标签可以使用此配置来设置 css3DRenderer 相关参数
     */
    tag3DConfig?: Create3DDomContainerParamsType['config'];
    modelConfig?: {
        autoLookAtEnabled?: boolean;
    };
    /**
     * @description 当图片为一张时可以选择通过Mesh渲染
     * @default 'Dom'
     */
    renderType?: 'Mesh' | 'Dom';
    /**
     * @description 是否可以点击
     * @default true
     */
    clickable?: boolean;
    /**
     * @deprecated private property
     */
    _isMerged?: boolean;
}
export declare const defaultGlobalConfig: TagConfig;
type ConfigFunction = (five: Five, tagState: {
    tag: TagInstance<any>;
    /** 标签点或中心点的到摄像机的距离 */
    distance: number;
    /** 3D标签中 「标签所在平面或垂直于标签法线的平面」 与 「摄像机到标签点或中心点的向量」 的夹角 */
    angleRange?: number;
}) => boolean;
export {};
