const a = () => {
  let t = null;
  return {
    targetWatcher(e, r) {
      t = {
        watcherName: e,
        fn: r
      }, t.fn(), t = null;
    },
    getTarget() {
      return t;
    }
  };
};
export {
  a as createTargetWatcher
};
