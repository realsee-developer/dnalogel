function u(t) {
  if (!t)
    return null;
  try {
    if (t.includes("youtu.be"))
      return new URL(t).pathname.substring(1);
    if (t.includes("youtube.com")) {
      const r = new URL(t), a = new URLSearchParams(r.search).get("v");
      if (a)
        return a;
      if (r.pathname.includes("/embed/"))
        return r.pathname.split("/embed/")[1];
      if (r.pathname.includes("/shorts/"))
        return r.pathname.split("/shorts/")[1];
      if (r.pathname.includes("/live/"))
        return r.pathname.split("/live/")[1];
    }
  } catch (r) {
  }
  const e = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/|live\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/, n = t.match(e);
  return n && n[1] ? n[1] : null;
}
function i(t) {
  if (!t)
    return null;
  try {
    if (t.includes("vimeo.com")) {
      const s = new URL(t).pathname.split("/").filter(Boolean);
      if (s.length > 0) {
        const a = s[0];
        if (/^\d+$/.test(a) && a.length >= 5)
          return a;
      }
    }
  } catch (r) {
  }
  const e = /^.*vimeo\.com\/[A-Za-z\/]*(\d+)/, n = t.match(e);
  return n && n[1] && n[1].length >= 5 ? n[1] : null;
}
function o(t) {
  return t ? /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/.test(t) : !1;
}
function m(t) {
  return t ? /^(http(s)?:\/\/)?((w){3}.)?vimeo\.com\/(.+)/.test(t) : !1;
}
function l(t, e) {
  if (o(t)) {
    const n = u(t);
    if (!n)
      return "";
    const r = new URL(`https://www.youtube.com/embed/${n}`);
    return (e == null ? void 0 : e.start) !== void 0 && r.searchParams.set("start", e.start.toString()), (e == null ? void 0 : e.autoplay) !== void 0 && r.searchParams.set("autoplay", e.autoplay.toString()), r.toString();
  }
  if (m(t)) {
    const n = i(t);
    if (!n)
      return "";
    const r = new URL(`https://player.vimeo.com/video/${n}`);
    return (e == null ? void 0 : e.autoplay) !== void 0 && r.searchParams.set("autoplay", e.autoplay.toString()), r.toString();
  }
  return t;
}
function c(t, e) {
  if (!e)
    if (o(t))
      e = "youtube";
    else if (m(t))
      e = "vimeo";
    else
      return null;
  if (e === "youtube") {
    const n = u(t);
    return n ? `https://img.youtube.com/vi/${n}/hqdefault.jpg` : null;
  }
  if (e === "vimeo") {
    const n = i(t);
    return n ? `https://vumbnail.com/${n}.jpg` : null;
  }
  return null;
}
export {
  l as formatVideo,
  c as getVideoThumbnail,
  i as getVimeoId,
  u as getYouTubeId,
  m as isVimeo,
  o as isYouTube
};
