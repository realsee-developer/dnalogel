import { Five } from '@realsee/five';
import type { CSS3DObjectPlus } from './CSS3DObject';
/**
 * 向前置场景列表添加场景
 * @param scene 要添加的场景
 * @param key 场景的唯一标识符，如果不提供则使用场景的 uuid
 * @returns 是否添加成功
 */
export declare function addFrontScene(scene: THREE.Scene | CSS3DObjectPlus, key?: string): boolean;
/**
 * 从前置场景列表删除指定场景
 * @param sceneOrKey 要删除的场景对象或场景的key
 * @returns 是否删除成功
 */
export declare function removeFrontScene(sceneOrKey: THREE.Scene | string | CSS3DObjectPlus): boolean;
/**
 * 向后置场景列表添加场景
 * @param scene 要添加的场景
 * @param key 场景的唯一标识符，如果不提供则使用场景的 uuid
 * @returns 是否添加成功
 */
export declare function addBehindScene(scene: THREE.Scene | CSS3DObjectPlus, key?: string): boolean;
/**
 * 从后置场景列表删除指定场景
 * @param sceneOrKey 要删除的场景对象或场景的key
 * @returns 是否删除成功
 */
export declare function removeBehindScene(sceneOrKey: THREE.Scene | string | CSS3DObjectPlus): boolean;
/**
 * 清空前置场景列表
 */
export declare function clearFrontScenes(): void;
/**
 * 清空后置场景列表
 */
export declare function clearBehindScenes(): void;
/**
 * 清空所有场景列表
 */
export declare function clearAllScenes(): void;
export declare function initialCSS3DRender(five: Five): () => any;
