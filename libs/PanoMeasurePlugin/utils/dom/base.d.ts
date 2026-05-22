import type { Vector3 } from 'three';
import type { Five } from '@realsee/five';
export interface ItemDomParams {
    clickCallback?: (event: MouseEvent, item: ItemDom) => unknown;
    containerStyle?: Partial<CSSStyleDeclaration>;
    contentStyle?: Partial<CSSStyleDeclaration>;
}
export declare abstract class ItemDom {
    ndcPosition: Vector3 | null;
    protected contentDom: HTMLElement;
    protected containerDom: HTMLElement;
    protected params: ItemDomParams;
    protected canSelected: boolean;
    constructor(params: ItemDomParams);
    handleClick: (e: MouseEvent) => void;
    setCanSelect(canSelect: boolean): void;
    highlight(): void;
    unHighlight(): void;
    appendTo(container: Element): this;
    remove(): void;
    show(): void;
    hide(): void;
    tempHide(): void;
    tempShow(): void;
    /**
     * @description: camera update 的时候，更新dom的位置
     */
    updateDomPosition(five: Five): void;
}
