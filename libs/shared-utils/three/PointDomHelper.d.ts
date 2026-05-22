import type { Five } from '@realsee/five';
import type { Intersection } from '../../typings/typings';
export declare class PointDomHelper {
    private five;
    private contentElement;
    private animeIns?;
    private container?;
    private css3DObject?;
    private disposeCss3DObject?;
    private state;
    constructor(five: Five);
    enable(): void;
    disable(): void;
    updateWithIntersect(intersect: Intersection): void;
    /** 缩放动画 */
    doAnimation(): void;
    dispose(): void;
}
