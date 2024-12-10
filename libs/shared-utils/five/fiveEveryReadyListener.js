import { throttle as a } from "../throttle.js";
function i(e, n) {
  let r = !1;
  const t = a(() => {
    r || (r = !0, e.ready().then(() => {
      n(), r = !1;
    }));
  }, 150);
  return e.on("camera.update", t), () => {
    e.off("camera.update", t);
  };
}
export {
  i as fiveEveryReadyListener
};
