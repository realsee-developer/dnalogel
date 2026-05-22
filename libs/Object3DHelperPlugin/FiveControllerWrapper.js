var C = Object.defineProperty;
var G = (n, e, t) => e in n ? C(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var r = (n, e, t) => (G(n, typeof e != "symbol" ? e + "" : e, t), t);
class W {
  // eslint-disable-next-line max-params
  constructor(e, t, a, h, p, u, d, c, f) {
    r(this, "helperController");
    r(this, "five");
    r(this, "onFiveWantsTapGesture", (e) => {
      if (!this.helperController)
        return;
      if (this.helperController.preventTapDefaultEvent)
        return !1;
      const t = this.helperController.onWantsTapGesture(e);
      return this.five.needsRender = !0, t;
    });
    r(this, "onFiveWantsGesture", (...e) => {
      if (!this.helperController)
        return;
      const t = this.helperController.onWantsGesture(...e);
      return this.five.needsRender = !0, t;
    });
    r(this, "onFiveIntersectionOnModelUpdate", (...e) => {
      this.helperController && this.helperController.onIntersectionOnModelUpdate(...e);
    });
    const { camera: s, model: o, scene: i } = e, l = e.getElement();
    if (this.five = e, !s || !o || !l || !i)
      return;
    const v = () => {
      e.needsRender = !0;
    };
    this.helperController = new a(
      {
        camera: s,
        model: o,
        domEvents: t,
        originObject3D: h,
        helperObject3D: p,
        container: l,
        scene: i,
        onRender: v,
        sharedHooks: d,
        sharedInternalHooks: c,
        otherControllers: f
      },
      u
    ), e.on("wantsTapGesture", this.onFiveWantsTapGesture), e.on("wantsGesture", this.onFiveWantsGesture), e.on("intersectionOnModelUpdate", this.onFiveIntersectionOnModelUpdate);
  }
  dispose() {
    var e;
    this.five.off("wantsTapGesture", this.onFiveWantsTapGesture), this.five.off("wantsGesture", this.onFiveWantsGesture), this.five.off("intersectionOnModelUpdate", this.onFiveIntersectionOnModelUpdate), (e = this.helperController) == null || e.dispose();
  }
}
export {
  W as ControllerWrapper,
  W as FiveControllerWrapper
};
