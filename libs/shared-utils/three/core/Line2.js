import { THREE_Line2 as r } from "@realsee/five/line";
class o extends r {
  constructor(e, t) {
    super(e, t);
  }
  toJSON() {
    return {
      type: "Five_THREE_Line2",
      geometryAttributes: this.geometry.attributes
    };
  }
}
export {
  o as THREE_Line2
};
