import type { Five, Mode } from '@realsee/five';
import type { Object3D } from 'three';
import { Vector3 } from 'three';
import { Subscribe } from '../../shared-utils/Subscribe';
import type { LightTag } from '../../shared-utils/tag';
import type { FiveDomEvents } from '../../shared-utils/five/FiveDomEvents';
import type { ServerItem, ItemType, ElementRenderer } from '../typings';
interface ModelWithCenter extends Object3D {
    /** 模型中心点 */
    center?: Vector3;
}
/**
 * @description 模型标注的事件类型
 */
type ModelMakerEvent<ServerData extends ServerItem> = {
    /** 启用 */
    enable: () => void;
    /** 禁用 */
    disable: () => void;
    /** 显示 */
    show: () => void;
    /** 隐藏 */
    hide: () => void;
    /** 点击 */
    click: (item: ModelMakerBaseItem<ServerData>) => void | boolean;
};
/**
 * @description 模型标注的基类
 */
export declare class ModelMakerBaseItem<ServerData extends ServerItem> extends Subscribe<ModelMakerEvent<ServerData>> {
    __renderer?: ElementRenderer;
    __disposeRenderer?: () => void;
    get container(): HTMLDivElement;
    type: ItemType;
    tag: LightTag;
    rawData: ServerData;
    model: ModelWithCenter;
    get state(): {
        visible: boolean;
        enabled: boolean;
    };
    visibles: boolean[];
    protected five: Five;
    protected group: Object3D;
    protected fiveDomEvents: FiveDomEvents;
    protected disposers: (() => void)[];
    constructor(params: {
        five: Five;
        model: ModelWithCenter;
        group: Object3D;
        type: ItemType;
        fiveDomEvents: FiveDomEvents;
        rawData?: ServerData;
        tagWrapper?: HTMLElement;
        visibleMode?: Mode[];
        position?: Vector3;
        tagContainerZIndex?: number;
    });
    show(): void;
    hide(): void;
    enable(): void;
    disable(): void;
    updateVisible(): void;
    protected onClick(): boolean;
}
export {};
