import { useState, useEffect } from "react";

/**
 * 获取当前窗口的尺寸
 */
 function getWindowDimensions() {
  return { width: window.innerWidth, height: window.innerHeight };
}

/**
 * React Hook: 获取当前窗口的尺寸
 */
function useWindowDimensions() {
  const [size, setSize] = useState(getWindowDimensions);
  useEffect(() => {
    const listener = () => setSize(getWindowDimensions());
    window.addEventListener("resize", listener, false);
    return () => window.removeEventListener("resize", listener, false);
  });
  return size;
}

export { useWindowDimensions };