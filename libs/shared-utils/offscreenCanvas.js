function c() {
  const e = typeof OffscreenCanvas != "undefined", a = e && new OffscreenCanvas(1, 1).getContext("webgl") !== null;
  e && !a && Object.assign(window, {
    OffscreenCanvas: function(s, t) {
      const n = document.createElement("canvas");
      return n.width = s, n.height = t, n;
    }
  });
}
export {
  c as autoFixOffscreenCanvas
};
