import type { Five } from '@realsee/five';
import type GuideLinePlugin from './Controller';
import type * as PluginType from './typing';
import { GuideLineModeItem } from './GuideLineModeItem';
import type { CruisePluginTypes } from '../CruisePlugin';
import { Subscribe } from '../shared-utils/Subscribe';
/** 路线引导实例。
 * - 路线包括两个部分：全景路线和模型路线。
 * - Five 切换模态时，路线会自动切换。
 * - GuideLineItem P
 */
declare class GuideLineItem {
    readonly id: string | number;
    readonly renderID?: string;
    readonly isGuideLine = true;
    readonly panoramaItem: GuideLineModeItem;
    readonly modelItem: GuideLineModeItem;
    readonly hooks: Subscribe<PluginType.GuideLineItemEventMap>;
    get visible(): boolean;
    private _visible;
    private plugin;
    private five;
    constructor(options: {
        five: Five;
        id: string | number;
        plugin: GuideLinePlugin;
    });
    setData(data: PluginType.GuideLineItem): void;
    setDataByMode(mode: PluginType.GuideLineModeItemMode, data: PluginType.GuideLineItem): void;
    show(): void;
    hide(): void;
    dispose(): void;
    walk(options?: CruisePluginTypes.MoveAction): Promise<void>;
    private logError;
}
export { GuideLineItem };
