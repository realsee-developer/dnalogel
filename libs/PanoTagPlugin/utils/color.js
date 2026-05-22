function n(o) {
  const e = document.createElement("div");
  e.style.color = o, document.body.appendChild(e);
  const t = window.getComputedStyle(e).color;
  e.remove();
  const a = (() => t.search("rgba") === -1 ? t.replace("rgb", "rgba").replace(")", ", 1)") : t)(), r = a.replace("rgba", "").replace("(", "").replace(")", "").split(",").map((c) => Number(c.trim()));
  return {
    rgba: a,
    r: r[0],
    g: r[1],
    b: r[2],
    a: r[3]
  };
}
export {
  n as name2Rgba
};
