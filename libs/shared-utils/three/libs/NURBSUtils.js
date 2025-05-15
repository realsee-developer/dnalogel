import { Vector4 as F, Vector3 as R } from "three";
var A = {
  /*
  	Finds knot vector span.
  
  	p : degree
  	u : parametric value
  	U : knot vector
  
  	returns the span
  	*/
  findSpan: function(e, o, c) {
    var i = c.length - e - 1;
    if (o >= c[i])
      return i - 1;
    if (o <= c[e])
      return e;
    for (var v = e, f = i, a = Math.floor((v + f) / 2); o < c[a] || o >= c[a + 1]; )
      o < c[a] ? f = a : v = a, a = Math.floor((v + f) / 2);
    return a;
  },
  /*
  	Calculate basis functions. See The NURBS Book, page 70, algorithm A2.2
  
  	span : span in which u lies
  	u    : parametric point
  	p    : degree
  	U    : knot vector
  
  	returns array[p+1] with basis functions values.
  	*/
  calcBasisFunctions: function(e, o, c, i) {
    var v = [], f = [], a = [];
    v[0] = 1;
    for (var n = 1; n <= c; ++n) {
      f[n] = o - i[e + 1 - n], a[n] = i[e + n] - o;
      for (var l = 0, u = 0; u < n; ++u) {
        var h = a[u + 1], r = f[n - u], w = v[u] / (h + r);
        v[u] = l + h * w, l = r * w;
      }
      v[n] = l;
    }
    return v;
  },
  /*
  	Calculate B-Spline curve points. See The NURBS Book, page 82, algorithm A3.1.
  
  	p : degree of B-Spline
  	U : knot vector
  	P : control points (x, y, z, w)
  	u : parametric point
  
  	returns point for given u
  	*/
  calcBSplinePoint: function(e, o, c, i) {
    for (var v = this.findSpan(e, i, o), f = this.calcBasisFunctions(v, i, e, o), a = new F(0, 0, 0, 0), n = 0; n <= e; ++n) {
      var l = c[v - e + n], u = f[n], h = l.w * u;
      a.x += l.x * h, a.y += l.y * h, a.z += l.z * h, a.w += l.w * u;
    }
    return a;
  },
  /*
  	Calculate basis functions derivatives. See The NURBS Book, page 72, algorithm A2.3.
  
  	span : span in which u lies
  	u    : parametric point
  	p    : degree
  	n    : number of derivatives to calculate
  	U    : knot vector
  
  	returns array[n+1][p+1] with basis functions derivatives
  	*/
  calcBasisFunctionDerivatives: function(e, o, c, i, v) {
    for (var f = [], a = 0; a <= c; ++a)
      f[a] = 0;
    for (var n = [], a = 0; a <= i; ++a)
      n[a] = f.slice(0);
    for (var l = [], a = 0; a <= c; ++a)
      l[a] = f.slice(0);
    l[0][0] = 1;
    for (var u = f.slice(0), h = f.slice(0), r = 1; r <= c; ++r) {
      u[r] = o - v[e + 1 - r], h[r] = v[e + r] - o;
      for (var w = 0, s = 0; s < r; ++s) {
        var t = h[s + 1], y = u[r - s];
        l[r][s] = t + y;
        var x = l[s][r - 1] / l[r][s];
        l[s][r] = w + t * x, w = y * x;
      }
      l[r][r] = w;
    }
    for (var r = 0; r <= c; ++r)
      n[0][r] = l[r][c];
    for (var s = 0; s <= c; ++s) {
      for (var m = 0, S = 1, B = [], a = 0; a <= c; ++a)
        B[a] = f.slice(0);
      B[0][0] = 1;
      for (var d = 1; d <= i; ++d) {
        var g = 0, D = s - d, z = c - d;
        s >= d && (B[S][0] = B[m][0] / l[z + 1][D], g = B[S][0] * l[D][z]);
        for (var C = D >= -1 ? 1 : -D, K = s - 1 <= z ? d - 1 : c - s, r = C; r <= K; ++r)
          B[S][r] = (B[m][r] - B[m][r - 1]) / l[z + 1][D + r], g += B[S][r] * l[D + r][z];
        s <= z && (B[S][d] = -B[m][d - 1] / l[z + 1][s], g += B[S][d] * l[s][z]), n[d][s] = g;
        var r = m;
        m = S, S = r;
      }
    }
    for (var s = c, d = 1; d <= i; ++d) {
      for (var r = 0; r <= c; ++r)
        n[d][r] *= s;
      s *= c - d;
    }
    return n;
  },
  /*
  		Calculate derivatives of a B-Spline. See The NURBS Book, page 93, algorithm A3.2.
  
  		p  : degree
  		U  : knot vector
  		P  : control points
  		u  : Parametric points
  		nd : number of derivatives
  
  		returns array[d+1] with derivatives
  		*/
  calcBSplineDerivatives: function(e, o, c, i, v) {
    for (var f = v < e ? v : e, a = [], n = this.findSpan(e, i, o), l = this.calcBasisFunctionDerivatives(n, i, e, f, o), u = [], h = 0; h < c.length; ++h) {
      var r = c[h].clone(), w = r.w;
      r.x *= w, r.y *= w, r.z *= w, u[h] = r;
    }
    for (var t = 0; t <= f; ++t) {
      for (var r = u[n - e].clone().multiplyScalar(l[t][0]), y = 1; y <= e; ++y)
        r.add(u[n - e + y].clone().multiplyScalar(l[t][y]));
      a[t] = r;
    }
    for (var t = f + 1; t <= v + 1; ++t)
      a[t] = new F(0, 0, 0);
    return a;
  },
  /*
  	Calculate "K over I"
  
  	returns k!/(i!(k-i)!)
  	*/
  calcKoverI: function(e, o) {
    for (var c = 1, i = 2; i <= e; ++i)
      c *= i;
    for (var v = 1, i = 2; i <= o; ++i)
      v *= i;
    for (var i = 2; i <= e - o; ++i)
      v *= i;
    return c / v;
  },
  /*
  	Calculate derivatives (0-nd) of rational curve. See The NURBS Book, page 127, algorithm A4.2.
  
  	Pders : result of function calcBSplineDerivatives
  
  	returns array with derivatives for rational curve.
  	*/
  calcRationalCurveDerivatives: function(e) {
    for (var o = e.length, c = [], i = [], v = 0; v < o; ++v) {
      var f = e[v];
      c[v] = new R(f.x, f.y, f.z), i[v] = f.w;
    }
    for (var a = [], n = 0; n < o; ++n) {
      for (var l = c[n].clone(), v = 1; v <= n; ++v)
        l.sub(a[n - v].clone().multiplyScalar(this.calcKoverI(n, v) * i[v]));
      a[n] = l.divideScalar(i[0]);
    }
    return a;
  },
  /*
  	Calculate NURBS curve derivatives. See The NURBS Book, page 127, algorithm A4.2.
  
  	p  : degree
  	U  : knot vector
  	P  : control points in homogeneous space
  	u  : parametric points
  	nd : number of derivatives
  
  	returns array with derivatives.
  	*/
  calcNURBSDerivatives: function(e, o, c, i, v) {
    var f = this.calcBSplineDerivatives(e, o, c, i, v);
    return this.calcRationalCurveDerivatives(f);
  },
  /*
  	Calculate rational B-Spline surface point. See The NURBS Book, page 134, algorithm A4.3.
  
  	p1, p2 : degrees of B-Spline surface
  	U1, U2 : knot vectors
  	P      : control points (x, y, z, w)
  	u, v   : parametric values
  
  	returns point for given (u, v)
  	*/
  calcSurfacePoint: function(e, o, c, i, v, f, a, n) {
    for (var l = this.findSpan(e, f, c), u = this.findSpan(o, a, i), h = this.calcBasisFunctions(l, f, e, c), r = this.calcBasisFunctions(u, a, o, i), w = [], t = 0; t <= o; ++t) {
      w[t] = new F(0, 0, 0, 0);
      for (var y = 0; y <= e; ++y) {
        var x = v[l - e + y][u - o + t].clone(), m = x.w;
        x.x *= m, x.y *= m, x.z *= m, w[t].add(x.multiplyScalar(h[y]));
      }
    }
    for (var S = new F(0, 0, 0, 0), t = 0; t <= o; ++t)
      S.add(w[t].multiplyScalar(r[t]));
    S.divideScalar(S.w), n.set(S.x, S.y, S.z);
  }
};
export {
  A as NURBSUtils
};
