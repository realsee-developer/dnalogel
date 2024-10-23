import { add_1 as d } from "../gl-vec2/add.js";
import { set_1 as v } from "../gl-vec2/set.js";
import { normalize_1 as n } from "../gl-vec2/normalize.js";
import { subtract_1 as u } from "../gl-vec2/subtract.js";
import { dot_1 as l } from "../gl-vec2/dot.js";
var i = {}, _ = d, t = v, c = n, s = u, M = l, p = [0, 0];
i.computeMiter = function(r, o, m, e, f) {
  return _(r, m, e), c(r, r), t(o, -r[1], r[0]), t(p, -m[1], m[0]), f / M(o, p);
};
i.normal = function(r, o) {
  return t(r, -o[1], o[0]), r;
};
i.direction = function(r, o, m) {
  return s(r, o, m), c(r, r), r;
};
export {
  i as polylineMiterUtil
};
