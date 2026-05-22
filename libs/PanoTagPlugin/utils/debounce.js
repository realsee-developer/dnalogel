const i = (n, o = 16.666666666666668) => {
  let e = null;
  const t = n;
  return (...u) => {
    e && clearTimeout(e), e = setTimeout(() => {
      t == null || t(...u), e && clearTimeout(e), e = null;
    }, o);
  };
}, r = /* @__PURE__ */ new Map(), l = (n, o, e = 1e3 / 60) => {
  if (r.has(n) && r.get(n).originalCallback === o)
    return r.get(n).debounceFn;
  const t = i(o, e);
  return r.set(n, {
    debounceFn: t,
    originalCallback: o
  }), t;
};
export {
  i as debounce,
  l as debounceByKey
};
