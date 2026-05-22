/**
 * 显示区域裁剪参数
 * @description
 * 可通过初始化，或者 setScissor 方式设置
 * `scissor` 是将屏幕中的内容渲染到 `renderer` 的指定区域。
 * 页面整体长宽均为 `1`。通过类似 css 的 `left` `bottom` `width` `height` 来确定区域。
 */
export interface Scissor {
    /** 距离左侧 */
    left: number;
    /** 距离下侧 */
    bottom: number;
    /** 宽度 */
    width: number;
    /** 高度 */
    height: number;
}
