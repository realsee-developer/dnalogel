var c = (o, e, r) => new Promise((l, n) => {
  var i = (t) => {
    try {
      s(r.next(t));
    } catch (p) {
      n(p);
    }
  }, m = (t) => {
    try {
      s(r.throw(t));
    } catch (p) {
      n(p);
    }
  }, s = (t) => t.done ? l(t.value) : Promise.resolve(t.value).then(i, m);
  s((r = r.apply(o, e)).next());
});
import { FLOORPLAN_EXTRA_OBJECT_IMAGE as f } from "../Assets/floorplanExtraObject.js";
import { getFloorIndexFromModelPosition as u, modelPosition2FloorplanPosition as a, floorplanPosition2ImagePosition as _ } from "./formatPosition.js";
function g(o) {
  return c(this, null, function* () {
    const e = new Headers({ "Content-Type": "text/plain" }), r = function(n) {
      return c(this, null, function* () {
        const i = {
          index: n.index,
          url: n.url,
          svgUrl: n.svg_url
        };
        if (n.svg_url) {
          const m = yield fetch(n.svg_url, { headers: e }).then((s) => s.text());
          i.svgContent = m;
        }
        return i;
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
    rules: o.rules
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
    const i = n.position, m = n.icon ? n.icon : {
      url: f,
      width: 45,
      height: 48
    }, s = u(i, e), t = a(i, r), p = _(t, r);
    return { floorIndex: s, icon: m, id: n.id, position: t, positionInImage: p };
  });
}
export {
  P as formatData,
  y as formatExtraObjects
};
