import { ITEM_LABEL_PLUGIN_DISPLAY_STRATEGY_TYPE as L } from "../typings.js";
const c = (r, t) => {
  switch (t) {
    case L.SMALL:
      return Math.ceil(-27.78 * r + 85);
    case L.MIDLLE:
      return Math.ceil(-38.9 * r + 130);
    case L.LARGE:
      return Math.ceil(-44.44 * r + 140);
    case L.EXTRA_LARGE:
      return Math.ceil(-92.59 * r + 300);
  }
};
export {
  c as getStrokeLength
};
