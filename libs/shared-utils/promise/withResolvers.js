function i() {
  let e, r;
  return {
    promise: new Promise((o, s) => {
      e = o, r = s;
    }),
    resolve: e,
    reject: r
  };
}
export {
  i as withResolvers
};
