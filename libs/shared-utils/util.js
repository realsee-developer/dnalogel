function t(r) {
  return arguments.length === 0 ? [] : Array.isArray(r) ? r : [r];
}
export {
  t as toArray
};
