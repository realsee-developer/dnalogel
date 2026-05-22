import type * as THREE from 'three';
export type RenderDomObjectType = THREE.Object3D & {
    _onAdded: () => void;
    _onRemoved: () => void;
    _onShowed: () => void;
    _onHidden: () => void;
};
export declare class RenderDom {
    static cacheObject: Set<THREE.Object3D & {
        _onAdded: () => void;
        _onRemoved: () => void;
        _onShowed: () => void;
        _onHidden: () => void;
    }>;
    static checkDomEveryFrameIsRunning: boolean;
    static checkDom(obj: RenderDomObjectType): void;
    static checkDomEveryFrame(): void;
    static _checkDomEveryFrame(): void;
}
