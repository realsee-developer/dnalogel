import { BaseEditorWithObjectHelper as t } from "../Base/Editor.js";
class o extends t {
  constructor(e) {
    super(e, () => ({ yAxis: e.rectangleMesh.up }));
  }
}
export {
  o as RectangleEditor
};
