import { Matrix4 as M } from "three";
let k = function() {
  let x = this, f, m, S, y, n = new M(), p = {
    camera: { fov: 0, style: "" },
    objects: /* @__PURE__ */ new WeakMap()
  }, a = document.createElement("div");
  a.style.overflow = "hidden", this.domElement = a;
  let s = document.createElement("div");
  s.style.WebkitTransformStyle = "preserve-3d", s.style.transformStyle = "preserve-3d", s.style.pointerEvents = "none", a.appendChild(s), this.getSize = function() {
    return {
      width: f,
      height: m
    };
  }, this.setSize = function(t, e) {
    f = t, m = e, S = f / 2, y = m / 2, a.style.width = t + "px", a.style.height = e + "px", s.style.width = t + "px", s.style.height = e + "px";
  };
  function l(t) {
    return Math.abs(t) < 1e-10 ? 0 : t;
  }
  function u(t) {
    let e = t.elements;
    return "matrix3d(" + l(e[0]) + "," + l(-e[1]) + "," + l(e[2]) + "," + l(e[3]) + "," + l(e[4]) + "," + l(-e[5]) + "," + l(e[6]) + "," + l(e[7]) + "," + l(e[8]) + "," + l(-e[9]) + "," + l(e[10]) + "," + l(e[11]) + "," + l(e[12]) + "," + l(-e[13]) + "," + l(e[14]) + "," + l(e[15]) + ")";
  }
  function v(t, e) {
    let i = t.elements;
    return "translate(-50%,-50%)" + ("matrix3d(" + l(i[0]) + "," + l(i[1]) + "," + l(i[2]) + "," + l(i[3]) + "," + l(-i[4]) + "," + l(-i[5]) + "," + l(-i[6]) + "," + l(-i[7]) + "," + l(i[8]) + "," + l(i[9]) + "," + l(i[10]) + "," + l(i[11]) + "," + l(i[12]) + "," + l(i[13]) + "," + l(i[14]) + "," + l(i[15]) + ")");
  }
  function c(t) {
    t.isCSS3DObject && (t.element.style.display = "none");
    for (let e = 0, i = t.children.length; e < i; e++)
      c(t.children[e]);
  }
  function C(t, e, i, h) {
    if (t.visible === !1) {
      c(t);
      return;
    }
    if (t.isCSS3DObject) {
      const o = t.layers.test(i.layers) === !0, d = t.element;
      if (d.style.display = o === !0 ? "" : "none", o) {
        t.onBeforeRender(x, e, i);
        let r;
        t.isCSS3DSprite ? (n.copy(i.matrixWorldInverse), n.transpose(), n.copyPosition(t.matrixWorld), n.scale(t.scale), n.elements[3] = 0, n.elements[7] = 0, n.elements[11] = 0, n.elements[15] = 1, r = v(n)) : r = v(t.matrixWorld);
        let W = p.objects.get(t);
        if (W === void 0 || W.style !== r) {
          d.style.WebkitTransform = r, d.style.transform = r;
          let g = { style: r };
          p.objects.set(t, g);
        }
        d.style.display = t.visible ? "" : "none", d.parentNode !== s && s.appendChild(d), t.onAfterRender(x, e, i);
      }
    }
    for (let o = 0, d = t.children.length; o < d; o++)
      C(t.children[o], e, i);
  }
  this.render = function(t, e) {
    let i = e.projectionMatrix.elements[5] * y;
    if (p.camera.fov !== i && (e.isPerspectiveCamera ? (a.style.WebkitPerspective = i + "px", a.style.perspective = i + "px") : (a.style.WebkitPerspective = "", a.style.perspective = ""), p.camera.fov = i), t.autoUpdate === !0 && t.updateMatrixWorld(), e.parent === null && e.updateMatrixWorld(), e.isOrthographicCamera)
      var h = -(e.right + e.left) / 2, o = (e.top + e.bottom) / 2;
    let r = (e.isOrthographicCamera ? "scale(" + i + ")translate(" + l(h) + "px," + l(o) + "px)" + u(e.matrixWorldInverse) : "translateZ(" + i + "px)" + u(e.matrixWorldInverse)) + "translate(" + S + "px," + y + "px)";
    p.camera.style !== r && (s.style.WebkitTransform = r, s.style.transform = r, p.camera.style = r), C(t, t, e);
  };
};
export {
  k as CSS3DRenderer
};
