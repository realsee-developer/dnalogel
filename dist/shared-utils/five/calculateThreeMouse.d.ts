import * as THREE from 'three';
/**
 * 计算 three 中的 mouse 的值
 * @param  mouseXY - 鼠标相对屏幕位置
 * @param  element - canvas元素（three的展示元素）
 */
declare function calculateThreeMouse(mouseXY: {
    x: number;
    y: number;
}, element: HTMLElement): THREE.Vector2;
export { calculateThreeMouse };
