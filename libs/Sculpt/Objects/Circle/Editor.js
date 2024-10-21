import { BaseEditorWithObjectHelper as e } from "../Base/Editor.js";
class o extends e {
  constructor(r) {
    super(r, () => ({ yAxis: r.circleMesh.normal }));
  }
}
export {
  o as CircleEditor
};
