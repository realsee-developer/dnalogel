import { Tween as m, Easing as s } from "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
function c(t, r, a, i = s.Linear.None) {
  const e = new m(t).to(r, a).easing(i).start();
  function n(o) {
    e.update(o) && requestAnimationFrame(n);
  }
  return requestAnimationFrame(n), e;
}
export {
  c as tween
};
