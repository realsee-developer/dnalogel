import type { Five } from '@realsee/five';
import type { Object3D } from 'three';
/**
 * 从 Object3D 的父级链向上遍历，查找 __five__ 或 __sculpt__.five
 * 用于在场景树中正确获取渲染该对象的 Five 实例
 * 兜底：父链未找到时回退到 window.globalModules.five / window.$five，保证单 VR 场景兼容
 */
export declare function getFiveFromParentChain(object: Object3D): Five | undefined;
