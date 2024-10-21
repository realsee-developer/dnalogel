import { BaseEditorWithObjectHelper as r } from "../Base/Editor.js";
class o extends r {
  constructor(e) {
    super(e, () => ({ yAxis: e.rectangleMesh.up }));
  }
}
export {
  o as RectangleEditor
};
