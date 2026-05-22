function m() {
}
const i = () => Promise.resolve(), c = {
  __queue: Promise.resolve()
};
function _(e = i) {
  c.__queue = c.__queue.then(e).catch(i);
}
function l(e, t, n) {
  const o = e.x, r = e.y, s = Math.floor(o / t * 1e4) / 1e4, u = Math.floor(r / n * 1e4) / 1e4;
  return { x: s, y: u };
}
function w(e, t, n) {
  const { x: o, y: r } = e, s = o * t, u = r * n;
  return { x: s, y: u };
}
function y(e) {
  if (e.length < 2)
    return {};
  const t = e.slice(-2), n = t[0], o = {
    x: (t[0].x + t[1].x) / 2,
    y: (t[0].y + t[1].y) / 2
  };
  return { control: n, end: o };
}
function q(e, t, n = m) {
  new Promise((o) => {
    setTimeout(() => {
      n(), o(!0);
    }, t * e);
  });
}
const f = window, a = window.requestAnimationFrame || f.webkitRequestAnimationFrame || ((e) => setTimeout(e, 16));
function x(e, t = 0) {
  t <= 0 ? a(e) : a(() => x(e, t - 1));
}
export {
  q as execInterval,
  y as getQuadraticCurvePoint,
  x as nextFrame,
  m as noop,
  _ as queue,
  l as transformCoords,
  w as unTransformCoords
};
