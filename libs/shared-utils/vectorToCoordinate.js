import { formatRad as a } from "./formatRad.js";
function n(t) {
  return {
    longitude: a(-Math.atan2(t.x, -t.z)),
    latitude: -Math.asin(t.y / 1)
  };
}
export {
  n as vectorToCoordinates
};
