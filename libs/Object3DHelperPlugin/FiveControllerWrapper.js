var v = Object.defineProperty;
var C = (r, e, t) => e in r ? v(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var n = (r, e, t) => (C(r, typeof e != "symbol" ? e + "" : e, t), t);
class F {
  // eslint-disable-next-line max-params
  constructor(e, t, l, h, p, d, c) {
    n(this, "helperController");
    n(this, "five");
    n(this, "onFiveWantsUpdateCameraDistance", () => {
      var e, t;
      this.helperController && ((t = (e = this.helperController).onWantsUpdateCameraDistance) == null || t.call(e));
    });
    n(this, "onFiveWantsTapGesture", (e) => {
      if (!this.helperController)
        return;
      if (this.helperController.preventTapDefaultEvent)
        return !1;
      const t = this.helperController.onWantsTapGesture(e);
      return this.five.needsRender = !0, t;
    });
    n(this, "onFiveWantsGesture", (...e) => {
      if (!this.helperController)
        return;
      const t = this.helperController.onWantsGesture(...e);
      return this.five.needsRender = !0, t;
    });
    n(this, "onFiveIntersectionOnModelUpdate", (...e) => {
      this.helperController && this.helperController.onIntersectionOnModelUpdate(...e);
    });
    const { camera: s, model: o, scene: a } = e, i = e.getElement();
    if (this.five = e, !s || !o || !i || !a)
      return;
    const u = () => {
      e.needsRender = !0;
    };
    this.helperController = new t(
      {
        camera: s,
        model: o,
        originObject3D: l,
        helperObject3D: h,
        container: i,
        scene: a,
        onRender: u,
        sharedHooks: d,
        sharedInternalHooks: c
      },
      p
    ), e.on("wantsTapGesture", this.onFiveWantsTapGesture), e.on("wantsGesture", this.onFiveWantsGesture), e.on("intersectionOnModelUpdate", this.onFiveIntersectionOnModelUpdate), e.on("cameraFovUpdate", this.onFiveWantsUpdateCameraDistance), e.on("cameraPositionUpdate", this.onFiveWantsUpdateCameraDistance);
  }
  dispose() {
    var e;
    this.five.off("wantsTapGesture", this.onFiveWantsTapGesture), this.five.off("wantsGesture", this.onFiveWantsGesture), this.five.off("intersectionOnModelUpdate", this.onFiveIntersectionOnModelUpdate), this.five.off("cameraFovUpdate", this.onFiveWantsUpdateCameraDistance), this.five.off("cameraPositionUpdate", this.onFiveWantsUpdateCameraDistance), (e = this.helperController) == null || e.dispose();
  }
}
export {
  F as ControllerWrapper,
  F as FiveControllerWrapper
};
