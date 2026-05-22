var c = (o, e, r) => new Promise((l, n) => {
  var t = (i) => {
    try {
      s(r.next(i));
    } catch (p) {
      n(p);
    }
  }, m = (i) => {
    try {
      s(r.throw(i));
    } catch (p) {
      n(p);
    }
  }, s = (i) => i.done ? l(i.value) : Promise.resolve(i.value).then(t, m);
  s((r = r.apply(o, e)).next());
});
import { FLOORPLAN_EXTRA_OBJECT_IMAGE as u } from "../Assets/floorplanExtraObject.js";
import { getFloorIndexFromModelPosition as f, modelPosition2FloorplanPosition as a, floorplanPosition2ImagePosition as _ } from "./formatPosition.js";
function g(o) {
  return c(this, null, function* () {
    const e = new Headers({ "Content-Type": "text/plain" }), r = function(n) {
      return c(this, null, function* () {
        const t = {
          index: n.index,
          url: n.url,
          svgUrl: n.svg_url
        };
        if (n.svg_url) {
          const m = yield fetch(n.svg_url, { headers: e }).then((s) => s.text());
          t.svgContent = m;
        }
        return t;
      });
    };
    return yield Promise.all(o.map(r));
  });
}
function I(o) {
  const e = {
    id: o.id,
    size: o.size,
    name: o.name,
    customizedName: o.customizedName || "",
    path: o.path,
    roomType: o.room_type,
    floorType: o.floor_type,
    roomLabel: {
      position: o.room_label.position,
      positionInImage: o.room_label.position_in_image
    },
    observerIndexs: o.observer_indexs
  };
  return o.dimension && Object.assign(e, { dimension: o.dimension }), e;
}
function x(o) {
  return {
    floorName: o.floor_name,
    floorIndex: o.floor_index,
    rooms: o.rooms.map(I),
    rules: o.rules,
    is_has_wall: o.is_has_wall
  };
}
function d(o) {
  return {
    index: o.index,
    floorIndex: o.floor_index,
    position: o.position,
    positionInImage: o.position_in_image
  };
}
function v(o) {
  return {
    rad: o.rad,
    position: o.position,
    positionInImage: o.position_in_image,
    northRad: o.north_rad,
    roomId: o.room_id,
    floorIndex: o.floor_index
  };
}
function P(o) {
  return c(this, null, function* () {
    const e = yield g(o.outlines), r = o.computed_data.bounding, l = o.computed_data.floor_datas.map(x), n = o.computed_data.entrance ? v(o.computed_data.entrance) : null;
    return {
      outlines: e,
      entrance: n,
      bounding: r,
      floorDatas: l,
      observers: o.computed_data.observers.map(d)
    };
  });
}
function y(o, e, r) {
  return o.map((n) => {
    const t = n.position, m = n.icon ? n.icon : {
      url: u,
      width: 45,
      height: 48
    }, s = f(t, e), i = a(t, r), p = _(i, r);
    return { floorIndex: s, icon: m, id: n.id, position: i, positionInImage: p };
  });
}
export {
  P as formatData,
  y as formatExtraObjects
};
