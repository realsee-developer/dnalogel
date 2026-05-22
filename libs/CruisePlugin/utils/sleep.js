function n(e) {
  return new Promise((t) => {
    setTimeout(() => {
      t();
    }, e);
  });
}
export {
  n as sleep
};
