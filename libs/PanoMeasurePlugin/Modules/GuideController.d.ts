import type MeasureController from '../Controller';
import type { PartialObjectDeep } from '../../typings/typings';
import type { PointSelectorMode } from '../typings/data';
export interface MeasureTip {
    line: {
        start: string;
    };
    area: {
        start: string;
        close: string;
    };
}
export interface GuideControllerParams {
    container?: Element;
    i18n?: (key: string) => string;
    tips?: PartialObjectDeep<MeasureTip>;
    tipStyle?: Partial<CSSStyleDeclaration>;
    pointSelectorMode?: PointSelectorMode;
}
export declare class GuideController {
    private tipSvelteDom?;
    constructor(measureController: MeasureController, params: GuideControllerParams);
    dispose(): void;
    show(): this;
    hide(): this;
}
