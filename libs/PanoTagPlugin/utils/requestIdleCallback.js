function l(e) {
  return typeof window.requestIdleCallback != "undefined" ? window.requestIdleCallback(e) : setTimeout(function() {
    e();
  }, 1);
}
function n(e) {
  if (typeof window.cancelIdleCallback != "undefined")
    return window.cancelIdleCallback(e);
  clearTimeout(e);
}
export {
  n as cancelIdleCallback,
  l as requestIdleCallback
};
