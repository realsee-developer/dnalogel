import type { CSS3DObject } from '../../three/CSS3DRenderer';
import { RectangleScaleController } from './RectangleScaleController';
export declare class CSS3DScaleController extends RectangleScaleController<CSS3DObject, HTMLElement> {
    protected name: string;
    constructor(...params: ConstructorParameters<typeof RectangleScaleController<CSS3DObject, HTMLElement>>);
    private addHTMLEventListener;
}
