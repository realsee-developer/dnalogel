import { createDispatcher as o } from "../../utils/event.js";
import { addHoverInEventListener as a, removeHoverInEventListener as i, removeHoverOutEventListener as n, addHoverOutEventListener as u } from "./event.js";
function h(e) {
  const t = o(e);
  function v() {
    u(e, r), t("hovered", { value: !0 });
  }
  function r() {
    t("hovered", { value: !1 }), n(e, r);
  }
  return a(e, v), {
    destroy() {
      i(e, v), n(e, r);
    }
  };
}
export {
  h as hoverable
};
