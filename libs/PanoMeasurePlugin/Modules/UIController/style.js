const t = {
  display: "none",
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  opacity: "0",
  transform: "translate(0, 10px)",
  transition: "opacity 500ms ease-in-out, transform 500ms ease-in-out"
}, e = {
  position: "absolute",
  left: "50%",
  bottom: "32px",
  transform: "translateX(-50%)",
  height: "89px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "14px",
  pointerEvents: "all",
  color: "#fff",
  zIndex: "10"
}, n = {
  position: "absolute",
  bottom: "0",
  left: "0",
  opacity: "0.5",
  width: "100%",
  height: "184px",
  background: "linear-gradient(180deg, rgba(0,0,0,0.00) 0%, #000000 100%)",
  zIndex: "0"
}, o = {
  margin: "0 64px"
}, i = {
  opacity: "0.85"
}, a = {
  width: "72px",
  height: "72px",
  backgroundSize: "100%",
  cursor: "pointer",
  transition: "all 200ms ease-in-out"
}, s = {
  width: "24px",
  height: "24px",
  marginRight: "4px",
  backgroundSize: "100%",
  cursor: "pointer"
}, r = {
  userSelect: "none",
  pointerEvents: "none"
};
export {
  n as controllerBackgroundStyle,
  s as exitIconStyle,
  i as exitItemStyle,
  a as mainIconStyle,
  o as mainItemStyle,
  e as operatingSpaceStyle,
  r as textStyle,
  t as uiWrapperStyle
};
