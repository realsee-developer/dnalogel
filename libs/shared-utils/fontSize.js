var o = Object.defineProperty;
var d = (i, e, n) => e in i ? o(i, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : i[e] = n;
var t = (i, e, n) => (d(i, typeof e != "symbol" ? e + "" : e, n), n);
const h = {
  sm: {
    name: 10,
    area: 8,
    padding: {
      room: [6, 3],
      guide: [0, 0],
      distance: [4, 2]
    },
    lineHeight: 14,
    default: 10
  },
  md: {
    name: 10,
    area: 8,
    padding: {
      room: [6, 3],
      guide: [0, 0],
      distance: [4, 2]
    },
    lineHeight: 14,
    default: 10
  },
  lg: {
    name: 12,
    area: 10,
    padding: {
      room: [8, 4],
      guide: [0, 3],
      distance: [6, 3]
    },
    lineHeight: 16,
    default: 12
  },
  xl: {
    name: 14,
    area: 12,
    padding: {
      room: [8, 4],
      guide: [0, 3],
      distance: [6, 3]
    },
    lineHeight: 20,
    default: 14
  },
  xxl: {
    name: 14,
    area: 12,
    padding: {
      room: [8, 4],
      guide: [0, 3],
      distance: [6, 3]
    },
    lineHeight: 20,
    default: 14
  }
}, s = (i) => i < 500 ? "sm" : i < 930 ? "md" : i < 1366 ? "lg" : i < 2550 ? "xl" : "xxl", a = () => typeof window != "undefined" ? s(window.innerWidth) : "md";
class u {
  constructor() {
    t(this, "fontSize");
    t(this, "subscribers", []);
    t(this, "debounceTimer", null);
    t(this, "isInitialized", !1);
    t(this, "handleResize", () => {
      this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout(() => {
        const e = s(window.innerWidth);
        e !== this.fontSize && (this.fontSize = e, this.notifySubscribers()), this.debounceTimer = null;
      }, 100);
    });
    this.fontSize = a(), this.initialize();
  }
  initialize() {
    typeof window == "undefined" || this.isInitialized || (this.isInitialized = !0, window.addEventListener("resize", this.handleResize));
  }
  notifySubscribers() {
    this.subscribers.forEach((e) => {
      try {
        e(this.fontSize);
      } catch (n) {
        console.warn("Error in fontSize callback:", n);
      }
    });
  }
  subscribe(e) {
    return this.subscribers.push(e), e(this.fontSize), () => {
      this.subscribers = this.subscribers.filter((n) => n !== e);
    };
  }
  get current() {
    return this.fontSize;
  }
  destroy() {
    this.debounceTimer && (clearTimeout(this.debounceTimer), this.debounceTimer = null), typeof window != "undefined" && window.removeEventListener("resize", this.handleResize), this.subscribers = [], this.isInitialized = !1;
  }
}
let r = null;
const l = () => (r || (r = new u()), r), c = () => typeof window == "undefined" ? "md" : l();
export {
  h as FONT_SIZE_MAP,
  a as getCurrentFontSize,
  c as getGlobalResponsiveFontSize
};
