import { DIRECTION as e } from "../typings.js";
function f(r) {
  if (r.length === 0)
    return [];
  if (Array.isArray(r[0]))
    return r;
  let O = [];
  return r.forEach((T) => {
    const n = [
      T[e.TOP_LEFT],
      T[e.BOTTOM_LEFT],
      T[e.BOTTOM_RIGHT],
      T[e.TOP_RIGHT]
    ];
    O.push(n);
  }), O;
}
export {
  f as parseModelTVVideoPoints
};
