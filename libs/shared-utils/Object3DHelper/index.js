var u = Object.defineProperty;
var f = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var d = (i, e, s) => e in i ? u(i, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[e] = s, a = (i, e) => {
  for (var s in e || (e = {}))
    S.call(e, s) && d(i, s, e[s]);
  if (f)
    for (var s of f(e))
      E.call(e, s) && d(i, s, e[s]);
  return i;
};
var r = (i, e, s) => (d(i, typeof e != "symbol" ? e + "" : e, s), s);
var b = (i, e, s) => new Promise((t, l) => {
  var v = (o) => {
    try {
      n(s.next(o));
    } catch (h) {
      l(h);
    }
  }, p = (o) => {
    try {
      n(s.throw(o));
    } catch (h) {
      l(h);
    }
  }, n = (o) => o.done ? t(o.value) : Promise.resolve(o.value).then(v, p);
  n((s = s.apply(i, e)).next());
});
import { Subscribe as C } from "../Subscribe.js";
const D = "v1.0.1", y = "Object3DHelper", c = `${y}@${D}`, k = () => {
  console.error(`${c} is disposed`);
}, I = () => {
  console.warn(`${c} is disabled`);
}, m = () => {
  console.error(`${c} is disabled`);
};
class L {
  constructor(e) {
    r(this, "controllers", {});
    r(this, "state", {
      visible: !0,
      enabled: !0,
      disposed: !1
    });
    r(this, "hooks", new C());
    r(this, "eventListener", {});
    e && this.addControllers(e), this.setState(this.state);
  }
  /**
   * @description Show guide line
   */
  show(e) {
    return b(this, null, function* () {
      this.setState({ visible: !0 }, e);
    });
  }
  /**
   * @description Hide guide line
   */
  hide(e) {
    return b(this, null, function* () {
      this.setState({ visible: !1 }, e);
    });
  }
  /**
   * @description Enable
   */
  enable(e) {
    this.setState({ enabled: !0 }, e);
  }
  /**
   * @description Disable
   */
  disable(e) {
    this.setState({ enabled: !1 }, e);
  }
  /**
   * @description Dispose
   */
  dispose() {
    this.setState({ disposed: !0 });
  }
  setState(e, s) {
    if (this.state.disposed)
      return k();
    if (!this.state.enabled && e.enabled !== !0 && e.disposed !== !0)
      return m();
    const t = a({}, this.state);
    this.state = a(a({}, this.state), e), e.disposed !== void 0 && e.disposed !== t.disposed && e.disposed && this.handleDispose(), e.visible !== void 0 && this.handleVisible(e.visible), e.enabled !== void 0 && this.handleEnable(e.enabled), this.hooks.emit("stateChange", { state: this.state, prevState: t });
  }
  addControllers(e) {
    this.controllers = a(a({}, this.controllers), e), this.setState(this.state);
  }
  /**
   * @description 初始化 helpers 的位置
   */
  initialHelperMatrix() {
    this.everyControllerDo((e) => {
      e.initialHelperPosition(), e.initialHelperQuaternion();
    });
  }
  getCurrentState() {
    return this.state;
  }
  handleEnable(e, s = !0) {
    e ? (this.everyControllerDo((t) => {
      t.enable();
    }), this.hooks.emit("enable", { userAction: s })) : (this.everyControllerDo((t) => {
      t.disable();
    }), this.hooks.emit("disable", { userAction: s })), this.state.enabled = e;
  }
  handleVisible(e, s = !0) {
    e ? (this.everyControllerDo((t) => {
      t.show();
    }), this.actionIfStateIsEnabled(() => this.hooks.emit("show", { userAction: s }))) : (this.everyControllerDo((t) => {
      t.hide();
    }), this.actionIfStateIsEnabled(() => this.hooks.emit("hide", { userAction: s }))), this.state.visible = e;
  }
  everyControllerDo(e) {
    Object.values(this.controllers).forEach((s) => {
      s && e(s);
    });
  }
  handleDispose() {
    var e, s;
    Object.values(this.controllers).forEach((t) => {
      t == null || t.dispose();
    });
    for (const t in this.controllers) {
      if (!t)
        continue;
      const l = t;
      (s = (e = this.eventListener)[l]) == null || s.call(e);
    }
  }
  actionIfStateIsEnabled(e, s) {
    if (this.state.enabled)
      return e();
    s != null && s.warnLog && I();
  }
}
export {
  L as Object3DHelper
};
