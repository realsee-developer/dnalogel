import { tap as r } from "./tap.js";
function e(i, o) {
  return r({}, (t) => {
    for (const n in i)
      o.indexOf(n) === -1 && (t[n] = i[n]);
  });
}
export {
  e as omit
};
