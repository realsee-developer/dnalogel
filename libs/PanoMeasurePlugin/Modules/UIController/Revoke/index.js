var h = Object.defineProperty;
var i = (r, e, n) => e in r ? h(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n;
var o = (r, e, n) => (i(r, typeof e != "symbol" ? e + "" : e, n), n);
class c {
  constructor(e, n) {
    o(this, "container");
    o(this, "revokeIcon");
    o(this, "revokeItem");
    o(this, "measureController");
    o(this, "onClick", () => {
      this.measureController.revoke();
    });
    o(this, "onModeChange", (e) => {
      if (e !== "Edit" && this.revokeItem.className.includes("enabled")) {
        this.revokeItem.classList.remove("enabled"), this.measureController.hook.off("anchorChange", this.onAnchorChange);
        return;
      }
      this.measureController.hook.on("anchorChange", this.onAnchorChange);
    });
    o(this, "onAnchorChange", (e) => {
      e && this.revokeItem.classList.add("enabled");
    });
    this.measureController = e, this.container = n;
    const t = this.container.querySelector(".fpm__revoke-icon"), s = this.container.querySelector(".fpm__revoke");
    if (!t || !s)
      throw new Error("不正确的选择器");
    this.revokeIcon = t, this.revokeItem = s, this.revokeItem.addEventListener("click", this.onClick), e.hook.on("modeChange", this.onModeChange);
  }
  dispose() {
    this.revokeItem.removeEventListener("click", this.onClick), this.measureController.hook.off("modeChange", this.onModeChange);
  }
}
export {
  c as default
};
