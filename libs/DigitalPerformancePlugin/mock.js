import * as _ from "three";
function J(t) {
  const m = [t[12], t[13], t[14]], r = t[0], o = t[4], l = t[8], p = t[1], x = t[5], h = t[9], e = t[2], u = t[6], z = t[10], w = Math.sqrt(r * r + p * p + e * e), q = Math.sqrt(o * o + x * x + u * u), F = Math.sqrt(l * l + h * h + z * z), E = [w, q, F], N = [r / w, o / q, l / F, p / w, x / q, h / F, e / w, u / q, z / F], S = it(N);
  return { position: m, quaternion: S, scale: E };
}
function it(t) {
  const m = t[0] + t[4] + t[8];
  let r, o = [0, 0, 0, 0];
  return m > 0 ? (r = Math.sqrt(m + 1) * 2, o[3] = 0.25 * r, o[0] = (t[7] - t[5]) / r, o[1] = (t[2] - t[6]) / r, o[2] = (t[3] - t[1]) / r) : t[0] > t[4] && t[0] > t[8] ? (r = Math.sqrt(1 + t[0] - t[4] - t[8]) * 2, o[3] = (t[7] - t[5]) / r, o[0] = 0.25 * r, o[1] = (t[1] + t[3]) / r, o[2] = (t[2] + t[6]) / r) : t[4] > t[8] ? (r = Math.sqrt(1 + t[4] - t[0] - t[8]) * 2, o[3] = (t[2] - t[6]) / r, o[0] = (t[1] + t[3]) / r, o[1] = 0.25 * r, o[2] = (t[5] + t[7]) / r) : (r = Math.sqrt(1 + t[8] - t[0] - t[4]) * 2, o[3] = (t[3] - t[1]) / r, o[0] = (t[2] + t[6]) / r, o[1] = (t[5] + t[7]) / r, o[2] = 0.25 * r), o;
}
function ot({ x: t, y: m, z: r, order: o = "XYZ" }) {
  const l = Math.cos(t / 2), p = Math.cos(m / 2), x = Math.cos(r / 2), h = Math.sin(t / 2), e = Math.sin(m / 2), u = Math.sin(r / 2);
  let z, w, q, F;
  switch (o) {
    case "XYZ":
      z = h * p * x + l * e * u, w = l * e * x - h * p * u, q = l * p * u + h * e * x, F = l * p * x - h * e * u;
      break;
    default:
      z = h * p * x + l * e * u, w = l * e * x - h * p * u, q = l * p * u + h * e * x, F = l * p * x - h * e * u;
  }
  return [z, w, q, F];
}
function W(t) {
  if (typeof t == "string" && !isNaN(Number(t)))
    return [0, -(Number(t) * Math.PI) / 180, 0];
  if (Array.isArray(t) && t.length === 3)
    return [t[0], -t[1], t[2]];
}
function D(t, m) {
  if (!m)
    return t;
  const r = ot({ x: m[0], y: m[1], z: m[2] }), [o, l, p, x] = r, [h, e, u, z] = t;
  return [
    x * h + o * z + l * u - p * e,
    x * e - o * u + l * z + p * h,
    x * u + o * e - l * h + p * z,
    x * z - o * h - l * e - p * u
  ];
}
function et(t, m) {
  const r = new _.Vector3(m.x - t.x, m.y - t.y, m.z - t.z).normalize(), o = new _.Vector3(0, 0, 1), l = new _.Quaternion();
  return l.setFromUnitVectors(o, r), [l.x, l.y, l.z, l.w];
}
function st(t, m = 0, r = 300) {
  var H, L, O, V;
  if (!((H = t.track) != null && H.path) || t.track.path.length === 0) {
    const i = J(t.matrix), n = [
      {
        visible: !0,
        timeStamp: 0 + m,
        position: i.position,
        quaternion: i.quaternion,
        scale: i.scale
      }
    ];
    return {
      name: t.name || "默认角色",
      type: "model",
      model: t.modelUrl,
      keyframes: n
    };
  }
  const o = J(t.matrix);
  let l = o.quaternion.slice();
  const p = t.track.points.find(
    (i) => Math.abs(i.point.x - o.position[0]) < 1e-3 && Math.abs(i.point.y - o.position[1]) < 1e-3 && Math.abs(i.point.z - o.position[2]) < 1e-3
  );
  let x = t.animationUrl, h = t.repeat === "loop";
  const e = [];
  if (p) {
    let i = 0;
    for (const n of p.actions)
      if (n.duration > 0) {
        const a = typeof n.animationUrl == "string" && n.animationUrl && n.animationUrl.trim() && n.animationUrl !== "none" && n.animationUrl !== "x_turn";
        u({
          visible: !0,
          timeStamp: i,
          position: o.position,
          quaternion: l,
          scale: o.scale,
          animation: {
            url: a ? n.animationUrl : t.animationUrl,
            repeat: !a || (n == null ? void 0 : n.repeat),
            needRender: a,
            item: (L = n.subAction) != null && L.url ? n.subAction : void 0
          }
        }), i += n.duration * 1e3;
      }
    if (!p.actions.some((n) => n.duration > 0)) {
      const n = p.actions.find((a) => a.duration > 0 && a.animationUrl !== "none");
      n ? (x = n.animationUrl, h = !1, console.log(`初始位置与action point重合，使用动作动画: ${x}`)) : console.log("初始位置与action point重合，但没有有效动作，使用默认动画");
    }
  } else
    console.log("初始位置独立，使用默认移动动画");
  function u(i) {
    var a, y, f;
    i.timeStamp += m, i.animation.url === "none" && delete i.animation;
    const n = e.findIndex(($) => $.timeStamp === i.timeStamp);
    n !== -1 ? ((a = e[n].animation) == null ? void 0 : a.url) !== ((y = i.animation) == null ? void 0 : y.url) && i.animation && ((f = i.animation) == null ? void 0 : f.url) !== t.animationUrl && (e[n] = i) : e.push(i);
  }
  u({
    visible: !0,
    timeStamp: 0,
    position: o.position,
    quaternion: l,
    scale: o.scale,
    animation: {
      url: x,
      repeat: h
    }
  });
  let z = 0;
  if (p) {
    let i = 0;
    for (const n of p.actions)
      if (n.duration > 0 || n.animationUrl === "x_turn") {
        if (n.animationUrl === "x_turn") {
          n.duration = 1;
          const a = W(n.rotation);
          a && (l = D(l, a));
        }
        i += n.duration * 1e3, z += n.duration * 1e3, u({
          visible: !0,
          timeStamp: i,
          position: o.position,
          quaternion: l,
          scale: o.scale,
          animation: {
            url: t.animationUrl,
            // 恢复默认移动动画
            repeat: t.repeat === "loop"
          }
        });
      }
    console.log(`初始action point处理完成，总延迟: ${z}ms`);
  }
  function w(i, n) {
    return Math.sqrt(Math.pow(n.x - i.x, 2) + Math.pow(n.y - i.y, 2) + Math.pow(n.z - i.z, 2));
  }
  let q = 0;
  const F = [];
  for (let i = 0; i < t.track.path.length - 1; i++) {
    const n = w(t.track.path[i], t.track.path[i + 1]);
    F.push(n), q += n;
  }
  const E = q / t.track.duration;
  console.log(`路径分析:
    - 总距离: ${q.toFixed(2)}
    - 移动时间: ${t.track.duration}s
    - 移动速度: ${E.toFixed(2)} 单位/秒
    - 路径段距离: [${F.map((i) => i.toFixed(2)).join(", ")}]`);
  const N = /* @__PURE__ */ new Map();
  for (const i of t.track.points) {
    const n = `${i.point.x.toFixed(3)}_${i.point.y.toFixed(3)}_${i.point.z.toFixed(3)}`;
    let a = 1 / 0, y = 0;
    for (let f = 0; f < t.track.path.length - 1; f++) {
      const $ = k(i.point, t.track.path[f], t.track.path[f + 1]);
      $ < a && (a = $, y = f);
    }
    N.set(n, y);
  }
  let S = z, j = 0;
  const C = /* @__PURE__ */ new Set();
  for (let i = 0; i < t.track.path.length - 1; i++) {
    const n = t.track.path[i], a = t.track.path[i + 1], y = F[i], f = j / q * t.track.duration * 1e3;
    j += y;
    const $ = j / q * t.track.duration * 1e3, U = f + S, g = $ + S;
    console.log(
      `路径段${i}: 距离${y.toFixed(2)}, 基础时间${f.toFixed(0)}-${$.toFixed(
        0
      )}ms, 实际时间${U.toFixed(0)}-${g.toFixed(0)}ms`
    ), u({
      visible: !0,
      timeStamp: U,
      position: [n.x, n.y, n.z],
      quaternion: l,
      scale: o.scale,
      animation: {
        url: t.animationUrl,
        // 默认移动动画
        repeat: t.repeat === "loop"
      }
    });
    for (const s of t.track.points) {
      if (p && s === p && i === 0) {
        console.log("跳过初始action point，已在初始关键帧中处理");
        continue;
      }
      const T = `${s.point.x.toFixed(3)}_${s.point.y.toFixed(3)}_${s.point.z.toFixed(3)}`;
      if (C.has(T)) {
        console.log(`跳过已处理的点位: [${s.point.x.toFixed(2)}, ${s.point.y.toFixed(2)}, ${s.point.z.toFixed(2)}]`);
        continue;
      }
      if (N.get(T) === i) {
        const d = tt(s.point, n, a), M = j - y + y * d, R = M / q * t.track.duration * 1e3 + S;
        console.log(
          `Action点: 位置[${s.point.x.toFixed(2)}, ${s.point.y.toFixed(2)}, ${s.point.z.toFixed(
            2
          )}], 距离${M.toFixed(2)}, 到达时间${R.toFixed(0)}ms`
        );
        let I = t.animationUrl;
        const b = s.actions.find((c) => c.duration > 0 && c.animationUrl !== "none"), A = b == null ? void 0 : b.subAction;
        b ? (I = b.animationUrl, b.duration > 2, console.log(`到达动作点，使用该点的动画: ${I}`)) : console.log("动作点没有有效动作，使用默认移动动画"), u({
          visible: !0,
          timeStamp: R,
          position: [s.point.x, s.point.y, s.point.z],
          quaternion: l,
          scale: o.scale,
          animation: {
            url: I,
            item: A != null && A.url ? A : void 0,
            repeat: b == null ? void 0 : b.repeat,
            duration: b == null ? void 0 : b.duration
          }
        });
        let P = R, K = 0;
        for (const c of s.actions)
          if (c.duration > 0 || c.animationUrl === "x_turn") {
            if (c.animationUrl === "x_turn") {
              c.duration = 1;
              const G = W(c.rotation);
              G && (l = D(l, G));
            }
            const B = c.animationUrl !== "none" && c.animationUrl !== "x_turn";
            u({
              visible: !0,
              timeStamp: P,
              position: [s.point.x, s.point.y, s.point.z],
              quaternion: l,
              scale: o.scale,
              animation: {
                url: B ? c.animationUrl : t.animationUrl,
                repeat: !B || (c == null ? void 0 : c.repeat),
                needRender: B,
                item: (O = c.subAction) != null && O.url ? c.subAction : void 0,
                duration: c == null ? void 0 : c.duration
              }
            }), P += c.duration * 1e3, K += c.duration * 1e3, u({
              visible: !0,
              timeStamp: P,
              position: [s.point.x, s.point.y, s.point.z],
              quaternion: l,
              scale: o.scale,
              animation: {
                url: t.animationUrl,
                repeat: t.repeat === "loop",
                item: (V = c.subAction) != null && V.url ? c.subAction : void 0
              }
            });
          }
        S += K, C.add(T), console.log(
          `点位处理完成，已标记为已处理: [${s.point.x.toFixed(2)}, ${s.point.y.toFixed(2)}, ${s.point.z.toFixed(
            2
          )}]`
        );
      }
    }
    if (i === t.track.path.length - 2) {
      const s = $ + S;
      u({
        visible: !0,
        timeStamp: s,
        position: [a.x, a.y, a.z],
        quaternion: l,
        scale: o.scale,
        animation: {
          url: t.animationUrl,
          repeat: t.repeat === "loop"
        }
      });
    }
  }
  function k(i, n, a) {
    const y = i.x - n.x, f = i.y - n.y, $ = i.z - n.z, U = a.x - n.x, g = a.y - n.y, s = a.z - n.z, T = y * U + f * g + $ * s, d = U * U + g * g + s * s;
    if (d === 0)
      return Math.sqrt(y * y + f * f + $ * $);
    let M = T / d;
    M < 0 ? M = 0 : M > 1 && (M = 1);
    const v = n.x + M * U, R = n.y + M * g, I = n.z + M * s, b = i.x - v, A = i.y - R, P = i.z - I;
    return Math.sqrt(b * b + A * A + P * P);
  }
  function tt(i, n, a) {
    const y = a.x - n.x, f = a.y - n.y, $ = a.z - n.z, U = y * y + f * f + $ * $;
    if (U === 0)
      return 0;
    const g = i.x - n.x, s = i.y - n.y, T = i.z - n.z, d = g * y + s * f + T * $;
    return Math.max(0, Math.min(1, d / U));
  }
  e.sort((i, n) => i.timeStamp - n.timeStamp);
  const X = [];
  for (let i = 0; i < e.length - 1; i++) {
    const n = e[i], a = e[i + 1];
    if (Math.abs(n.position[0] - a.position[0]) + Math.abs(n.position[1] - a.position[1]) + Math.abs(n.position[2] - a.position[2]) > 1e-3) {
      console.log(`找到连续的不同位置关键帧: ${i} -> ${i + 1}`);
      const f = E * (r / 1e3), $ = new _.Vector3(n.position[0], n.position[1], n.position[2]), U = new _.Vector3(
        a.position[0] - n.position[0],
        a.position[1] - n.position[1],
        a.position[2] - n.position[2]
      ).normalize(), g = $.clone().add(U.multiplyScalar(f));
      let s = et(
        { x: n.position[0], y: n.position[1], z: n.position[2] },
        { x: a.position[0], y: a.position[1], z: a.position[2] }
      );
      const T = {
        visible: !0,
        timeStamp: n.timeStamp + r,
        // 加上旋转走路的时间
        position: [g.x, g.y, g.z],
        // 使用计算后的位置
        quaternion: s,
        // 使用路径方向的quaternion
        scale: o.scale
      };
      t.animationUrl !== "none" && (T.animation = {
        url: t.animationUrl,
        repeat: t.repeat === "loop"
      }), X.push(T);
      for (let d = 0; d < e.length; d++)
        if (e[d].timeStamp > n.timeStamp + r)
          if (Math.abs(e[d].position[0] - a.position[0]) < 1e-3 && Math.abs(e[d].position[1] - a.position[1]) < 1e-3 && Math.abs(e[d].position[2] - a.position[2]) < 1e-3)
            if (d < e.length - 1) {
              const M = e[d].quaternion, v = e[d + 1].quaternion;
              if (Math.abs(M[0] - v[0]) + Math.abs(M[1] - v[1]) + Math.abs(M[2] - v[2]) + Math.abs(M[3] - v[3]) < 1e-3)
                e[d].quaternion = s.slice(), console.log(`关键帧${d}没有旋转，设置为路径方向`);
              else {
                const I = new _.Quaternion(), b = new _.Quaternion(
                  M[0],
                  M[1],
                  M[2],
                  M[3]
                ), A = new _.Quaternion(v[0], v[1], v[2], v[3]), P = b.clone();
                P.conjugate(), I.copy(A).multiply(P), e[d].quaternion = s.slice();
                const c = new _.Quaternion(
                  s[0],
                  s[1],
                  s[2],
                  s[3]
                ).clone().multiply(I);
                e[d + 1].quaternion = [c.x, c.y, c.z, c.w], s = [c.x, c.y, c.z, c.w], console.log(`关键帧${d}发生旋转，当前帧设置为路径方向，下一帧设置为路径方向+旋转角度，更新路径方向`), d++;
              }
            } else
              e[d].quaternion = s.slice(), console.log(`最后一个关键帧${d}设置为路径方向`);
          else
            break;
      console.log(`添加旋转动作帧，时间戳: ${n.timeStamp + r}ms`);
    }
  }
  e.push(...X), e.sort((i, n) => i.timeStamp - n.timeStamp);
  const Y = t.track.duration * 1e3, Z = Y + S, Q = e[e.length - 1], nt = e.filter(
    (i) => i.timeStamp === 0 && Math.abs(i.position[0] - o.position[0]) < 1e-3 && Math.abs(i.position[1] - o.position[1]) < 1e-3 && Math.abs(i.position[2] - o.position[2]) < 1e-3
  );
  return console.log(`动画转换完成:
     - 路径总距离: ${q.toFixed(2)} 单位
     - 基础移动时间: ${Y}ms (${t.track.duration}s)
     - 移动速度: ${E.toFixed(2)} 单位/秒
     - 动作延迟时间: ${S}ms (${(S / 1e3).toFixed(2)}s)
     - 计算总时间: ${Z}ms (${(Z / 1e3).toFixed(2)}s)
     - 实际最后时间戳: ${Q == null ? void 0 : Q.timeStamp}ms (${((Q == null ? void 0 : Q.timeStamp) / 1e3).toFixed(2)}s)
     - 关键帧数量: ${e.length}
     - 初始位置关键帧数量: ${nt.length}
     - 速度一致性: ${(((Q == null ? void 0 : Q.timeStamp) - S) / 1e3 / t.track.duration * 100).toFixed(1)}% (100%为完全一致)`), {
    id: t.id,
    name: t.name || "默认角色",
    type: "model",
    model: t.modelUrl,
    keyframes: e
  };
}
export {
  st as convertMockToPlayer
};
