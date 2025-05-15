import type { Five } from '@realsee/five';
import type { PanoRulerProPluginDatas, PanoRulerProPluginParameterType, PanoRulerProPluginState } from './typings';
export default class Controller {
    private five;
    private container;
    private panoRulerProData;
    private rulerItems;
    state: PanoRulerProPluginState;
    constructor(five: Five, params: PanoRulerProPluginParameterType);
    load(serverData: PanoRulerProPluginDatas): Promise<void>;
    enable(): boolean;
    disable(): boolean;
    private render;
    private dispose;
}
