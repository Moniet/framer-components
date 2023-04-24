// src/components/Squircle/createSquirclePath.ts
function createSquirclePath(w, h, curvature) {
  const width = w;
  const height = h;
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const arc = Math.min(halfWidth, halfHeight) * (1 - curvature);
  const d = `
      M 0 ${halfHeight}
      C 0 ${arc}, ${arc} 0, ${halfWidth} 0
      S ${width} ${arc}, ${width} ${halfHeight}, ${width - arc} ${height}
        ${halfWidth} ${height}, 0 ${height - arc}, 0 ${halfHeight}
  `;
  return d;
}
export {
  createSquirclePath
};
