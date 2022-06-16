/**
 * 展示策略
 * */

import { ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE } from "../typings";

export const getStrokeLength = (itemSpaceHeight: number, type: ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE) => {
    switch (type) {
        case ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE.SMALL:
            return Math.ceil(-27.78 * itemSpaceHeight + 85)
        case ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE.MIDLLE:
            return Math.ceil(-38.9 * itemSpaceHeight + 130)
        case ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE.LARGE:
            return Math.ceil(-44.44 * itemSpaceHeight + 140)
        case ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE.EXTRA_LARGE:
            return Math.ceil(-92.59 * itemSpaceHeight + 300)
    }
}
