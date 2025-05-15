import { SvelteComponent as b, init as m, safe_not_equal as T, append_styles as L, element as s, text as p, space as S, attr as l, null_to_empty as N, insert as O, append as c, listen as y, set_data as v, noop as w, detach as P, binding_callbacks as Z } from "../vendor/svelte/internal/index.js";
import { classnames as z } from "../vendor/classnames/index.js";
function k(i) {
  L(i, "svelte-1irjijd", '.plugin-DoorLabelPlugin-item.svelte-1irjijd.svelte-1irjijd{position:absolute;left:0;top:0;width:0;height:0;pointer-events:none;transition:opacity 0.3s ease}.plugin-DoorLabelPlugin-cnt.svelte-1irjijd.svelte-1irjijd{position:absolute;top:50%;left:50%;border-radius:0.125rem;background:rgba(0, 0, 0, 0.35);line-height:0.75rem;padding:0.375rem;white-space:nowrap;font-size:0.75rem;font-style:normal;color:white;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform ease 1s, background ease 0.3s, color ease 0.3s}.plugin-DoorLabelPlugin-cnt.svelte-1irjijd.svelte-1irjijd::after{content:"";display:block;position:absolute;top:-0.0625rem;left:-0.0625rem;bottom:-0.0625rem;right:-0.0625rem;border-radius:0.125rem;border:0.0625rem solid rgba(0, 0, 0, 0);-o-border-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAQMAAABsu86kAAAABlBMVEUAAAD///+l2Z/dAAAAAnRSTlMAIE397fAAAAAVSURBVAjXY2BjgCMQ+PABhIAASRwARxwD8fgzCQAAAAAASUVORK5CYII=") 4;border-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAQMAAABsu86kAAAABlBMVEUAAAD///+l2Z/dAAAAAnRSTlMAIE397fAAAAAVSURBVAjXY2BjgCMQ+PABhIAASRwARxwD8fgzCQAAAAAASUVORK5CYII=") 4;transition:opacity ease 0.3s}.plugin-DoorLabelPlugin-cnt.svelte-1irjijd.svelte-1irjijd:active,.plugin-DoorLabelPlugin-cnt.svelte-1irjijd.svelte-1irjijd:focus{background:rgba(0, 0, 0, 0.5);color:rgba(255, 255, 255, 0.5)}.plugin-DoorLabelPlugin-icon.svelte-1irjijd.svelte-1irjijd{background:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+aW1hZ2Ut566t5aS0PC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PC9yZWN0PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjYuMDYyMTk3NSUiIHkxPSI1MCUiIHgyPSItMS4xMzY4NjgzOGUtMTElIiB5Mj0iNTAlIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjg1IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iODQuMzM5NzMxJSIgeTE9IjUwJSIgeDI9IjIzLjQyODMzNzclIiB5Mj0iNTAlIiBpZD0ibGluZWFyR3JhZGllbnQtNCI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZGRkZGIiBzdG9wLW9wYWNpdHk9IjAuOCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlZSLeWIhumXtOW8leWvvOagh+etvuWkh+S7vS0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzM5LjAwMDAwMCwgLTU0My4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0y5aSH5Lu9LTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDUuMDAwMDAwLCA1MzYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaW1hZ2Ut566t5aS0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNC4wMDAwMDAsIDcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSJCRyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRDhEOEQ4IiBvcGFjaXR5PSIwLjUxMTQ2Mjk4NCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuOTM4ODY5OCwxLjE0Mzc2MTI5IEM4LjI1NDY1NDA0LDEuMjU3NTgwMzUgOC4zMTc4Mjg0LDEuMzAyMTY5OTggOC4zMTc3ODUyMSwxLjM1ODE1MjIzIEM4LjMxNzc1MDcyLDEuNDAyODQzMzUgOC4zMDU3NDkwNywxLjQ0NzUyNTI0IDguMjgxNzg0MTEsMS40ODcyMDUyMSBMOC4yODE3ODQxMSwxLjQ4NzIwNTIxIEw2LjIwOTg5MDQxLDQuOTE3NzQyNDUgQzYuMTM3ODg4MDgsNS4wMzY5NjAyOSA2LjEwMTg4NjkxLDUuMTcxMjIwMiA2LjEwMTg4NjkxLDUuMzA1NDgwMTEgQzYuMTAxODg2OTEsNS40Mzk3NDAwMiA2LjEzNzg4ODA4LDUuNTczOTk5OTQgNi4yMDk4OTA0MSw1LjY5MzIxNzc4IEw2LjIwOTg5MDQxLDUuNjkzMjE3NzggTDguMjgxNzg0MTEsOS4xMjM3NTUwMSBDOC4zMTc0NzQzOCw5LjE4Mjg0OTE2IDguMzI1ODMzMjIsOS4yNTA4MTUyIDguMzEwNDk1OTUsOS4zMTI5MzAyOCBDOC4yOTUxNTg2OCw5LjM3NTA0NTM2IDguMjU2MTI1MzEsOS40MzEzMDk0NyA4LjE5NzAzMTE3LDkuNDY2OTk5NzMgQzguMTU3MzUxMTksOS40OTA5NjQ2OSA4LjExMjY2OTMxLDkuNTAyOTY2MzQgOC4wNjc5NzgxOCw5LjUwMzAwMDgzIEM4LjAyMzI4NzA2LDkuNTAzMDM1MzEgNy45Nzg1ODY3MSw5LjQ5MTEwMjYzIDcuOTM4ODY5OCw5LjQ2NzE5ODkzIEw3LjkzODg2OTgsOS40NjcxOTg5MyBMMS4zNzk5MTIxOCw1LjUxOTY3ODE1IEMxLjMyMDc2MzAyLDUuNDg0MDc5MTIgMS4yODE2NDI4Nyw1LjQyNzg3NTMyIDEuMjY2MjA5NzcsNS4zNjU3ODM5OCBDMS4yNTQ2OTI1Niw1LjMxOTQ0NzMyIDEuMjU2MzY2OTgsNS4yNjk4MzE4MiAxLjI3Mjc1MzMzLDUuMjIzMDU0MDUgTDEuMjcyNzUzMzMsNS4yMjMwNTQwNSBaIiBpZD0i566t5aS0IiBzdHJva2U9InVybCgjbGluZWFyR3JhZGllbnQtNCkiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTMpIiBtYXNrPSJ1cmwoI21hc2stMikiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM5MjAwLCA1LjMwNTQ4MCkgc2NhbGUoMSwgLTEpIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTUuMDM5MjAwLCAtNS4zMDU0ODApICI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=") no-repeat;background-size:100%;display:inline-block;width:0.625rem;height:0.625rem;margin-left:0.25rem;transform-origin:center}.plugin-DoorLabelPlugin-cnt[data-camera-toward=forward].left.svelte-1irjijd .plugin-DoorLabelPlugin-icon.svelte-1irjijd{transform:rotate(90deg)}.plugin-DoorLabelPlugin-cnt[data-camera-toward=forward].right.svelte-1irjijd .plugin-DoorLabelPlugin-txt.svelte-1irjijd{order:1}.plugin-DoorLabelPlugin-cnt[data-camera-toward=forward].right.svelte-1irjijd .plugin-DoorLabelPlugin-icon.svelte-1irjijd{transform:rotate(-90deg);margin-left:0;margin-right:0.25rem;order:0}.plugin-DoorLabelPlugin-cnt[data-camera-toward=right].forward.svelte-1irjijd .plugin-DoorLabelPlugin-icon.svelte-1irjijd{transform:rotate(90deg)}.plugin-DoorLabelPlugin-cnt[data-camera-toward=right].back.svelte-1irjijd .plugin-DoorLabelPlugin-txt.svelte-1irjijd{order:1}.plugin-DoorLabelPlugin-cnt[data-camera-toward=right].back.svelte-1irjijd .plugin-DoorLabelPlugin-icon.svelte-1irjijd{transform:rotate(-90deg);margin-left:0;margin-right:0.25rem;order:0}.plugin-DoorLabelPlugin-cnt[data-camera-toward=left].back.svelte-1irjijd .plugin-DoorLabelPlugin-icon.svelte-1irjijd{transform:rotate(90deg)}.plugin-DoorLabelPlugin-cnt[data-camera-toward=left].forward.svelte-1irjijd .plugin-DoorLabelPlugin-txt.svelte-1irjijd{order:1}.plugin-DoorLabelPlugin-cnt[data-camera-toward=left].forward.svelte-1irjijd .plugin-DoorLabelPlugin-icon.svelte-1irjijd{transform:rotate(-90deg);margin-left:0;margin-right:0.25rem;order:0}.plugin-DoorLabelPlugin-cnt[data-camera-toward=back].right.svelte-1irjijd .plugin-DoorLabelPlugin-icon.svelte-1irjijd{transform:rotate(90deg)}.plugin-DoorLabelPlugin-cnt[data-camera-toward=back].left.svelte-1irjijd .plugin-DoorLabelPlugin-txt.svelte-1irjijd{order:1}.plugin-DoorLabelPlugin-cnt[data-camera-toward=back].left.svelte-1irjijd .plugin-DoorLabelPlugin-icon.svelte-1irjijd{transform:rotate(-90deg);margin-left:0;margin-right:0.25rem;order:0}.plugin-DoorLabelPlugin-cnt--customBrand.svelte-1irjijd.svelte-1irjijd{color:#f9eac1}.plugin-DoorLabelPlugin-cnt--customBrand.svelte-1irjijd .plugin-DoorLabelPlugin-icon.svelte-1irjijd{background:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI4cHgiIHZpZXdCb3g9IjAgMCAxMCA4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPueureWktDwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjEwLjYzODU4ODQlIiB5MT0iMCUiIHgyPSI5Ni41MTYxNDc0JSIgeTI9IjEyOS43MzEzNTQlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkYyQ0MiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0VBRDA5QSIgb2Zmc2V0PSI0OC43MTQ0NDc4JSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRDFCMTdFIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5pyq5p2l5a625aSH5Lu9LTI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzA1LjAwMDAwMCwgLTU0NS4wMDAwMDApIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTLlpIfku70tMTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0NS4wMDAwMDAsIDUzNy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpbWFnZS3nrq3lpLQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYwLjAwMDAwMCwgNy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC40OTU3ODI5NCwxLjYxNjQ1MTEgTDYuNDIzODg5MjUsNS4wNDY5ODgzMyBDNi4zMjc4ODYxMyw1LjIwNTk0NTQ1IDYuMzI3ODg2MTMsNS40MDUwMTQ3NyA2LjQyMzg4OTI1LDUuNTYzOTcxODkgTDguNDk1NzgyOTQsOC45OTQ1MDkxMiBDOC42Mzg1NDQwMSw5LjIzMDg4NTcxIDguNTYyNjUzNjQsOS41MzgyMzc1IDguMzI2Mjc3MDYsOS42ODA5OTg1NiBDOC4xNjc1NTcxNiw5Ljc3Njg1ODQgNy45Njg4MjE5NSw5Ljc3NzAxMTc1IDcuODA5OTU0MzEsOS42ODEzOTY5NyBMMS4yNTA5OTY2OSw1LjczMzg3NjE4IEMxLjAxNDQwMDA4LDUuNTkxNDgwMDcgMC45MzgwMzU0ODEsNS4yODQyNDU3NiAxLjA4MDQzMTU5LDUuMDQ3NjQ5MTQgQzEuMTIyNTE0OCw0Ljk3NzcyNjI4IDEuMTgxMDczODMsNC45MTkxNjcyNSAxLjI1MDk5NjY5LDQuODc3MDg0MDQgTDcuODA5OTU0MzEsMC45Mjk1NjMyNTMgQzguMDQ2NTUwOTMsMC43ODcxNjcxNDIgOC4zNTM3ODUyNCwwLjg2MzUzMTczOSA4LjQ5NjE4MTM1LDEuMTAwMTI4MzUgQzguNTkxNzk2MTMsMS4yNTg5OTYgOC41OTE2NDI3OCwxLjQ1NzczMTIgOC40OTU3ODI5NCwxLjYxNjQ1MTEgWiIgaWQ9IueureWktCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wMzkyMDAsIDUuMzA1NDgwKSBzY2FsZSgxLCAtMSkgcm90YXRlKC05MC4wMDAwMDApIHRyYW5zbGF0ZSgtNS4wMzkyMDAsIC01LjMwNTQ4MCkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==") no-repeat}.plugin-DoorLabelPlugin-cnt--customBrand.svelte-1irjijd.svelte-1irjijd:active,.plugin-DoorLabelPlugin-cnt--customBrand.svelte-1irjijd.svelte-1irjijd:focus{background:rgba(0, 0, 0, 0.5);color:rgba(249, 234, 193, 0.5)}');
}
function U(i) {
  let t, e, r, a = (
    /*props*/
    i[0].name + ""
  ), A, u, C, o, g, M, D, d, j;
  return {
    c() {
      t = s("div"), e = s("div"), r = s("span"), A = p(a), u = S(), C = s("i"), l(r, "class", "plugin-DoorLabelPlugin-txt svelte-1irjijd"), l(C, "class", "plugin-DoorLabelPlugin-icon svelte-1irjijd"), l(e, "class", o = N(z(
        "plugin-DoorLabelPlugin-cnt",
        /*props*/
        i[0].toward
      )) + " svelte-1irjijd"), l(e, "style", g = `transform: ${/*props*/
      i[0].transform || "initial"};pointer-events: ${/*props*/
      i[0].inSight ? "auto" : "none"};opacity: ${/*props*/
      i[0].inSight ? 1 : 0}`), l(e, "data-camera-toward", M = /*props*/
      i[0].cameraToward), l(t, "style", D = `left: ${/*props*/
      i[0].left || 0}%;top: ${/*props*/
      i[0].top || 0}%;opacity: ${/*props*/
      i[0].inSight ? 1 : 0}`), l(t, "class", "plugin-DoorLabelPlugin-item svelte-1irjijd");
    },
    m(I, n) {
      O(I, t, n), c(t, e), c(e, r), c(r, A), c(e, u), c(e, C), i[4](t), d || (j = y(
        e,
        "click",
        /*click_handler*/
        i[3]
      ), d = !0);
    },
    p(I, [n]) {
      n & /*props*/
      1 && a !== (a = /*props*/
      I[0].name + "") && v(A, a), n & /*props*/
      1 && o !== (o = N(z(
        "plugin-DoorLabelPlugin-cnt",
        /*props*/
        I[0].toward
      )) + " svelte-1irjijd") && l(e, "class", o), n & /*props*/
      1 && g !== (g = `transform: ${/*props*/
      I[0].transform || "initial"};pointer-events: ${/*props*/
      I[0].inSight ? "auto" : "none"};opacity: ${/*props*/
      I[0].inSight ? 1 : 0}`) && l(e, "style", g), n & /*props*/
      1 && M !== (M = /*props*/
      I[0].cameraToward) && l(e, "data-camera-toward", M), n & /*props*/
      1 && D !== (D = `left: ${/*props*/
      I[0].left || 0}%;top: ${/*props*/
      I[0].top || 0}%;opacity: ${/*props*/
      I[0].inSight ? 1 : 0}`) && l(t, "style", D);
    },
    i: w,
    o: w,
    d(I) {
      I && P(t), i[4](null), d = !1, j();
    }
  };
}
function G(i, t, e) {
  let { props: r } = t, { onClick: a } = t, A;
  const u = () => {
    const { left: g, top: M, inSight: D, panoIndex: d } = r;
    if (!g || !M || !D || !A)
      return;
    const j = A.current.clientWidth / window.innerWidth * 100, I = A.current.clientHeight / window.innerHeight * 100;
    g <= j / 2 || g >= 100 - j / 2 || M <= I / 2 || M >= 100 - I / 2;
  }, C = (g) => {
    a && a();
  };
  function o(g) {
    Z[g ? "unshift" : "push"](() => {
      A = g, e(2, A);
    });
  }
  return i.$$set = (g) => {
    "props" in g && e(0, r = g.props), "onClick" in g && e(1, a = g.onClick);
  }, u(), [r, a, A, C, o];
}
class E extends b {
  constructor(t) {
    super(), m(this, t, G, U, T, { props: 0, onClick: 1 }, k);
  }
}
export {
  E as default
};
