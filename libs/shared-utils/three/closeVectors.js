function f(n) {
  const t = [...n];
  if (n.length < 3)
    return n;
  const u = n.at(-1), s = n[0];
  return u.equals(s) || t.push(s), t;
}
export {
  f as closeVectors
};
