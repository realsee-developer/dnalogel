function l(n, e) {
  if (!document.getElementById("LineLengthTagStyle")) {
    const t = document.createElement("style");
    t.id = "LineLengthTagStyle", document.head.appendChild(t), t.innerHTML = `
    .LineLengthTag {
      position: absolute;
      pointer-events: none;
      font-size: 18px;
      letter-spacing: 1px;
      color: white;
      left: 50%;
      transform: translate(-50%, -100%);
      word-break: keep-all;
    }
    .LineLengthTag div:first-child {
      position: absolute;
      top: 0;
      left: 0;
      -webkit-text-stroke: 2px #1F2E4D;
    }
    .LineLengthTag div:last-child {
      position: relative;
    }
    `;
  }
  return `
    <div class="LineLengthTag" style="${e == null ? void 0 : e.style}">
    <div>${n}</div>
    <div>${n}</div>
  </div>
  `;
}
export {
  l as getLengthHTML
};
