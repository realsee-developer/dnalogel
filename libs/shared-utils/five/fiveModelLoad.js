var r = (o, e, d) => new Promise((a, t) => {
  var c = (n) => {
    try {
      i(d.next(n));
    } catch (l) {
      t(l);
    }
  }, f = (n) => {
    try {
      i(d.throw(n));
    } catch (l) {
      t(l);
    }
  }, i = (n) => n.done ? a(n.value) : Promise.resolve(n.value).then(c, f);
  i((d = d.apply(o, e)).next());
});
import { getFiveModel as m } from "./getFiveModel.js";
function M(o) {
  return r(this, null, function* () {
    return new Promise((e) => {
      if (s(o))
        e();
      else {
        const d = (a) => {
          const t = m(o);
          a === t && (o.off("modelLoaded", d), e());
        };
        o.on("modelLoaded", d);
      }
    });
  });
}
function s(o) {
  var e;
  return (e = m(o)) == null ? void 0 : e.loaded;
}
export {
  s as fiveModelIsLoaded,
  M as waitFiveModelLoaded
};
