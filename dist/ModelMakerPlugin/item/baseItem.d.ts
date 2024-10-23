import type { Five, Mode } from '@realsee/five';
import * as THREE from 'three';
import { Subscribe } from '../../shared-utils/Subscribe';
import type { LightTag } from '../../shared-utils/tag';
import type { FiveDomEvents } from '../../shared-utils/five/FiveDomEvents';
type Event = {
    enable: () => void;
    disable: () => void;
    show: () => void;
    hide: () => void;
    click: (item: ModelMakerBaseItem) => void | boolean;
};
export declare class ModelMakerBaseItem extends Subscribe<Event> {
    get container(): HTMLDivElement;
    type: string;
    tag: LightTag;
    rawData: any;
    model: THREE.Object3D;
    get state(): {
        visible: boolean;
        enabled: boolean;
    };
    protected five: Five;
    protected group: THREE.Object3D;
    protected fiveDomEvents: FiveDomEvents;
    constructor(params: {
        five: Five;
        model: THREE.Object3D;
        group: THREE.Object3D;
        type: string;
        rawData?: any;
        tagWrapper?: HTMLElement;
        visibleMode?: Mode[];
        position?: THREE.Vector3;
        tagContainerZIndex?: number;
    });
    show(): void;
    hide(): void;
    enable(): void;
    disable(): void;
    protected onClick(): boolean;
}
export {};
