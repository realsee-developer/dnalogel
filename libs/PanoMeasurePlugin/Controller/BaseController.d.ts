import { type Group } from 'three';
import type { Model } from '../Model';
import type { Config } from '../typings';
import type { PanoMeasurePluginEvent } from '../typings/event.type';
import type { UserDistanceItem } from '../utils/dom/distanceItem';
import type { Five, Intersection, IntersectMeshInterface } from '@realsee/five';
import type { Subscribe } from '../../shared-utils/Subscribe';
import type { OpenParameter, EditParameter, MeasureType } from '../typings/data';
import Line from '../Model/line';
import type { Magnifier } from '../../shared-utils';
import type { WorkUtil } from '../../shared-utils/Utils/WorkUtil';
import type { PointSelectorConfig } from '../../shared-utils/three/PointSelector';
export interface ControllerParams {
    five: Five;
    group: Group;
    model: Model;
    config: Config;
    mouseGroup: Group;
    container: Element;
    workUtil: WorkUtil;
    pointSelectorConfig?: PointSelectorConfig;
    /** @deprecated Use pointSelectorConfig.helper.magnifier instead */
    magnifier: Magnifier;
    /** @deprecated Use pointSelectorConfig.helper.magnifierParams instead */
    magnifierParams: ConstructorParameters<typeof Magnifier>[1];
    openParams: OpenParameter;
    editParams: EditParameter;
    getMeasureType: () => MeasureType;
    hook: Subscribe<PanoMeasurePluginEvent>;
    userDistanceItemCreator?: () => UserDistanceItem;
}
export default class BaseController {
    model: Model;
    protected five: Five;
    protected group: Group;
    protected config: Config;
    protected dashed: Line;
    protected perpendicularDashed: Line;
    protected disposed: boolean;
    protected isMobile: boolean;
    protected editParams: EditParameter;
    protected magnifierParams: ConstructorParameters<typeof Magnifier>[1];
    protected mouseGroup: Group;
    protected container: Element;
    protected hook: ControllerParams['hook'];
    protected magnifier: ControllerParams['magnifier'];
    protected userDistanceItemCreator: ControllerParams['userDistanceItemCreator'];
    protected pointSelectorConfig: PointSelectorConfig;
    protected workUtil: WorkUtil;
    protected get currentMeasureType(): MeasureType;
    private getMeasureType;
    constructor(params: ControllerParams);
    updateDistanceUI: () => void;
    updateAreaUI: () => void;
    protected removeLine(line: Line): void;
    protected updateMouseGroup(intersection: Intersection, mesh?: IntersectMeshInterface): Group;
    protected dispose(): void;
}
