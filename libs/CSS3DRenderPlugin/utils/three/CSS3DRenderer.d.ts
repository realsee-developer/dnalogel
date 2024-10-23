import { CSS3DRenderer as CSS3DRendererType } from 'three/examples/jsm/renderers/CSS3DRenderer';
import type * as THREE from 'three';
declare const CSS3DRenderer: typeof CSS3DRendererType;
export default class ICSS3DRenderer extends CSS3DRenderer {
    wrapper?: Element;
    domElementWrapper: HTMLDivElement;
    private requestAnimationFrameId?;
    private resizeDisoper?;
    constructor();
    setWrapper(wrapper: Element): this;
    appendToElement(wrapper: Element): void;
    renderEveryFrame(scene: THREE.Scene, camera: THREE.Camera): void;
    stopRender(): void;
    dispose(): void;
}
export { ICSS3DRenderer };
