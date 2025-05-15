const r = (e) => e ? e.visible === !1 ? !1 : r(e.parent) : !0;
export {
  r as getObjectVisible
};
