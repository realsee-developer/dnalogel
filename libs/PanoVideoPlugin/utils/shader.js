const v = (
  /* glsl */
  `
varying vec2 vUv;
void main() {
  vUv = uv;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1);
  gl_Position = projectionMatrix * mvPosition;
}
`
), a = (
  /* glsl */
  `
uniform sampler2D map;
uniform vec4 size;
varying vec2 vUv;
uniform float opacity;

void main() {
  float dx = max(size[0] + size[2] - 1.0, 0.0);
  vec2 uv = vec2(((vUv.x <= dx ? vUv.x + 1.0 : vUv.x) - size[0]) / size[2], (vUv.y - size[1]) / size[3]);
  float a = 0.1;
  float transX = uv.x < a ? 1.0 / a * uv.x : (uv.x > (1.0 - a) ? 1.0 / a * (1.0 - uv.x) : 1.0);
  float transY = uv.y < a ? 1.0 / a * uv.y : (uv.y > (1.0 - a) ? 1.0 / a * (1.0 - uv.y) : 1.0);
	float match = (1.0 - step(0.5, abs(uv.x - 0.5))) * (1.0 - step(0.5, abs(uv.y - 0.5))) * (transX < transY ? transX : transY);
  gl_FragColor = vec4(texture2D(map, uv).xyz, match * opacity);
}
`
);
export {
  a as fragmentShader,
  v as vertexShader
};
