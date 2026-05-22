var i = (s, r, l) => new Promise((a, c) => {
  var f = (t) => {
    try {
      o(l.next(t));
    } catch (n) {
      c(n);
    }
  }, e = (t) => {
    try {
      o(l.throw(t));
    } catch (n) {
      c(n);
    }
  }, o = (t) => t.done ? a(t.value) : Promise.resolve(t.value).then(f, e);
  o((l = l.apply(s, r)).next());
});
import { simplyReactive as S } from "../../../../easy-reactive/src/simply-reactive.js";
import { NEXT as C, PREV as g } from "../../direction.js";
import { getCurrentPageIndexByCurrentParticleIndex as I, getPartialPageSize as h, getPagesCountByParticlesCount as w, getParticleIndexByPageIndex as u } from "../../utils/page.js";
import { getClonesCount as x } from "../../utils/clones.js";
import { getAdjacentIndexes as y } from "../../utils/lazy.js";
import { getValueInRange as p } from "../../utils/math.js";
import { get as P, switcher as m } from "../../utils/object.js";
import { ProgressManager as d } from "../../utils/ProgressManager.js";
function A(s) {
  const r = new d({
    onProgressValueChange: (e) => {
      s("progressValue", 1 - e);
    }
  }), l = S(
    {
      data: {
        particlesCountWithoutClones: 0,
        particlesToShow: 1,
        // normalized
        particlesToShowInit: 1,
        // initial value
        particlesToScroll: 1,
        // normalized
        particlesToScrollInit: 1,
        // initial value
        particlesCount: 1,
        currentParticleIndex: 1,
        infinite: !1,
        autoplayDuration: 1e3,
        clonesCountHead: 0,
        clonesCountTail: 0,
        clonesCountTotal: 0,
        partialPageSize: 1,
        currentPageIndex: 1,
        pagesCount: 1,
        pauseOnFocus: !1,
        focused: !1,
        autoplay: !1,
        autoplayDirection: "next",
        disabled: !1,
        // disable page change while animation is in progress
        durationMsInit: 1e3,
        durationMs: 1e3,
        offset: 0,
        particleWidth: 0,
        loaded: []
      },
      watch: {
        setLoaded({ data: e }) {
          e.loaded = y({
            infinite: e.infinite,
            pageIndex: e.currentPageIndex,
            pagesCount: e.pagesCount,
            particlesCount: e.particlesCountWithoutClones,
            particlesToShow: e.particlesToShow,
            particlesToScroll: e.particlesToScroll
          }).particleIndexes;
        },
        setCurrentPageIndex({ data: e }) {
          e.currentPageIndex = I({
            currentParticleIndex: e.currentParticleIndex,
            particlesCount: e.particlesCount,
            clonesCountHead: e.clonesCountHead,
            clonesCountTotal: e.clonesCountTotal,
            infinite: e.infinite,
            particlesToScroll: e.particlesToScroll
          });
        },
        setPartialPageSize({ data: e }) {
          e.partialPageSize = h({
            particlesToScroll: e.particlesToScroll,
            particlesToShow: e.particlesToShow,
            particlesCountWithoutClones: e.particlesCountWithoutClones
          });
        },
        setClonesCount({ data: e }) {
          const { head: o, tail: t } = x({
            infinite: e.infinite,
            particlesToShow: e.particlesToShow,
            partialPageSize: e.partialPageSize
          });
          e.clonesCountHead = o, e.clonesCountTail = t, e.clonesCountTotal = o + t;
        },
        setProgressManagerAutoplayDuration({ data: e }) {
          r.setAutoplayDuration(e.autoplayDuration);
        },
        toggleProgressManager({ data: { pauseOnFocus: e, focused: o } }) {
          e && (o ? r.pause() : r.resume());
        },
        initDuration({ data: e }) {
          e.durationMs = e.durationMsInit;
        },
        applyAutoplay({ data: e, methods: { _applyAutoplayIfNeeded: o } }) {
          e.autoplay && o(e.autoplay);
        },
        setPagesCount({ data: e }) {
          e.pagesCount = w({
            infinite: e.infinite,
            particlesCountWithoutClones: e.particlesCountWithoutClones,
            particlesToScroll: e.particlesToScroll,
            particlesToShow: e.particlesToShow
          });
        },
        setParticlesToShow({ data: e }) {
          e.particlesToShow = p(
            1,
            e.particlesToShowInit,
            e.particlesCountWithoutClones
          );
        },
        setParticlesToScroll({ data: e }) {
          e.particlesToScroll = p(
            1,
            e.particlesToScrollInit,
            e.particlesCountWithoutClones
          );
        }
      },
      methods: {
        _prev({ data: e }) {
          e.currentParticleIndex = u({
            infinite: e.infinite,
            pageIndex: e.currentPageIndex - 1,
            clonesCountHead: e.clonesCountHead,
            clonesCountTail: e.clonesCountTail,
            particlesToScroll: e.particlesToScroll,
            particlesCount: e.particlesCount,
            particlesToShow: e.particlesToShow
          });
        },
        _next({ data: e }) {
          e.currentParticleIndex = u({
            infinite: e.infinite,
            pageIndex: e.currentPageIndex + 1,
            clonesCountHead: e.clonesCountHead,
            clonesCountTail: e.clonesCountTail,
            particlesToScroll: e.particlesToScroll,
            particlesCount: e.particlesCount,
            particlesToShow: e.particlesToShow
          });
        },
        _moveToParticle({ data: e }, o) {
          e.currentParticleIndex = p(
            0,
            o,
            e.particlesCount - 1
          );
        },
        toggleFocused({ data: e }) {
          e.focused = !e.focused;
        },
        _applyAutoplayIfNeeded(t) {
          return i(this, arguments, function* ({ data: e, methods: o }) {
            if (!e.infinite && (e.autoplayDirection === C && e.currentParticleIndex === e.particlesCount - 1 || e.autoplayDirection === g && e.currentParticleIndex === 0)) {
              r.reset();
              return;
            }
            if (e.autoplay) {
              const n = () => m({
                [C]: () => i(this, null, function* () {
                  return o.showNextPage();
                }),
                [g]: () => i(this, null, function* () {
                  return o.showPrevPage();
                })
              })(e.autoplayDirection);
              yield r.start(n);
            }
          });
        },
        // makes delayed jump to 1st or last element
        _jumpIfNeeded(t) {
          return i(this, arguments, function* ({ data: e, methods: o }) {
            let n = !1;
            return e.infinite && (e.currentParticleIndex === 0 ? (yield o.showParticle(
              e.particlesCount - e.clonesCountTotal,
              {
                animated: !1
              }
            ), n = !0) : e.currentParticleIndex === e.particlesCount - e.clonesCountTail && (yield o.showParticle(e.clonesCountHead, {
              animated: !1
            }), n = !0)), n;
          });
        },
        changePage(F, R, T) {
          return i(this, arguments, function* ({ data: e, methods: o }, t, n) {
            if (r.reset(), e.disabled)
              return;
            e.disabled = !0, t(), yield o.offsetPage({ animated: P(n, "animated", !0) }), e.disabled = !1, !(yield o._jumpIfNeeded()) && o._applyAutoplayIfNeeded();
          });
        },
        showNextPage(n, F) {
          return i(this, arguments, function* ({ data: e, methods: o }, t) {
            e.disabled || (yield o.changePage(o._next, t));
          });
        },
        showPrevPage(n, F) {
          return i(this, arguments, function* ({ data: e, methods: o }, t) {
            e.disabled || (yield o.changePage(o._prev, t));
          });
        },
        showParticle(n, F, R) {
          return i(this, arguments, function* ({ methods: e }, o, t) {
            yield e.changePage(
              () => e._moveToParticle(o),
              t
            );
          });
        },
        _getParticleIndexByPageIndex({ data: e }, o) {
          return u({
            infinite: e.infinite,
            pageIndex: o,
            clonesCountHead: e.clonesCountHead,
            clonesCountTail: e.clonesCountTail,
            particlesToScroll: e.particlesToScroll,
            particlesCount: e.particlesCount,
            particlesToShow: e.particlesToShow
          });
        },
        showPage(n, F, R) {
          return i(this, arguments, function* ({ methods: e }, o, t) {
            const T = e._getParticleIndexByPageIndex(o);
            yield e.showParticle(T, t);
          });
        },
        offsetPage({ data: e }, o) {
          const t = P(o, "animated", !0);
          return new Promise((n) => {
            e.durationMs = t ? e.durationMsInit : 0, e.offset = -e.currentParticleIndex * e.particleWidth, setTimeout(() => {
              n();
            }, e.durationMs);
          });
        }
      }
    },
    {
      onChange: s
    }
  ), [a, c] = l;
  return [{ data: a, progressManager: r }, c, l._internal];
}
export {
  A as createCarousel
};
