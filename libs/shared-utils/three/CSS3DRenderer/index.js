import { Object3D as k, Matrix4 as _ } from "three";
var c = function(a) {
  k.call(this), this.element = a, this.element.style.position = "absolute", this.element.style.pointerEvents = "auto", this.addEventListener("removed", function() {
    this.traverse(function(p) {
      p.element instanceof Element && p.element.parentNode !== null && p.element.parentNode.removeChild(p.element);
    });
  });
};
c.prototype = Object.create(k.prototype);
c.prototype.constructor = c;
var C = function(a) {
  c.call(this, a);
};
C.prototype = Object.create(c.prototype);
C.prototype.constructor = C;
let P = function(a) {
  let p = this, x, S, M, v, n = new _(), d = {
    camera: { fov: 0, style: "" },
    objects: /* @__PURE__ */ new WeakMap()
  }, s = document.createElement("div");
  s.style.overflow = "hidden", this.domElement = s;
  let l = document.createElement("div");
  l.style.WebkitTransformStyle = "preserve-3d", l.style.transformStyle = "preserve-3d", l.style.pointerEvents = "none", s.appendChild(l), this.getSize = function() {
    return {
      width: x,
      height: S
    };
  }, this.setSize = function(t, e) {
    x = t, S = e, M = x / 2, v = S / 2, s.style.width = t + "px", s.style.height = e + "px", l.style.width = t + "px", l.style.height = e + "px";
  };
  function i(t) {
    return Math.abs(t) < 1e-10 ? 0 : t;
  }
  function W(t) {
    let e = t.elements;
    return "matrix3d(" + i(e[0]) + "," + i(-e[1]) + "," + i(e[2]) + "," + i(e[3]) + "," + i(e[4]) + "," + i(-e[5]) + "," + i(e[6]) + "," + i(e[7]) + "," + i(e[8]) + "," + i(-e[9]) + "," + i(e[10]) + "," + i(e[11]) + "," + i(e[12]) + "," + i(-e[13]) + "," + i(e[14]) + "," + i(e[15]) + ")";
  }
  function g(t, e) {
    let r = t.elements;
    return "translate(-50%,-50%)" + ("matrix3d(" + i(r[0]) + "," + i(r[1]) + "," + i(r[2]) + "," + i(r[3]) + "," + i(-r[4]) + "," + i(-r[5]) + "," + i(-r[6]) + "," + i(-r[7]) + "," + i(r[8]) + "," + i(r[9]) + "," + i(r[10]) + "," + i(r[11]) + "," + i(r[12]) + "," + i(r[13]) + "," + i(r[14]) + "," + i(r[15]) + ")");
  }
  function O(t) {
    var e;
    if (t.isCSS3DObject) {
      const r = (e = t.mode) != null ? e : "front";
      (!a || r === a) && (t.element.style.display = "none");
    }
    for (let r = 0, h = t.children.length; r < h; r++)
      O(t.children[r]);
  }
  function E(t, e, r, h) {
    var u;
    if (t.visible === !1) {
      O(t);
      return;
    }
    if (t.isCSS3DObject) {
      const f = (u = t.mode) != null ? u : "front";
      if (a && f !== a)
        return;
      const o = t.layers.test(r.layers) === !0, m = t.element;
      if (m.style.display = o === !0 ? "" : "none", o) {
        t.onBeforeRender(p, e, r);
        let y;
        t.isCSS3DSprite ? (n.copy(r.matrixWorldInverse), n.transpose(), n.copyPosition(t.matrixWorld), n.scale(t.scale), n.elements[3] = 0, n.elements[7] = 0, n.elements[11] = 0, n.elements[15] = 1, y = g(n)) : y = g(t.matrixWorld);
        let D = d.objects.get(t);
        if (D === void 0 || D.style !== y) {
          m.style.WebkitTransform = y, m.style.transform = y;
          let w = { style: y };
          d.objects.set(t, w);
        }
        m.style.display = t.visible ? "" : "none", m.parentNode !== l && l.appendChild(m), t.onAfterRender(p, e, r);
      }
    }
    for (let f = 0, o = t.children.length; f < o; f++)
      E(t.children[f], e, r);
  }
  this.render = function(t, e) {
    let r = e.projectionMatrix.elements[5] * v;
    if (d.camera.fov !== r && (e.isPerspectiveCamera ? (s.style.WebkitPerspective = r + "px", s.style.perspective = r + "px") : (s.style.WebkitPerspective = "", s.style.perspective = ""), d.camera.fov = r), t.autoUpdate === !0 && t.updateMatrixWorld(), e.parent === null && e.updateMatrixWorld(), e.isOrthographicCamera)
      var h = -(e.right + e.left) / 2, u = (e.top + e.bottom) / 2;
    let o = (e.isOrthographicCamera ? "scale(" + r + ")translate(" + i(h) + "px," + i(u) + "px)" + W(e.matrixWorldInverse) : "translateZ(" + r + "px)" + W(e.matrixWorldInverse)) + "translate(" + M + "px," + v + "px)";
    d.camera.style !== o && (l.style.WebkitTransform = o, l.style.transform = o, d.camera.style = o), E(t, t, e);
  };
};
export {
  c as CSS3DObject,
  P as CSS3DRenderer,
  C as CSS3DSprite
};
