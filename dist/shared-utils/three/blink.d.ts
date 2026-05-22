/**
 * @fileoverview 闪烁动画工具模块
 *
 * 这个模块提供了用于创建闪烁动画效果的工具函数，支持 js 对象和 DOM 元素。
 * 主要功能包括：
 * - 为 js Object3D 和 DOM 元素创建闪烁动画
 * - 自动保存和恢复物体的初始状态
 * - 支持递归处理 js 对象的子元素
 * - 兼容不同类型的材质（ShaderMaterial、普通 Material）
 *
 * @module blink
 * @author DNAlogel Team
 * @since 1.0.0
 */
import anime from 'animejs';
import { ShaderMaterial, type Material, type Object3D } from 'three';
/**
 * 默认动画配置
 * @constant
 */
declare const DEFAULT_ANIME_CONFIG: {
    readonly duration: 300;
    readonly easing: "linear";
    readonly direction: "alternate";
    readonly loop: 4;
    readonly autoplay: false;
};
/**
 * 动画预设配置
 * @constant
 */
declare const ANIME_PRESETS: {
    readonly quick: {
        readonly duration: 200;
        readonly loop: 2;
    };
    readonly normal: {
        readonly duration: 300;
        readonly loop: 4;
    };
    readonly slow: {
        readonly duration: 500;
        readonly loop: 6;
    };
    readonly attention: {
        readonly duration: 400;
        readonly loop: 8;
        readonly easing: "easeInOutQuad";
    };
};
/**
 * 物体初始状态接口
 * @interface ObjectInitialState
 */
interface ObjectInitialState {
    /** 初始透明度值 */
    opacity?: number | string;
    /** 初始透明属性 */
    transparent?: boolean;
    /** 初始可见性状态 */
    visible?: boolean | {
        display: string;
        visibility: string;
    };
}
/**
 * 闪烁动画选项接口
 * @interface BlinkAnimeOptions
 * @extends {anime.AnimeParams}
 */
interface BlinkAnimeOptions extends anime.AnimeParams {
    /**
     * 渲染更新回调函数
     * @description 在动画更新时调用的函数，通常用于触发渲染更新
     */
    updateRender?: () => void;
    /**
     * 动画进度回调函数
     * @description 在动画进度更新时调用的函数
     */
    onProgress?: (progress: number) => void;
    /**
     * 动画开始回调函数
     * @description 在动画开始时调用的函数
     */
    onStart?: () => void;
    /**
     * 动画完成回调函数
     * @description 在动画完成时调用的函数
     */
    onComplete?: () => void;
    /**
     * 是否递归修改所有子元素透明度
     * @description 当为 true 时，会遍历 js 对象的所有子元素并应用闪烁效果
     * @default true
     */
    traverseTHREEObject?: boolean;
}
/**
 * 重新闪烁动画选项接口
 * @interface ReBlinkAnimeOptions
 * @extends {BlinkAnimeOptions}
 */
interface ReBlinkAnimeOptions extends BlinkAnimeOptions {
    /**
     * 最大透明度值
     * @description 重新闪烁时的最大透明度，范围 0-1
     * @default 1
     */
    maxOpacity?: number;
}
/**
 * 扩展的动画实例接口
 * @interface ExtendedAnimeInstance
 * @extends {anime.AnimeInstance}
 */
interface ExtendedAnimeInstance extends anime.AnimeInstance {
    /**
     * 提前结束动画
     * @description 手动结束动画并恢复初始状态
     */
    preComplete: () => void;
    /**
     * 暂停动画
     */
    pause: () => void;
    /**
     * 播放动画
     */
    play: () => void;
    /**
     * 跳转到指定时间
     */
    seek: (time: number) => void;
    /**
     * 动画完成 Promise
     */
    finished: Promise<void>;
}
/**
 * 支持的目标类型
 * @typedef {HTMLElement | Object3D} Target
 */
type Target = HTMLElement | Object3D;
/**
 * 材质对象类型
 * @typedef {Material | ShaderMaterial} MaterialObject
 */
type MaterialObject = Material | ShaderMaterial;
/**
 * 带材质的 js 对象类型
 * @interface Object3DWithMaterial
 * @extends {Object3D}
 */
interface Object3DWithMaterial extends Object3D {
    material: MaterialObject;
    visible: boolean;
    name: string;
    traverse: (callback: (child: Object3D) => void) => void;
    isObject3D: true;
}
/**
 * 无材质的 js 对象类型
 * @interface Object3DWithoutMaterial
 * @extends {Object3D}
 */
interface Object3DWithoutMaterial extends Object3D {
    material?: undefined;
    visible: boolean;
    name: string;
    traverse: (callback: (child: Object3D) => void) => void;
    isObject3D: true;
}
/**
 * 所有可能的 js 对象类型
 * @typedef {Object3DWithMaterial | Object3DWithoutMaterial} ThreeObject
 */
type ThreeObject = Object3DWithMaterial | Object3DWithoutMaterial;
/**
 * 所有支持的目标类型
 * @typedef {HTMLElement | ThreeObject} SupportedTarget
 */
type SupportedTarget = HTMLElement | ThreeObject;
/**
 * 存储动画实例的 WeakMap
 * @description 用于管理正在进行的动画实例，避免重复动画
 * @private
 */
declare const animeMap: WeakMap<Target | Target[], ExtendedAnimeInstance>;
/**
 * 闪烁一个物体或DOM元素
 * @description 为指定的 js 对象或 DOM 元素创建闪烁动画效果。
 * 动画会自动保存物体的初始状态，并在动画结束后恢复到初始状态。
 *
 * @param {Target | Target[]} objects - 要闪烁的目标对象或对象数组
 * @param {BlinkAnimeOptions} [animeOptions] - 动画选项配置
 * @returns {ExtendedAnimeInstance} 动画实例，可以用于控制动画
 *
 * @example
 * ```typescript
 * // 闪烁 js 对象
 * const animeInstance = blink(object3D, {
 *   updateRender: () => { five.needsRender = true }
 * })
 *
 * // 闪烁 DOM 元素 5 次
 * blink(document.getElementById('id'), {
 *   loop: 5 * 2
 * })
 *
 * // 自定义动画参数
 * blink(object3D, {
 *   duration: 500,
 *   easing: 'easeInOutQuad',
 *   loop: 6,
 *   updateRender: () => renderer.render(scene, camera)
 * })
 * ```
 *
 * @example
 * ```typescript
 * // 提前结束动画
 * const anime = blink(object3D)
 * setTimeout(() => {
 *   anime.preComplete() // 立即结束动画并恢复状态
 * }, 1000)
 * ```
 */
declare function blink(objects: Target | Target[], animeOptions?: BlinkAnimeOptions): ExtendedAnimeInstance;
/**
 * 闪烁一个不可见的物体或DOM元素
 * @description 适用于物体或DOM元素在初始状态不可见的情况。
 * 闪烁完成后的状态为初始不可见的状态。
 *
 * @param {Target | Target[]} objects - 要闪烁的目标对象或对象数组
 * @param {ReBlinkAnimeOptions} [animeOptions] - 动画选项配置
 * @returns {ExtendedAnimeInstance} 动画实例，可以用于控制动画
 *
 * @example
 * ```typescript
 * // 闪烁不可见的 js 对象
 * reblink(invisibleObject3D, {
 *   maxOpacity: 0.8,
 *   updateRender: () => { five.needsRender = true }
 * })
 *
 * // 闪烁隐藏的 DOM 元素
 * reblink(hiddenElement, {
 *   duration: 1000,
 *   loop: 3
 * })
 * ```
 *
 * @example
 * ```typescript
 * // 自定义最大透明度
 * reblink(object3D, {
 *   maxOpacity: 0.5, // 最大透明度为 0.5
 *   duration: 500,
 *   easing: 'easeInOutQuad'
 * })
 * ```
 */
declare function reblink(objects: Target | Target[], animeOptions?: ReBlinkAnimeOptions): ExtendedAnimeInstance;
/**
 * 使用预设配置的闪烁函数
 * @param objects 目标对象
 * @param preset 预设名称
 * @param options 额外选项
 * @returns 动画实例
 */
declare function blinkWithPreset(objects: Target | Target[], preset: keyof typeof ANIME_PRESETS, options?: BlinkAnimeOptions): ExtendedAnimeInstance;
/**
 * 清理所有动画和状态
 * @description 清理所有正在进行的动画和存储的状态
 */
declare function cleanup(): void;
export { blink, reblink, blinkWithPreset, cleanup, animeMap, type BlinkAnimeOptions, type ReBlinkAnimeOptions, type ExtendedAnimeInstance as AnimeInstance, type Target, type SupportedTarget, type ThreeObject, type ObjectInitialState, DEFAULT_ANIME_CONFIG, ANIME_PRESETS, };
