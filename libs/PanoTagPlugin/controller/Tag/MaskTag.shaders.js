const e = (
  /* glsl */
  `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
), t = (
  /* glsl */
  `
#define RESOLUTION 2048.0
#define MAX_GROUPS 64
#define STRICT_MATCH 0.5/255.0

varying vec2 vUv;
uniform sampler2D map;
uniform sampler2D mergedTexture;
uniform float groupCount;
uniform float textureWidth;
uniform float pixelsPerGroup;

float colorGap(vec3 a, vec3 b) {
  return abs(a.r - b.r) + abs(a.g - b.g) + abs(a.b - b.b);
}

vec4 readStyleColor(float groupIndex) {
  float px = groupIndex * pixelsPerGroup;
  float texX = (px + 0.5) / textureWidth;
  return texture2D(mergedTexture, vec2(texX, 0.5));
}

vec4 readStyleToleranceHighlight(float groupIndex) {
  float px = groupIndex * pixelsPerGroup + 1.0;
  float texX = (px + 0.5) / textureWidth;
  return texture2D(mergedTexture, vec2(texX, 0.5));
}

float readStyleOpacity(float groupIndex) {
  float px = groupIndex * pixelsPerGroup + 2.0;
  float texX = (px + 0.5) / textureWidth;
  return texture2D(mergedTexture, vec2(texX, 0.5)).r;
}

float detectEdge(sampler2D map, vec2 uv, vec3 matchColor, float tolerance) {
  vec4 centerColor = texture2D(map, uv);
  if (colorGap(centerColor.rgb, matchColor) >= tolerance) return 0.0;
  float step = 1.0 / RESOLUTION;
  vec4 u = texture2D(map, uv + vec2(0.0, -step));
  vec4 l = texture2D(map, uv + vec2(-step, 0.0));
  vec4 r = texture2D(map, uv + vec2(step, 0.0));
  vec4 d = texture2D(map, uv + vec2(0.0, step));
  bool edge = colorGap(u.rgb, matchColor) >= tolerance || colorGap(l.rgb, matchColor) >= tolerance
    || colorGap(r.rgb, matchColor) >= tolerance || colorGap(d.rgb, matchColor) >= tolerance;
  return edge ? 1.0 : 0.0;
}

void main() {
  vec4 image = texture2D(map, vUv);
  if (image.r == 0.0 && image.g == 0.0 && image.b == 0.0) discard;

  // WebGL 1.0 要求循环终止条件必须是编译时常量，所以用 MAX_GROUPS，循环内检查 groupCount
  for (float i = 0.0; i < float(MAX_GROUPS); i += 1.0) {
    if (i < groupCount) {
      vec4 styleColor = readStyleColor(i);
      vec3 colorRgb = styleColor.rgb;
      float tol = readStyleToleranceHighlight(i).r * 3.0;
      vec3 highlight = readStyleToleranceHighlight(i).gba;
      float opacity = readStyleOpacity(i);
      
      if (opacity > 0.0) {
        float gap = colorGap(image.rgb, colorRgb);
        if (gap > STRICT_MATCH) continue;
        float smoothRange = 0.01;
        float matchFactor = 1.0 - smoothstep(tol - smoothRange, tol + smoothRange, gap);
        if (matchFactor > 0.0) {
          float isEdge = detectEdge(map, vUv, colorRgb, tol);
          float alpha = mix(opacity, 1.0, isEdge);
          alpha *= max(matchFactor, 0.9);
          gl_FragColor = vec4(highlight, alpha);
          return;
        }
      }
    }
  }
  discard;
}
`
);
export {
  t as maskFragmentShaderMulti,
  e as maskVertexShader
};
