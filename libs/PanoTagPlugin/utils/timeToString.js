function r(t) {
  const n = Math.floor(t / 60), o = Math.floor(t % 60), s = o < 10 ? `0${o}` : o;
  return `${n}'${s}''`;
}
export {
  r as default
};
