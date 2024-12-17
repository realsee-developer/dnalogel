import { Object3D as w, Matrix4 as k } from "three";
var c = function(p) {
  w.call(this), this.element = p, this.element.style.position = "absolute", this.element.style.pointerEvents = "auto", this.element.style.userSelect = "none", this.element.setAttribute("draggable", !1), this.addEventListener("removed", function() {
    this.traverse(function(y) {
      y.element instanceof Element && y.element.parentNode !== null && y.element.remove();
    });
  });
};
c.prototype = Object.create(w.prototype);
c.prototype.constructor = c;
var C = function(p) {
  c.call(this, p);
};
C.prototype = Object.create(c.prototype);
C.prototype.constructor = C;
let I = function(p) {
  let y = this, x, S, M, g, o = new k(), f = {
    camera: { fov: 0, style: "" },
    objects: /* @__PURE__ */ new Map()
  }, a = document.createElement("div");
  a.style.overflow = "hidden", this.domElement = a;
  let n = document.createElement("div");
  n.style.WebkitTransformStyle = "preserve-3d", n.style.transformStyle = "preserve-3d", n.style.pointerEvents = "none", a.appendChild(n), this.getSize = function() {
    return {
      width: x,
      height: S
    };
  }, this.setSize = function(t, e) {
    x = t, S = e, M = x / 2, g = S / 2, a.style.width = t + "px", a.style.height = e + "px", n.style.width = t + "px", n.style.height = e + "px";
  };
  function r(t) {
    return Math.abs(t) < 1e-10 ? 0 : t;
  }
  function O(t) {
    let e = t.elements;
    return "matrix3d(" + r(e[0]) + "," + r(-e[1]) + "," + r(e[2]) + "," + r(e[3]) + "," + r(e[4]) + "," + r(-e[5]) + "," + r(e[6]) + "," + r(e[7]) + "," + r(e[8]) + "," + r(-e[9]) + "," + r(e[10]) + "," + r(e[11]) + "," + r(e[12]) + "," + r(-e[13]) + "," + r(e[14]) + "," + r(e[15]) + ")";
  }
  function W(t, e) {
    let l = t.elements;
    return "translate(-50%,-50%)" + ("matrix3d(" + r(l[0]) + "," + r(l[1]) + "," + r(l[2]) + "," + r(l[3]) + "," + r(-l[4]) + "," + r(-l[5]) + "," + r(-l[6]) + "," + r(-l[7]) + "," + r(l[8]) + "," + r(l[9]) + "," + r(l[10]) + "," + r(l[11]) + "," + r(l[12]) + "," + r(l[13]) + "," + r(l[14]) + "," + r(l[15]) + ")");
  }
  function E(t) {
    var e;
    if (t.isCSS3DObject) {
      const l = (e = t.mode) != null ? e : "front";
      (!p || l === p) && (t.element.style.display = "none");
    }
    for (let l = 0, h = t.children.length; l < h; l++)
      E(t.children[l]);
  }
  function D(t, e, l, h, v) {
    var u;
    if (t.visible === !1) {
      E(t);
      return;
    }
    if (t.isCSS3DObject) {
      const i = (u = t.mode) != null ? u : "front";
      if (p && i !== p)
        return;
      t.flag = v;
      const d = t.layers.test(l.layers) === !0, m = t.element;
      if (m.style.display = d === !0 ? "" : "none", d) {
        t.onBeforeRender(y, e, l);
        let s;
        t.isCSS3DSprite ? (o.copy(l.matrixWorldInverse), o.transpose(), o.copyPosition(t.matrixWorld), o.scale(t.scale), o.elements[3] = 0, o.elements[7] = 0, o.elements[11] = 0, o.elements[15] = 1, s = W(o)) : s = W(t.matrixWorld);
        let b = f.objects.get(t);
        if (b === void 0 || b.style !== s) {
          m.style.WebkitTransform = s, m.style.transform = s;
          let _ = { style: s };
          f.objects.set(t, _);
        }
        m.style.display = t.visible ? "" : "none", m.parentNode !== n && n.appendChild(m), t.onAfterRender(y, e, l);
      }
    }
    for (let i = 0, d = t.children.length; i < d; i++)
      D(t.children[i], e, l, h, v);
  }
  this.render = function(t, e) {
    let l = e.projectionMatrix.elements[5] * g;
    if (f.camera.fov !== l && (e.isPerspectiveCamera ? (a.style.WebkitPerspective = l + "px", a.style.perspective = l + "px") : (a.style.WebkitPerspective = "", a.style.perspective = ""), f.camera.fov = l), t.autoUpdate === !0 && t.updateMatrixWorld(), e.parent === null && e.updateMatrixWorld(), e.isOrthographicCamera)
      var h = -(e.right + e.left) / 2, v = (e.top + e.bottom) / 2;
    let u = e.isOrthographicCamera ? "scale(" + l + ")translate(" + r(h) + "px," + r(v) + "px)" + O(e.matrixWorldInverse) : "translateZ(" + l + "px)" + O(e.matrixWorldInverse), i = u + "translate(" + M + "px," + g + "px)";
    f.camera.style !== i && (n.style.WebkitTransform = i, n.style.transform = i, f.camera.style = i);
    const d = t.uuid + "_" + performance.now().toString();
    D(t, t, e, u, d), f.objects.forEach(function(m, s) {
      s.flag !== d && (s.element.remove(), f.objects.delete(s));
    });
  };
};
export {
  c as CSS3DObject,
  I as CSS3DRenderer,
  C as CSS3DSprite
};
