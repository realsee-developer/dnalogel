import * as React from 'react'
import * as THREE from 'three'
import { unsafe__useFiveInstance } from '@realsee/five/react'
import { Object3DHelperPlugin, PanoTagPlugin } from '@realsee/dnalogel/dist'
import { useFivePlugin } from '../utils/hooks/useFivePlugin'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Vector3 } from 'three'
import { ObjectHelperControllers } from '@realsee/dnalogel/dist'

const vector0 = [2.7818808289123007, -1.4285811161048776, -3.616888414534893]
const vector1 = [4.829741729794315, -1.4285811161048776, -3.616888414534893]
const vector2 = [4.829741729794315, -0.30950769602726647, -3.616888414534893]
const vector3 = [2.7818808289123007, -0.30950769602726647, -3.616888414534893]

const vector = [0, 0, 0]
const geometry = new THREE.SphereGeometry(0.02, 16, 16)
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 }) // 黄
const sphere = new THREE.Mesh(geometry, material)
sphere.position.copy(new THREE.Vector3(...vector))

const position = [
  [-4.344637059045372, 0.8661640292431658, -2.339700937271118 + 0.01],
  [-1.4781933464383068, 0.8696103907729694, -2.339700937271118 + 0.01],
  [-1.4865722199099451, 2.1293509755511106, -2.3397009372711177 + 0.01],
  [-4.343575500347607, 2.1145151110093137, -2.3397009372711177 + 0.01],
]

// const vector0 = [-31.517027396190212, -1.1, -12.16400064558492]
// const vector1 = [-31.62489803948697, -1.1, -10.405769510212854]
// const vector2 = [-31.62489803948697, 0.1, -10.405769510212854]
// const vector3 = [-31.517027396190212, 0.1, -12.16400064558492]

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
          position: position as any,
          config: {
            renderType: 'Dom',
          },
          data: {
            mediaData: [
              {
                url: '//videos.pexels.com/video-files/3015527/3015527-sd_640_360_24fps.mp4',
                videoCoverUrl: '//vr-static.realsee-cdn.cn/release/web/jsl/test.65720b34.png',
                type: 'Video',
              },
              {
                url: '//videos.pexels.com/video-files/3015527/3015527-sd_640_360_24fps.mp4',
                videoCoverUrl: '//vr-static.realsee-cdn.cn/release/web/jsl/test.65720b34.png',
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
      const object = tag.tag3DContentSvelte?.css3DInstance
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
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
      }}
    >
      <button
        type="button"
        onClick={() =>
          object3DHelperPlugin.getObject3DHelper(getObject()!)?.helper.controllers.moveController?.moveByMouse({
            useFaceNormal: {
              enable: true,
            },
          })
        }
      >
        move
      </button>
      <button type="button" onClick={() => object3DHelperPlugin.show()}>
        show
      </button>
      <button type="button" onClick={() => object3DHelperPlugin.hide()}>
        hide
      </button>
      <button type="button" onClick={() => object3DHelperPlugin.enable()}>
        enable
      </button>
      <button type="button" onClick={() => object3DHelperPlugin.disable()}>
        disable
      </button>
      <button type="button" onClick={() => addHelper()}>
        add
      </button>
      <button type="button" onClick={() => removeHelper()}>
        remove
      </button>
    </div>
  )
}

const PluginUse2: React.FC = () => {
  const five = unsafe__useFiveInstance()
  const objectRef = React.useRef<THREE.Object3D>()
  const controller = React.useRef<ObjectHelperControllers>()
  const object3DHelperPlugin = useFivePlugin<typeof Object3DHelperPlugin>('object3DHelperPlugin')

  React.useEffect(() => {
    const loader = new GLTFLoader()
    loader.load(
      'https://global-public.realsee-cdn.com/release/vrsaas/file/signwork/tag/45a72c19-17d0-409a-975e-fb9bffd8e48e.glb',
      (gltf) => {
        const object = gltf.scene
        objectRef.current = object
        object.position.copy(new Vector3(0, 0, 0))
        window['$object'] = object
        // five.scene.add(sphere)
        five.scene.add(object)
        five.needsRender = true
      },
      undefined,
      (e) => console.warn(e),
    )
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
      const controllers = object3DHelperPlugin.addObject3DHelper(obj, {
        moveHelper: {
          enable: true,
          yArrowEnable: true,
          xArrowEnable: true,
          zArrowEnable: true,
          // offset: { x: 0, y: { percents: 0.5 }, z: 0 },
        },
        rotateHelper: true,
        scaleHelper: false,
        boundingBoxHelper: true,
      })
      window['controllers'] = controllers
      controller.current = controllers
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
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
      }}
    >
      <button
        type="button"
        onClick={() =>
          controller.current?.moveController?.moveByMouse({
            useFaceNormal: {
              enable: true,
              fixedFaceNormal: (vector) => {
                vector.y = 0
                return vector.normalize()
              },
            },
          })
        }
      >
        move
      </button>
      <button type="button" onClick={() => object3DHelperPlugin.show()}>
        show
      </button>
      <button type="button" onClick={() => object3DHelperPlugin.hide()}>
        hide
      </button>
      <button type="button" onClick={() => object3DHelperPlugin.enable()}>
        enable
      </button>
      <button type="button" onClick={() => object3DHelperPlugin.disable()}>
        disable
      </button>
      <button type="button" onClick={() => addHelper()}>
        add
      </button>
      <button type="button" onClick={() => removeHelper()}>
        remove
      </button>
    </div>
  )
}

export default PluginUse
