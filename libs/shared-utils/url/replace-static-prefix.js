import { isAbsoluteURL as c } from "./absoluteUrl.js";
import { DEFAULT_STATIC_PREFIX as f } from "./defaultUrls.js";
function l(o = f, t) {
  if (!t || typeof t != "string")
    return t || "";
  if (!o || typeof o != "string")
    return t;
  o.startsWith("//") && (o = "http:" + o);
  try {
    if (!c(t))
      return t;
    let e = t;
    t.startsWith("//") && (e = "http:" + t);
    const r = new URL(e);
    let n = o, s = r.protocol, i;
    if (o.includes("://")) {
      const a = new URL(o);
      n = a.hostname, i = a.port;
    } else
      o.startsWith("//") && (n = o.substring(2));
    return !n || n.trim() === "" ? t : (r.hostname = n, i !== void 0 && (r.port = i), s !== r.protocol && (r.protocol = s), t.startsWith("//") ? r.toString().replace(/^https?:\/\//, "//") : r.toString());
  } catch (e) {
    return console.warn(`[replaceStaticPrefix] Invalid URL: ${t}`, e), t;
  }
}
export {
  l as replaceStaticPrefix
};
