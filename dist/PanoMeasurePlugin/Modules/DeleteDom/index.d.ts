import type Line from '../../Model/line';
import type { Five } from '@realsee/five';
export default class DeleteDom {
    visible: boolean;
    private five;
    private lines;
    private points;
    private onClick;
    private cancel;
    private content;
    private container;
    private masking;
    private target;
    constructor(five: Five, opts?: {
        onClick?: (e: MouseEvent, target: any) => void;
        cancel?: (target: any) => void;
        i18n?: (key: string) => string;
    });
    dispose(): void;
    appendTo(element: Element): this;
    setLines(lines: Line[]): this;
    setTarget(target: any): this;
    updatePosition(left?: string, top?: string): this;
    hide(): this;
    show(): this;
    private clickHandler;
    private cancelHandler;
    private hover;
    private unHover;
}
