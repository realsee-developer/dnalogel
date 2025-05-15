import { BaseEditorWithObjectHelper as t } from "../Objects/Base/Editor.js";
class s extends t {
  constructor(r) {
    super(r, () => ({ yAxis: () => r.normal }));
  }
}
export {
  s as CircleMeshEditor
};
