import { getValueInRange as f } from "./math.js";
function a({
  currentParticleIndex: t,
  particlesCount: e,
  clonesCountHead: n,
  clonesCountTotal: i,
  particlesToScroll: r
}) {
  return t === e - n ? 0 : t === 0 ? g({
    particlesCountWithoutClones: e - i,
    particlesToScroll: r
  }) - 1 : Math.floor((t - n) / r);
}
function x({
  currentParticleIndex: t,
  particlesToScroll: e
}) {
  return Math.ceil(t / e);
}
function M({
  currentParticleIndex: t,
  particlesCount: e,
  clonesCountHead: n,
  clonesCountTotal: i,
  infinite: r,
  particlesToScroll: u
}) {
  return r ? a({
    currentParticleIndex: t,
    particlesCount: e,
    clonesCountHead: n,
    clonesCountTotal: i,
    particlesToScroll: u
  }) : x({
    currentParticleIndex: t,
    particlesToScroll: u
  });
}
function g({
  particlesCountWithoutClones: t,
  particlesToScroll: e
}) {
  return Math.ceil(t / e);
}
function d({
  particlesCountWithoutClones: t,
  particlesToScroll: e,
  particlesToShow: n
}) {
  const i = m({
    particlesCountWithoutClones: t,
    particlesToScroll: e,
    particlesToShow: n
  });
  return Math.ceil(t / e) - i;
}
function h({
  infinite: t,
  particlesCountWithoutClones: e,
  particlesToScroll: n,
  particlesToShow: i
}) {
  return t ? g({
    particlesCountWithoutClones: e,
    particlesToScroll: n
  }) : d({
    particlesCountWithoutClones: e,
    particlesToScroll: n,
    particlesToShow: i
  });
}
function I({
  pageIndex: t,
  clonesCountHead: e,
  clonesCountTail: n,
  particlesToScroll: i,
  particlesCount: r
}) {
  return f(
    0,
    Math.min(e + t * i, r - n),
    r - 1
  );
}
function y({
  pageIndex: t,
  particlesToScroll: e,
  particlesCount: n,
  particlesToShow: i
}) {
  return f(
    0,
    Math.min(t * e, n - i),
    n - 1
  );
}
function _({
  infinite: t,
  pageIndex: e,
  clonesCountHead: n,
  clonesCountTail: i,
  particlesToScroll: r,
  particlesCount: u,
  particlesToShow: P
}) {
  return t ? I({
    pageIndex: e,
    clonesCountHead: n,
    clonesCountTail: i,
    particlesToScroll: r,
    particlesCount: u
  }) : y({
    pageIndex: e,
    particlesToScroll: r,
    particlesCount: u,
    particlesToShow: P
  });
}
function c({
  particlesContainerChildren: t,
  particleWidth: e
}) {
  for (let n = 0; n < t.length; n++)
    t[n].style.minWidth = `${e}px`, t[n].style.maxWidth = `${e}px`;
}
function m({
  particlesToScroll: t,
  particlesToShow: e,
  particlesCountWithoutClones: n
}) {
  const i = t - e;
  let r = e;
  for (; ; ) {
    const u = n - r - i;
    if (u < e)
      return Math.max(u, 0);
    r += e + i;
  }
}
function z(t) {
  return new ResizeObserver((e) => {
    t({
      width: e[0].contentRect.width
    });
  });
}
export {
  c as applyParticleSizes,
  z as createResizeObserver,
  M as getCurrentPageIndexByCurrentParticleIndex,
  h as getPagesCountByParticlesCount,
  m as getPartialPageSize,
  _ as getParticleIndexByPageIndex
};
