function u(r, n) {
  return r ? n(r) ? r : r.parent ? u(r.parent, n) : null : null;
}
export {
  u as recurveFindObject
};
