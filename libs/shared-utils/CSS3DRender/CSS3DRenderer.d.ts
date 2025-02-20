import { CSS3DRenderer } from '../three/CSS3DRenderer';
import type * as THREE from 'three';
export declare class ICSS3DRenderer extends CSS3DRenderer {
    wrapper?: Element;
    domElementWrapper: HTMLDivElement;
    private requestAnimationFrameId?;
    private resizeDisoper?;
    constructor(mode?: 'front' | 'behind');
    setWrapper(wrapper: Element): this;
    appendToElement(wrapper: Element): void;
    renderEveryFrame(scene: THREE.Scene, camera: THREE.Camera): void;
    stopRender(): void;
    dispose(): void;
}
