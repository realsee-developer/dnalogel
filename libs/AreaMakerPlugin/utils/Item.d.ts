import * as THREE from 'three';
import { Object3D } from '../../shared-utils';
import { LineSegments } from '../../shared-utils';
import type { Controller } from '../Controller';
import type * as PluginType from '../typing';
import LabelItem from '../../components/AreaLabel/LabelItem.svelte';
import { Subscribe } from '../../shared-utils/Subscribe';
declare class AreaMakerModelGroup extends Object3D {
    private areaMakerItem;
    constructor(areaMakerItem: AreaMakerItem);
    raycast(raycaster: THREE.Raycaster, intersects: THREE.Intersection[]): void;
}
export declare class AreaMakerItem {
    id: string | number;
    /** 标注名称 */
    name: string;
    /** 标注几何体 */
    makerObject: THREE.Mesh<THREE.ExtrudeBufferGeometry, THREE.MeshBasicMaterial>;
    /** 标注几何体的边框 */
    outline: LineSegments<THREE.EdgesGeometry, THREE.LineBasicMaterial>;
    /** 标注底面 Y 坐标 */
    bottomY: PluginType.ServerAreaMakerItem['object_data']['bottom_y'];
    /** 标注透明度 */
    opacity: PluginType.ServerAreaMakerItem['object_data']['opacity'];
    /** 标注高度 */
    height: PluginType.ServerAreaMakerItem['object_data']['height'];
    /** 标注所在楼层 */
    floorIndex: PluginType.ServerAreaMakerItem['floor_index'];
    /** 标注底面形状 */
    shape: THREE.Shape;
    /** 是否被挂载 */
    mounted: boolean;
    /** 查询问题使用的调试对象 */
    checkMsg: {
        /** 当标注没有展示时，可以通过这个字段查看原因 */
        checkVisibleMsg: string;
        /** 当标注标签没有展示时，可以通过这个字段查看原因 */
        checkTagVisibleMsg: string;
    };
    /** 模型容器 */
    modelGroup: AreaMakerModelGroup;
    /** 标注是否可见 */
    visible: boolean;
    /** 标注标签实例 */
    tagApp: LabelItem | null;
    /** 标注标签是否可见 */
    tagVisible: boolean | null;
    /** 标注标签的世界坐标 */
    tagPosition: THREE.Vector3;
    /** 标注标签的 NDC 坐标 */
    tagNDCPosition: THREE.Vector3;
    /** 标注标签的 transform */
    tagTransform: {
        left: number;
        top: number;
    };
    /** 标注标签的显示层级 */
    tagZIndex: number;
    /** 标注实例的事件处理器 */
    hooks: Subscribe<PluginType.AreaMakerItemEventMap>;
    /** 自定义 Dom */
    itemRenderer?: PluginType.ItemRenderer;
    /** 数据 */
    private data;
    /** Plugin 实例 */
    private plugin;
    /** 标注透明度动画 */
    private opacityAnime?;
    /** 是否在容器 resize 动画中 */
    private isInContainerResizeAnimation;
    /** 监听容器 resize 的计时器 id，用于判断 resize 过程是否结束 */
    private containerResizeTimeoutID;
    private resizeObserver?;
    constructor(plugin: Controller, data: PluginType.ServerAreaMakerItem);
    /** 挂载标注 */
    mount(): void;
    /** 卸载标注 */
    unmount(): void;
    /** 更改标注透明度
     * @param opacity 标注透明度，范围：0-1
     */
    setOpacity(opacity: number): void;
    /** 更改标注颜色
     * @param color 标注颜色，支持 hex
     * @example setColor('#FF0000')
     */
    setColor(color: string): void;
    /** 更改标注高度
     * @param height 标注高度，单位：米
     */
    setHeight(height: number): void;
    /** 更改标注标签的显示层级
     * @description 为什么需要这个方法
     * 在相机朝向或位置发生变化时，各个标签所在的坐标与相机的远近关系发生了变化，所以标签的层级也会有变化。
     * 比如：
     * - 相机 -> 标签 A -> 标签 B： 标签 A 在标签 B 的前面
     * - 标签 A <- 标签 B <- 相机： 标签 A 在标签 B 的后面
     * 但是当前元素是无法感知到这种变化的，所以需要通过父元素调用这个方法来更新标签的层级。
     */
    setTagZIndex(zIndex: number): void;
    /** 显示标注 */
    /** 隐藏标注 */
    /** 透明度动画 */
    private doOpacityAnime;
    /** 插件 Config 变化时更新自身 depthTest */
    private onPluginConfigChange;
    /** 插件整体可见性变化时，需要更新自身可见性 */
    private onPluginStateChange;
    /** 更新标注可见性 */
    private updateVisible;
    /** 检测标注是否可见 */
    private checkVisible;
    /** 更新标注标签 */
    private updateTag;
    /** 更新标注标签的 NDC Position */
    private updateTagNDCPosition;
    /** 更新标注标签的 transform */
    private updateTagDomTransform;
    /** 更新标注标签可见性 */
    private updateTagVisible;
    /** 检测标注标签是否可见 */
    private checkTagVisible;
    /** 相机位姿发生变化时，更新标签 */
    private onFiveCameraUpdate;
    /** tag container DOM 发生 resize */
    private onContainerResize;
}
export {};
