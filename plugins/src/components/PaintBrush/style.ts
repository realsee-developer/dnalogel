const PaintBrushStyle = `
<style type="text/css">

#_gl_paintBrush {
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
transform: translateZ(0);
z-index: 1997;
pointer-events: none;
opacity: 0;
transition: all 500ms;
}

#_gl_paintBrush.brushing {
  opacity: 1;
}

#_gl_paintBrush ._paintBrush-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

#_gl_paintBrush ._paintBrush-canvas--sync {
  pointer-events: none;
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

#_gl_paintBrush ._paintBrush-canvas {
  pointer-events: none;
  z-index: 1;
}

#_gl_paintBrush.brushing ._paintBrush-canvas {
  pointer-events: auto;
}

#_gl_paintBrush ._paintBrush-ctrl {
  width: 140px;
  height: 52px;
  position: absolute;
  bottom: 28px;
  right: 50%;
  transform: translateX(50%);
  font-size: 10px;
  color: white;
  z-index: 2;
}

#_gl_paintBrush.brushing ._paintBrush-ctrl {
  pointer-events: auto;
}

#_gl_paintBrush ._paintBrush-ctrl ._paintBrush-ctrlinner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 26px;
  padding: 8px 16px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(180deg, hsl(0deg 0% 0% / 57%), hsl(0deg 0% 0% / 70%) 117%);
}

._paintBrush-ctrlitem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  cursor: pointer;
}

._paintBrush-ctrlitem--undo >.brush-icon{
    background-image: url("//vrlab-static.ljcdn.com/release/web/revoke.ab7694ef.svg");
    background-size: 100%;
    width: 22px;
    height: 22px;
}

._paintBrush-ctrlitem--close >.brush-icon {
    background-image: url("//vrlab-static.ljcdn.com/release/web/exit_paintbrush.02bc1341.svg");
    background-size: 100%;
    width: 22px;
    height: 22px;
}

</style>
`

export default PaintBrushStyle
