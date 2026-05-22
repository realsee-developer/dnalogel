var i = (n, e, t) => new Promise((d, c) => {
  var l = (r) => {
    try {
      o(t.next(r));
    } catch (s) {
      c(s);
    }
  }, h = (r) => {
    try {
      o(t.throw(r));
    } catch (s) {
      c(s);
    }
  }, o = (r) => r.done ? d(r.value) : Promise.resolve(r.value).then(l, h);
  o((t = t.apply(n, e)).next());
});
import * as a from "three";
const m = new a.TextureLoader();
function p(n) {
  return i(this, null, function* () {
    return new Promise((e, t) => {
      m.load(n, e, void 0, t);
    }).then((e) => (e.encoding = a.sRGBEncoding, e.minFilter = a.NearestFilter, e.magFilter = a.NearestFilter, e));
  });
}
function u(n) {
  return i(this, null, function* () {
    return p(n).then((e) => {
      const t = n.startsWith("data:") ? n.includes("png") : new URL(n, location.href).pathname.toLowerCase().endsWith(".png");
      return { texture: e, transparent: t };
    });
  });
}
export {
  u as loadPicture,
  p as loadTexture
};
