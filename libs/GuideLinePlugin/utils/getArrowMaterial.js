import * as e from "three";
function n(a) {
  const r = new e.TextureLoader().load(a.textureUrl);
  return r.wrapS = r.wrapT = e.RepeatWrapping, r.encoding = e.sRGBEncoding, r.minFilter = e.LinearFilter, new e.MeshBasicMaterial({
    color: 16777215,
    map: r,
    transparent: !0,
    opacity: 0.8
  });
}
export {
  n as getArrowMaterial
};
