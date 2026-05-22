import type { Direction4 } from '../../typings';
interface Sphere {
    element: HTMLElement;
    direction: Direction4;
}
export declare function rectangleScaleDom(): {
    container: HTMLElement;
    spheres: [Sphere, Sphere, Sphere, Sphere, Sphere, Sphere, Sphere, Sphere];
};
export declare function backgroundDom(): HTMLElement;
export {};
