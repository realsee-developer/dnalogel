import { Line as r, THREE_Line2 as i, LineMaterial as s } from "@realsee/five/line";
class o extends r {
  constructor(...e) {
    super(...e);
  }
  toJSON() {
    return {
      type: "FiveLine",
      points: this.points.toJSON()
    };
  }
}
class a extends i {
  constructor(...e) {
    super(...e);
  }
  toJSON() {
    return {
      type: "Five_THREE_Line2",
      geometryAttributes: this.geometry.attributes
    };
  }
}
class c extends s {
  constructor(...e) {
    super(...e);
  }
  toJSON() {
    return {
      type: "FiveLineMaterial",
      color: this.color
    };
  }
}
export {
  o as FiveLine,
  c as LineMaterial,
  a as THREE_Line2
};
