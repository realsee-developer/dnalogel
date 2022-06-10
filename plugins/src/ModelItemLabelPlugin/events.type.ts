import type { SubscribeEventMap } from '@realsee/five'
import type { ItemLabel } from "./typings";

export interface ItemLabelEvent extends SubscribeEventMap {
  /**
   * 点击标签
   */
  onLabelClick: (itemLabel: ItemLabel) => void
}


export type PluginEvent = ItemLabelEvent
