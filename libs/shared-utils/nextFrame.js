function i(e, t = 0) {
  t <= 0 ? requestAnimationFrame(e) : requestAnimationFrame(() => i(e, t - 1));
}
export {
  i as nextFrame
};
