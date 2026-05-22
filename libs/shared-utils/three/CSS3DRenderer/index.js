import { Object3D as k, Matrix4 as P } from "three";
var x = function(m) {
  k.call(this), this.element = m, this.element.style.position = "absolute", this.element.style.pointerEvents = "auto", this.element.style.userSelect = "none", this.element.setAttribute("draggable", !1), this.addEventListener("removed", function() {
    this.traverse(function(u) {
      u.element instanceof Element && u.element.parentNode !== null && u.element.remove();
    });
  });
};
x.prototype = Object.create(k.prototype);
x.prototype.constructor = x;
var O = function(m) {
  x.call(this, m);
};
O.prototype = Object.create(x.prototype);
O.prototype.constructor = O;
let I = function(m) {
  let u = this, g, C, W, v, d = new P(), n = {
    camera: { fov: 0, style: "" },
    objects: /* @__PURE__ */ new Map()
  }, o = document.createElement("div");
  o.style.overflow = "hidden", this.domElement = o;
  let p = document.createElement("div");
  p.style.WebkitTransformStyle = "preserve-3d", p.style.transformStyle = "preserve-3d", p.style.pointerEvents = "none", o.appendChild(p), this.getSize = function() {
    return {
      width: g,
      height: C
    };
  }, this.setSize = function(t, e) {
    g = t, C = e, W = g / 2, v = C / 2, o.style.width = t + "px", o.style.height = e + "px", p.style.width = t + "px", p.style.height = e + "px";
  };
  function l(t) {
    return Math.abs(t) < 1e-10 ? 0 : t;
  }
  function S(t) {
    let e = t.elements;
    return "matrix3d(" + l(e[0]) + "," + l(-e[1]) + "," + l(e[2]) + "," + l(e[3]) + "," + l(e[4]) + "," + l(-e[5]) + "," + l(e[6]) + "," + l(e[7]) + "," + l(e[8]) + "," + l(-e[9]) + "," + l(e[10]) + "," + l(e[11]) + "," + l(e[12]) + "," + l(-e[13]) + "," + l(e[14]) + "," + l(e[15]) + ")";
  }
  function b(t, e) {
    let r = t.elements;
    return "translate(-50%,-50%)" + ("matrix3d(" + l(r[0]) + "," + l(r[1]) + "," + l(r[2]) + "," + l(r[3]) + "," + l(-r[4]) + "," + l(-r[5]) + "," + l(-r[6]) + "," + l(-r[7]) + "," + l(r[8]) + "," + l(r[9]) + "," + l(r[10]) + "," + l(r[11]) + "," + l(r[12]) + "," + l(r[13]) + "," + l(r[14]) + "," + l(r[15]) + ")");
  }
  function E(t) {
    var e;
    if (t.isCSS3DObject) {
      const r = (e = t.mode) != null ? e : "front";
      (!m || r === m) && (t.element.style.display = "none");
    }
    for (let r = 0, y = t.children.length; r < y; r++)
      E(t.children[r]);
  }
  function M(t, e, r, y, c) {
    var h;
    if (t.visible === !1) {
      E(t);
      return;
    }
    if (t.isCSS3DObject) {
      const i = (h = t.mode) != null ? h : "front";
      if (m && i !== m)
        return;
      t.flag = c;
      const f = t.layers.test(r.layers) === !0, a = t.element;
      if (a.style.display = f === !0 ? "" : "none", f) {
        t.onBeforeRender(u, e, r);
        let s;
        t.isCSS3DSprite ? (d.copy(r.matrixWorldInverse), d.transpose(), d.copyPosition(t.matrixWorld), d.scale(t.scale), d.elements[3] = 0, d.elements[7] = 0, d.elements[11] = 0, d.elements[15] = 1, s = b(d)) : s = b(t.matrixWorld);
        let D = n.objects.get(t);
        if (D === void 0 || D.style !== s) {
          a.style.WebkitTransform = s, a.style.transform = s;
          let w = { style: s };
          n.objects.set(t, w);
        }
        a.style.display = t.visible ? "" : "none", a.parentNode !== p && p.appendChild(a), t.onAfterRender(u, e, r);
      }
    }
    for (let i = 0, f = t.children.length; i < f; i++)
      M(t.children[i], e, r, y, c);
  }
  this.render = function(t, e) {
    let r = e.projectionMatrix.elements[5] * v;
    if (n.camera.fov !== r && (e.isPerspectiveCamera ? (o.style.WebkitPerspective = r + "px", o.style.perspective = r + "px") : (o.style.WebkitPerspective = "", o.style.perspective = ""), n.camera.fov = r), t.autoUpdate === !0 && t.updateMatrixWorld(), e.parent === null && e.updateMatrixWorld(), e.isOrthographicCamera)
      var y = -(e.right + e.left) / 2, c = (e.top + e.bottom) / 2;
    let h = e.isOrthographicCamera ? "scale(" + r + ")translate(" + l(y) + "px," + l(c) + "px)" + S(e.matrixWorldInverse) : "translateZ(" + r + "px)" + S(e.matrixWorldInverse), i = h + "translate(" + W + "px," + v + "px)";
    n.camera.style !== i && (p.style.WebkitTransform = i, p.style.transform = i, n.camera.style = i);
    const f = t.uuid + "_" + performance.now().toString();
    M(t, t, e, h, f), n.objects.forEach(function(a, s) {
      s.flag !== f && (s.element.remove(), n.objects.delete(s));
    });
  }, this.sceneRender = function(t, e) {
    let r = e.projectionMatrix.elements[5] * v;
    if (n.camera.fov !== r && (e.isPerspectiveCamera ? (o.style.WebkitPerspective = r + "px", o.style.perspective = r + "px") : (o.style.WebkitPerspective = "", o.style.perspective = ""), n.camera.fov = r), e.parent === null && e.updateMatrixWorld(), e.isOrthographicCamera)
      var y = -(e.right + e.left) / 2, c = (e.top + e.bottom) / 2;
    let h = e.isOrthographicCamera ? "scale(" + r + ")translate(" + l(y) + "px," + l(c) + "px)" + S(e.matrixWorldInverse) : "translateZ(" + r + "px)" + S(e.matrixWorldInverse), i = h + "translate(" + W + "px," + v + "px)";
    n.camera.style !== i && (p.style.WebkitTransform = i, p.style.transform = i, n.camera.style = i);
    const f = performance.now().toString();
    t.forEach((a) => {
      a.autoUpdate === !0 && a.updateMatrixWorld(), M(a, a, e, h, f);
    }), n.objects.forEach(function(a, s) {
      s.flag !== f && (s.element.remove(), n.objects.delete(s));
    });
  };
};
export {
  x as CSS3DObject,
  I as CSS3DRenderer,
  O as CSS3DSprite
};
