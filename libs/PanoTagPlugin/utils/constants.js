function n() {
  return Math.random().toString(36).slice(-6);
}
const t = n();
export {
  t as RANDON_STRING,
  n as random
};
