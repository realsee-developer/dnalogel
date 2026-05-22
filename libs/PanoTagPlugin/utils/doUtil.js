function s(n, r, a = 20, o = 5) {
  return new Promise((c, i) => {
    let t = 0;
    const l = setInterval(() => {
      const e = n();
      r(e) ? (clearInterval(l), c(e)) : t >= o && (clearInterval(l), i(e)), t++;
    }, a);
  });
}
export {
  s as default
};
