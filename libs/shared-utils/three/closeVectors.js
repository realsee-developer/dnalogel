function f(n) {
  const t = [...n];
  if (n.length < 3)
    return n;
  const u = n[n.length - 1], l = n[0];
  return u.equals(l) || t.push(l), t;
}
export {
  f as closeVectors
};
