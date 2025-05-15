function o(e, r) {
  if (!r || typeof ResizeObserver == "undefined" || !ResizeObserver)
    return {
      observe: () => window.addEventListener("resize", e),
      unobserve: () => window.removeEventListener("resize", e)
    };
  {
    const s = new ResizeObserver(e);
    return {
      observe: () => s.observe(r),
      unobserve: () => s.unobserve(r)
    };
  }
}
export {
  o as resizeObserver
};
