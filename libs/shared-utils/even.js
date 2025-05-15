function t(e, r) {
  const u = Math.round(e);
  return u % 2 === 0 ? u : u + (r != null && r.floor ? -1 : 1);
}
export {
  t as even
};
