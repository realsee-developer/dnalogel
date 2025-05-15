function s(l, o, i) {
  const [r, e] = o;
  if (r >= e || e <= 1)
    return -1;
  let u = r, n = e;
  const a = {}, c = (t) => (a[t] || (a[t] = l(t)), a[t]);
  for (; u <= n; ) {
    const t = Math.floor((u + n) / 2);
    if (c(t) > i) {
      if (t === r || c(t - 1) <= i)
        return t;
      n = t - 1;
    } else
      u = t + 1;
  }
  return -1;
}
function f(l, o) {
  const [i, r] = o;
  if (i >= r || r <= 1 || i <= 1)
    return -1;
  const e = {}, u = (n) => (e[n] || (e[n] = l(n)), e[n]);
  for (let n = i; n < r; n++) {
    const a = u(n), c = u(n - 1);
    if (a < c)
      return n;
  }
  return -1;
}
export {
  s as binarySearchFirstBig,
  f as searchFirstValueSmallThanLastValue
};
