function n(i, ...f) {
  f.forEach((d) => {
    i.children.includes(d) || d && i.add(d);
  });
}
export {
  n as addIfNotExists
};
