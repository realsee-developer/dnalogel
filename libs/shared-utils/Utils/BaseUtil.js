var c = Object.defineProperty;
var o = (t, s, e) => s in t ? c(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var i = (t, s, e) => (o(t, typeof s != "symbol" ? s + "" : s, e), e);
class a {
  constructor(s) {
    i(this, "five");
    this.five = s;
  }
}
export {
  a as BaseUtil
};
