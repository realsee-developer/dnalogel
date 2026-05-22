function c(i, e) {
  if (!document.getElementById("LineLengthTagStyle")) {
    const n = document.createElement("style");
    n.id = "LineLengthTagStyle", document.head.appendChild(n), n.innerHTML = `
    .LineLengthTag {
      cursor: default;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Arial-BoldMT;
      font-weight: BoldMT;
      color: #041066;
      letter-spacing: 0;
      line-height: 20px;
      background-color: #FFFFFF;
      border-radius: 12px;
      padding: 2px 8px;
      left: 50%;
      transform: translate(-50%, -50%);
      word-break: keep-all;
      --distance-scale: 1; /* Default scale if not provided */
      transition: font-size 0.5s ease; /* Smooth transition for font size */
    }
    
    /* sm screen */
    @media screen and (max-width: 499px) {
      .LineLengthTag {
        font-size: calc(12px + (14px - 12px) * var(--distance-scale));
      }
    }
    
    /* md screen */
    @media screen and (min-width: 500px) and (max-width: 929px) {
      .LineLengthTag {
        font-size: calc(12px + (14px - 12px) * var(--distance-scale));
      }
    }
    
    /* lg screen */
    @media screen and (min-width: 930px) and (max-width: 1365px) {
      .LineLengthTag {
        font-size: calc(14px + (16px - 14px) * var(--distance-scale));
      }
    }
    
    /* xl screen */
    @media screen and (min-width: 1366px) and (max-width: 2549px) {
      .LineLengthTag {
        font-size: calc(14px + (16px - 14px) * var(--distance-scale));
      }
    }
    
    /* xxl screen */
    @media screen and (min-width: 2550px) {
      .LineLengthTag {
        font-size: calc(0.875rem + (1rem - 0.875rem) * var(--distance-scale));
      }
    }
    `;
  }
  const t = e != null && e.offsetY ? `translateY(${e.offsetY}px)` : "";
  return `
    <div class="LineLengthTag" style="${t ? `transform: translate(-50%, -50%) ${t};` : ""}${e != null && e.style ? " " + e.style : ""}">
      ${i}
    </div>
  `;
}
export {
  c as getLengthHTML
};
