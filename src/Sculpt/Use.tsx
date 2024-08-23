import { unsafe__useFiveInstance } from '@realsee/five/react'
import { ButtonGroup, Button } from '@mui/material'
import type { Sculpt } from '@realsee/dnalogel/dist'
import { Util } from '@realsee/dnalogel/dist'
import data from './mocks/data.json'
import { useEffect } from 'react'
import { FiveModeSwitcher } from '../components/FiveModeSwitcher'
import * as THREE from 'three'

export const PanoPluginUse = () => {
  const five = unsafe__useFiveInstance()
  const sculpt = five.plugins.Sculpt as Sculpt

  useEffect(() => {
    sculpt.load(data, {
      occlusionVisibility: false,
      canEdit: true,
    })
    sculpt.items.forEach((item) => item.on('click', (...args) => console.info('click', ...args)))
    window['blink'] = () => {
      const item = sculpt.items[4]
      if (item) {
        Util.blink(five.scene, {
          updateRender: () => {
            five.needsRender = true
          },
        })
      }
    }
    window['reblink'] = () => {
      const item = sculpt.items[3]
      item.visible = false
      if (item) {
        Util.reblink(item, {
          updateRender: () => {
            five.needsRender = true
          },
        })
      }
    }
    return () => {
      sculpt.clear()
    }
  }, [five])

  return (
    <>
      <FiveModeSwitcher />
      <ButtonGroup sx={{ position: 'fixed', top: 0 }}>
        <Button onClick={() => sculpt.createPoint()}>Point</Button>
        <Button onClick={() => sculpt.createPolyline()}>PolyLine</Button>
        <Button onClick={() => sculpt.createPolygon()}>Polygon</Button>
        <Button onClick={() => sculpt.createPrism()}>Prism</Button>
        <Button onClick={() => sculpt.createRectangle()}>Rectangle</Button>
        <Button onClick={() => sculpt.createBox()}>Box</Button>
        <Button onClick={() => sculpt.createCircle()}>Circle</Button>
        <Button onClick={() => sculpt.createCylinder()}>Cylinder</Button>
      </ButtonGroup>
      <ButtonGroup sx={{ position: 'fixed', top: 50 }}>
        <Button onClick={() => Util.lookPoint(five, new THREE.Vector3(0, 0, 0))}>P000</Button>
        <Button onClick={() => Util.lookPoint(five, new THREE.Vector3(-4.738885879516602, 2.3911326683585354, 0.1066827454160853))}>
          P0
        </Button>
        <Button onClick={() => Util.lookObject(five, sculpt.items[2])}>P2</Button>
        <Button onClick={() => Util.lookObject(five, sculpt.items[3])}>P3</Button>
        <Button onClick={() => Util.lookObject(five, sculpt.items[5])}>P5</Button>
        <Button onClick={() => Util.lookObject(five, sculpt.items[7])}>P7</Button>
      </ButtonGroup>
    </>
  )
}

export default PanoPluginUse
