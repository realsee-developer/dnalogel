import anime from 'animejs';
import * as THREE from 'three';
interface BlinkAnimeOptions extends anime.AnimeParams {
    updateRender?: () => any;
    /**
     * @description 递归修改所有子元素透明度
     * @default true
     */
    traverseTHREEObject?: boolean;
}
interface ReBlinkAnimeOptions extends BlinkAnimeOptions {
    maxOpacity?: number;
}
interface AnimeInstance extends anime.AnimeInstance {
    /**
     * @description 提前结束动画
     */
    preComplete: () => void;
}
type Target = HTMLElement | THREE.Object3D;
declare const animeMap: Map<Target | Target[], AnimeInstance>;
/**
 * @description 闪烁一个物体/Dom
 * @param animeOptions https://animejs.com/documentation/
 * @example
 * ```ts
 * // 闪烁 three 物体
 * blink(object3D, { updateRender: () => { five.needsRender = true } })
 * // 闪烁 dom 5 次
 * blink(document.getElementById('id'), { loop: 5 * 2 })
 * ```
 */
declare function blink(objects: Target | Target[], animeOptions?: BlinkAnimeOptions): AnimeInstance;
/**
 * @description 闪烁一个不可见的物体/Dom
 *
 * 适用于物体/Dom在初始状态不可见的情况，闪烁完成后的状态为初始不可见的状态
 * @param animeOptions https://animejs.com/documentation/
 */
declare function reblink(objects: Target | Target[], animeOptions?: BlinkAnimeOptions): AnimeInstance;
export { blink, reblink, animeMap, type BlinkAnimeOptions, type ReBlinkAnimeOptions, type AnimeInstance };
