import { Line as e } from "@realsee/five/line";
class n extends e {
  constructor(...t) {
    super(...t);
  }
  toJSON() {
    return {
      type: "FiveLine",
      points: this.points.toJSON()
    };
  }
}
export {
  n as FiveLine
};
