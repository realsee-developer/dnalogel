var m = Object.defineProperty;
var f = (n, e, t) => e in n ? m(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var o = (n, e, t) => (f(n, typeof e != "symbol" ? e + "" : e, t), t);
const i = "<", h = ">", _ = "%", d = "locals", L = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)", l = {
  "&": "&amp",
  "<": "&lt",
  ">": "&gt",
  '"': "&#34",
  "'": "&#39"
}, a = {
  EVAL: "eval",
  ESCAPED: "escaped",
  RAW: "raw",
  COMMENT: "comment",
  LITERAL: "literal"
};
function E(n) {
  return n.replace(/;(\s*$)/, "$1");
}
function g(n, e) {
  return new T(n).compileFunction()(e);
}
class T {
  constructor(e) {
    o(this, "templateText");
    o(this, "mode", null);
    o(this, "truncate", !1);
    o(this, "currentLine", 1);
    o(this, "source", "");
    o(this, "regex", new RegExp(L));
    this.templateText = e;
  }
  compileFunction() {
    let e;
    const t = `  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (` + d + ` || {}) {
`, s = `  }
  return __output;
`, c = function(r) {
      return r == null ? "" : String(r).replace(/[&<>'"]/g, function(p) {
        return l[p] || p;
      });
    };
    return this._generateSource(), this.source = t + this.source + s, e = this.source, e = "escapeFn = escapeFn || " + c.toString() + `;
` + e, new Function(d + ", escapeFn", e);
  }
  _generateSource() {
    this.templateText = this.templateText.replace(/[ \t]*<%_/gm, "<%_").replace(/_%>[ \t]*/gm, "_%>");
    const e = this._parseTemplateText(), t = _, s = i, c = h;
    e && e.length && e.forEach((r, p) => {
      let u;
      if (r.indexOf(s + t) === 0 && r.indexOf(s + t + t) !== 0 && (u = e[p + 2], !(u == t + c || u == "-" + t + c || u == "_" + t + c)))
        throw new Error('Could not find matching close tag for "' + r + '".');
      this._scanLine(r);
    });
  }
  _parseTemplateText() {
    let e = this.templateText;
    const t = this.regex;
    let s = t.exec(e);
    const c = [];
    let r;
    for (; s; )
      r = s.index, r !== 0 && (c.push(e.substring(0, r)), e = e.slice(r)), c.push(s[0]), e = e.slice(s[0].length), s = t.exec(e);
    return e && c.push(e), c;
  }
  _addOutput(e) {
    if (this.truncate && (e = e.replace(/^(?:\r\n|\r|\n)/, ""), this.truncate = !1), !e)
      return e;
    e = e.replace(/\\/g, "\\\\"), e = e.replace(/\n/g, "\\n"), e = e.replace(/\r/g, "\\r"), e = e.replace(/"/g, '\\"'), this.source += '    ; __append("' + e + `")
`;
  }
  _scanLine(e) {
    const t = _, s = i, c = h;
    switch (e.split(`
`).length - 1, e) {
      case s + t:
      case s + t + "_":
        this.mode = a.EVAL;
        break;
      case s + t + "=":
        this.mode = a.ESCAPED;
        break;
      case s + t + "-":
        this.mode = a.RAW;
        break;
      case s + t + "#":
        this.mode = a.COMMENT;
        break;
      case s + t + t:
        this.mode = a.LITERAL, this.source += '    ; __append("' + e.replace(s + t + t, s + t) + `")
`;
        break;
      case t + t + c:
        this.mode = a.LITERAL, this.source += '    ; __append("' + e.replace(t + t + c, t + c) + `")
`;
        break;
      case t + c:
      case "-" + t + c:
      case "_" + t + c:
        this.mode == a.LITERAL && this._addOutput(e), this.mode = null, this.truncate = e.indexOf("-") === 0 || e.indexOf("_") === 0;
        break;
      default:
        if (this.mode) {
          switch (this.mode) {
            case a.EVAL:
            case a.ESCAPED:
            case a.RAW:
              e.lastIndexOf("//") > e.lastIndexOf(`
`) && (e += `
`);
          }
          switch (this.mode) {
            case a.EVAL:
              this.source += "    ; " + e + `
`;
              break;
            case a.ESCAPED:
              this.source += "    ; __append(escapeFn(" + E(e) + `))
`;
              break;
            case a.RAW:
              this.source += "    ; __append(" + E(e) + `)
`;
              break;
            case a.COMMENT:
              break;
            case a.LITERAL:
              this._addOutput(e);
              break;
          }
        } else
          this._addOutput(e);
    }
  }
}
export {
  g as render
};
