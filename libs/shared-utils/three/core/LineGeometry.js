import { LineGeometry as i } from "@realsee/five/line";
import * as t from "three";
class a extends i {
  constructor(...e) {
    super(...e), this.setAttribute("instanceStart", new t.BufferAttribute(new Float32Array(), 3)), this.setAttribute("instanceEnd", new t.BufferAttribute(new Float32Array(), 3));
  }
  fromEdgesGeometry(e) {
    if (e.attributes.position.array.length < 6)
      return this.setAttribute("position", new t.BufferAttribute(new Float32Array(), 3)), this.setAttribute("instanceStart", new t.BufferAttribute(new Float32Array(), 3)), this.setAttribute("instanceEnd", new t.BufferAttribute(new Float32Array(), 3)), this;
    if (e instanceof t.EdgesGeometry) {
      const r = new t.InstancedInterleavedBuffer(e.attributes.position.array, 6, 1);
      this.setPositions(e.attributes.position.array), this.setAttribute("instanceStart", new t.InterleavedBufferAttribute(r, 3, 0)), this.setAttribute("instanceEnd", new t.InterleavedBufferAttribute(r, 3, 3));
    } else
      super.fromEdgesGeometry(e);
    return this;
  }
  toJSON() {
    return {
      type: "FiveLineGeometry",
      attributes: this.attributes
    };
  }
}
export {
  a as LineGeometry
};
