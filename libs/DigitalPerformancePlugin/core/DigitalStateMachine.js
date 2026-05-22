import * as n from "three";
class T {
  constructor() {
  }
  getStateByTime(r, t, e) {
    switch (e) {
      case "model":
        return this.getModelStateByTime(r, t);
      case "camera":
        return this.getCameraStateByTime(r, t);
      case "subtitle":
        return this.getSubtitleStateByTime(r, t);
      case "data":
        return this.getDataStateByTime(r, t);
      case "item":
        return this.getItemStateByTime(r, t);
      case "effect":
        return this.getEffectStateByTime(r, t);
      default:
        throw new Error(`Unsupported type: ${e}`);
    }
  }
  getDataStateByTime(r, t) {
    const e = this.getKeyframeIndexByTime(r, t);
    if (e === t.length - 1)
      return {
        currentFrameData: t[e].data,
        nextFrameData: null,
        progress: 0
      };
    {
      const a = t[e].data, o = t[e + 1].data, i = t[e + 1].timeStamp - t[e].timeStamp, l = (r - t[e].timeStamp) / i;
      return {
        currentFrameData: a,
        nextFrameData: o,
        progress: l
      };
    }
  }
  getEffectStateByTime(r, t) {
    const e = this.getKeyframeIndexByTime(r, t);
    return {
      image: t[e].image,
      visible: t[e].visible
    };
  }
  getItemStateByTime(r, t) {
    const e = this.getKeyframeIndexByTime(r, t);
    return {
      timeStamp: t[e].timeStamp,
      visible: t[e].visible
    };
  }
  getCameraStateByTime(r, t) {
    const e = this.getKeyframeIndexByTime(r, t);
    return {
      matrix: t[e].matrix,
      fov: t[e].fov,
      transitionType: "linear"
    };
  }
  getSubtitleStateByTime(r, t) {
    const e = this.getKeyframeIndexByTime(r, t);
    return {
      title: t[e].title,
      content: t[e].content,
      audio: t[e].audio,
      image: t[e].image,
      keyframeIndex: e
    };
  }
  getModelStateByTime(r, t) {
    var l;
    const e = this.getKeyframeIndexByTime(r, t);
    if (e === t.length - 1)
      return {
        translation: new n.Vector3().fromArray(t[e].position),
        quaternion: new n.Quaternion().fromArray(t[e].quaternion),
        scale: new n.Vector3().fromArray(t[e].scale),
        keyframeIndex: e,
        animation: t[e].animation,
        visible: t[e].visible,
        isFinal: !0
      };
    const a = t[e], o = t[e + 1], i = r - a.timeStamp;
    if (((l = o.interpolationType) != null ? l : "linear") === "parabola") {
      const u = o.timeStamp - a.timeStamp, s = Math.min(i / u, 1), p = S(
        new n.Vector3().fromArray(a.position),
        new n.Vector3().fromArray(o.position)
      )(s), y = s, w = new n.Quaternion().copy(
        new n.Quaternion().fromArray(a.quaternion).slerp(new n.Quaternion().fromArray(o.quaternion), y)
      ), x = new n.Vector3().lerpVectors(
        new n.Vector3().fromArray(a.scale),
        new n.Vector3().fromArray(o.scale),
        s
      );
      return {
        translation: p,
        quaternion: w,
        scale: x,
        keyframeIndex: e,
        animation: a.animation,
        visible: a.visible,
        isFinal: !1
      };
    } else {
      const u = o.timeStamp - a.timeStamp, s = Math.min(i / u, 1), d = new n.Vector3().lerpVectors(
        new n.Vector3().fromArray(a.position),
        new n.Vector3().fromArray(o.position),
        s
      ), p = s, y = new n.Quaternion().copy(
        new n.Quaternion().fromArray(a.quaternion).slerp(new n.Quaternion().fromArray(o.quaternion), p)
      ), w = new n.Vector3().lerpVectors(
        new n.Vector3().fromArray(a.scale),
        new n.Vector3().fromArray(o.scale),
        s
      );
      return {
        translation: d,
        quaternion: y,
        scale: w,
        keyframeIndex: e,
        animation: a.animation,
        visible: a.visible,
        isFinal: !1
      };
    }
  }
  getKeyframeIndexByTime(r, t) {
    r < 0 && (r = 0);
    let e = 0, a = t.length - 1, o = -1;
    for (; e <= a; ) {
      const i = Math.floor((e + a) / 2);
      if (t[i].timeStamp === r) {
        o = i;
        break;
      } else
        t[i].timeStamp < r ? e = i + 1 : a = i - 1;
    }
    return o !== -1 ? o : a;
  }
}
function S(c, r) {
  return (e) => {
    const a = Math.sqrt(Math.pow(r.x - c.x, 2) + Math.pow(r.z - c.z, 2)), o = e * a, i = new n.Vector2(c.x, c.z).add(
      new n.Vector2(r.x, r.z).sub(new n.Vector2(c.x, c.z)).normalize().multiplyScalar(o)
    ), m = (r.y - c.y) / (Math.pow(r.x - c.x, 2) + Math.pow(r.z - c.z, 2)) * Math.pow(o, 2) + c.y;
    return new n.Vector3(i.x, m, i.y);
  };
}
export {
  T as DigitalStateMachine
};
