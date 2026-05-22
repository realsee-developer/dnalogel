import * as THREE from 'three';
/**
 * 计算 three 中的 mouse 的值
 * @param  mouseXY - 鼠标相对屏幕位置
 * @param  element - canvas元素（three的展示元素）
 * @param  scissor - 屏幕剪裁
 */
export declare function calculateThreeMouse(originMouse: {
    x: number;
    y: number;
}, element: HTMLElement): THREE.Vector2 & {
    x: number;
    y: number;
};
