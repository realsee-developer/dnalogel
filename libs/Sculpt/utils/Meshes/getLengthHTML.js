function l(i, e) {
  if (!document.getElementById("LineLengthTagStyle")) {
    const t = document.createElement("style");
    t.id = "LineLengthTagStyle", document.head.appendChild(t), t.innerHTML = `
    .LineLengthTag {
      cursor: default;
      position: absolute;
      font-size: 14px;
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
      -webkit-text-stroke: 2px rgba(31, 46, 77, 0.8);
    }
    .LineLengthTag div:last-child {
      position: relative;
    }
    `;
  }
  return `
    <div class="LineLengthTag" style="${e == null ? void 0 : e.style}">
    <div>${i}</div>
    <div>${i}</div>
  </div>
  `;
}
export {
  l as getLengthHTML
};
