function i(t) {
  if (!document.getElementById("LineLengthTagStyle")) {
    const e = document.createElement("style");
    e.id = "LineLengthTagStyle", document.head.appendChild(e), e.innerHTML = `
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
    <div class="LineLengthTag">
    <div>${t}</div>
    <div>${t}</div>
  </div>
  `;
}
export {
  i as getLengthHTML
};
