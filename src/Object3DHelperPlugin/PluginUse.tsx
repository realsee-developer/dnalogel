import * as React from 'react';
import * as THREE from 'three';
import { Five, Mode } from "@realsee/five"
import { unsafe__useFiveInstance } from "@realsee/five/react"
import useFetchDatas, { DATA_TYPES } from "../utils/useFetchDatas";
import { Object3DHelperPlugin, PanoTagPlugin } from "../../../plugins/dist";
import {useFivePlugin} from "../utils/hooks/useFivePlugin";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { ObjectLoader, Vector3 } from 'three';

// const vector0 = [2.7818808289123007, -1.4285811161048776, -3.616888414534893]
// const vector1 = [4.829741729794315, -1.4285811161048776, -3.616888414534893]
// const vector2 = [4.829741729794315, -0.30950769602726647, -3.616888414534893]
// const vector3 = [2.7818808289123007, -0.30950769602726647, -3.616888414534893]

const vector = [-31.517027396190212, -1.1, -12.16400064558492]
const geometry = new THREE.SphereGeometry(0.02, 16, 16)
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 }) // 黄
const sphere = new THREE.Mesh(geometry, material)
sphere.position.copy(new THREE.Vector3(...vector))


const vector0 = [-31.517027396190212, -1.1, -12.16400064558492]
const vector1 = [-31.62489803948697, -1.1, -10.405769510212854]
const vector2 = [-31.62489803948697, 0.1, -10.405769510212854]
const vector3 = [-31.517027396190212, 0.1, -12.16400064558492]

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
            stickType: 'Plane',
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
      <button type="button" onClick={() => object3DHelperPlugin.show()}>show</button>
      <button type="button" onClick={() => object3DHelperPlugin.hide()}>hide</button>
      <button type="button" onClick={() => object3DHelperPlugin.enable()}>enable</button>
      <button type="button" onClick={() => object3DHelperPlugin.disable()}>disable</button>
      <button type="button" onClick={() => addHelper()}>add</button>
      <button type="button" onClick={() => removeHelper()}>remove</button>
    </div>
    )
}


const PluginUse2: React.FC = () => {
  const five = unsafe__useFiveInstance()
  const objectRef = React.useRef<THREE.Object3D>()
  const object3DHelperPlugin = useFivePlugin<typeof Object3DHelperPlugin>('object3DHelperPlugin')

  React.useEffect(() => {
    const loader = new GLTFLoader()
    loader.load('//vrlab-static.ljcdn.com/release/web/adPlane2.ca03e881.glb', (gltf) =>{
      const object = gltf.scene
      objectRef.current = object
      object.position.copy(new Vector3(...vector))
      window['$object'] = object
      // five.scene.add(sphere)
      five.scene.add(object)
    }, undefined, (e) => console.warn(e))
    return () => {
      // five.scene.remove(sphere)
      five.scene.remove(objectRef.current!)
    }
  }, [])

  const getObject = () => {
    if (objectRef.current) {
      return objectRef.current
    }
  }

  const addHelper = React.useCallback(() => {
    const obj = getObject()
    if (obj) {
      const controllers = object3DHelperPlugin.addObject3DHelper(obj, {moveHelper:  {enable: true, offset:{x: 0, y: {percents:0.5}, z:0}}, rotateHelper: {enable: true, offset:{x: 0, y: {percents:0.5}, z:0},yzCircleEnable: false, xzCircleEnable: true, xyCircleEnable: false}, scaleHelper: true, boundingBoxHelper: true } )
      window['controllers'] = controllers
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
    <button type="button" onClick={() => object3DHelperPlugin.show()}>show</button>
    <button type="button" onClick={() => object3DHelperPlugin.hide()}>hide</button>
    <button type="button" onClick={() => object3DHelperPlugin.enable()}>enable</button>
    <button type="button" onClick={() => object3DHelperPlugin.disable()}>disable</button>
    <button type="button" onClick={() => addHelper()}>add</button>
    <button type="button" onClick={() => removeHelper()}>remove</button>
  </div>
  )
}

export default PluginUse
