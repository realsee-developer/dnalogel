import { roomInfoIcon as l } from "./Assets/roomInfoIcon.js";
function i() {
  const e = document.createElement("div"), o = document.createElement("i"), t = document.createElement("span");
  return e.appendChild(o), e.appendChild(t), e.style.position = "relative", e.style.width = "100%", e.style.display = "flex", e.style.flexDirection = "column", e.style.alignItems = "center", e.style.marginTop = `${150 / 16}rem`, e.style.opacity = "0", e.style.transition = "opacity 1000ms linear", o.style.display = "block", o.style.width = `${134 / 16}rem`, o.style.height = `${22 / 16}rem`, o.style.backgroundSize = "100%", o.style.backgroundRepeat = "no-repeat", o.style.backgroundImage = `url(${l})`, t.style.marginTop = `${10 / 16}rem`, t.style.fontSize = `${16 / 16}rem`, t.style.color = "#fff", t.style.opacity = "0.7", t.style.textShadow = "0 2px 16px rgb(22 34 83 / 24%)", t.style.fontWeight = "bold", {
    appendTo(n) {
      n.appendChild(e);
    },
    dispose() {
      e.remove();
    },
    setRoom(n) {
      t.innerHTML = n.name + " " + Math.floor(n.size / 1e6) + "㎡";
    },
    show() {
      e.style.opacity = "1";
    },
    hide() {
      e.style.opacity = "0";
    }
  };
}
export {
  i as getRoomInfoInstance
};
