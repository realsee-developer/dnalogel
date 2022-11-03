import * as React from 'react';
import * as THREE from 'three';
import { Five, Mode } from "@realsee/five"
import { unsafe__useFiveInstance } from "@realsee/five/react"
import useFetchDatas, { DATA_TYPES } from "../utils/useFetchDatas";
import { Object3DHelperPlugin, PanoTagPlugin } from "../../../plugins/dist";
import {useFivePlugin} from "../utils/hooks/useFivePlugin";

const vector0 = [2.7818808289123007, -1.4285811161048776, -3.616888414534893]
const vector1 = [4.829741729794315, -1.4285811161048776, -3.616888414534893]
const vector2 = [4.829741729794315, -0.30950769602726647, -3.616888414534893]
const vector3 = [2.7818808289123007, -0.30950769602726647, -3.616888414534893]

const buttonStyle:any = {
  // position: 'absolute',
  // top: '0',
  // left: '0',
}

const PluginUse: React.FC = () => {
    const five = unsafe__useFiveInstance()
    const objectRef = React.useRef<THREE.Object3D>()
    const panoTagPlugin = useFivePlugin<typeof PanoTagPlugin>('panoTagPlugin')
    const object3DHelperPlugin = useFivePlugin<typeof Object3DHelperPlugin>('object3DHelperPlugin')

    React.useEffect(() => {
      panoTagPlugin.load({
        tagList: [
          {
            id: '1',
            dimensionType: '3D',
            pointType: 'PlaneTag',
            contentType: 'MediaPlane',
            position: [vector0, vector1, vector2, vector3],
            data: {
              mediaData: [
                {
                  url: '//vrlab-static.ljcdn.com/release/web/jsl/test.69dacffb.mp4',
                  videoCoverUrl: '//vrlab-static.ljcdn.com/release/web/jsl/test.65720b34.png',
                  type: 'Video',
                },
                {
                  url: '//vrlab-static.ljcdn.com/release/web/jsl/test.69dacffb.mp4',
                  videoCoverUrl: '//vrlab-static.ljcdn.com/release/web/jsl/test.65720b34.png',
                  type: 'Video',
                },
              ],
            },
          },
        ],
      })
    }, [])

    const getObject = () => {
      if (objectRef.current) {
        return objectRef.current
      } else {
        const tag = panoTagPlugin.getTagById('1')!
        const object = tag.tag3DContentSvelte?.domContainer.css3DObject
        if (object) {
          objectRef.current = object
          return objectRef.current
        } else {
          console.error('no object')
        }
      }
    }

    const addHelper = React.useCallback(() => {
      const obj = getObject()
      if (obj) {
        object3DHelperPlugin.addObject3DHelper(obj)
      } else {
        console.error('objectRef.current is null')
      }
    }, [objectRef])

    const removeHelper = React.useCallback(() => {
      const obj = getObject()
      if (obj) {
        object3DHelperPlugin.removeObject3DHelper(obj)
      } else {
        console.error('objectRef.current is null')
      }
    }, [objectRef])

    return (
    <div style={{
      position: 'absolute',
      top: '0',
      left: '0',
    }}>
      <button type="button" style={buttonStyle} onClick={() => object3DHelperPlugin.show()}>show</button>
      <button type="button" style={buttonStyle} onClick={() => object3DHelperPlugin.hide()}>hide</button>
      <button type="button" style={buttonStyle} onClick={() => object3DHelperPlugin.enable()}>enable</button>
      <button type="button" style={buttonStyle} onClick={() => object3DHelperPlugin.disable()}>disable</button>
      <button type="button" style={buttonStyle} onClick={() => addHelper()}>add</button>
      <button type="button" style={buttonStyle} onClick={() => removeHelper()}>remove</button>
    </div>
    )
}

export default PluginUse
