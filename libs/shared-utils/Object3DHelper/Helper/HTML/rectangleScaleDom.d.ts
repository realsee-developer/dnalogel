import type { Direction4 } from '../../typings';
interface Square {
    element: HTMLElement;
    direction: Direction4;
}
export declare function rectangleScaleDom(): {
    container: HTMLElement;
    squares: [Square, Square, Square, Square, Square, Square, Square, Square];
};
export declare function backgroundDom(): HTMLElement;
export {};
