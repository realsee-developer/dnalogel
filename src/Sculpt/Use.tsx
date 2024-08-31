import { unsafe__useFiveInstance } from '@realsee/five/react'
import { ButtonGroup, Button, Stack, Switch } from '@mui/material'
import type { Sculpt } from '@realsee/dnalogel/dist'
import { Util } from '@realsee/dnalogel/dist'
import data from './mocks/data.json'
import boxData from './mocks/boxData.json'
import { useEffect } from 'react'
import { FiveModeSwitcher } from '../components/FiveModeSwitcher'
import { CustomWork } from '../components/CustomWork'

const defaultCreateStyle: any = {
  occlusionVisibility: true,
  occlusionMode: 'translucence' as const,
}

export const PanoPluginUse = () => {
  const five = unsafe__useFiveInstance()
  const sculpt = five.plugins.Sculpt as Sculpt

  useEffect(() => {
    // sculpt.load(data, {
    //   occlusionVisibility: true,
    //   canEdit: true,
    // })
    return () => {
      sculpt.clear()
    }
  }, [five])

  return (
    <>
      <FiveModeSwitcher />
      <CustomWork
        onChangeWork={() => {
          sculpt.clear()
        }}
      />
      <Stack>
        <ButtonGroup sx={{ width: 'max-content' }} orientation="vertical" variant="contained">
          <Button sx={{ background: 'rgba(255,255,255,0.5)' }} variant="contained">
            长度显示
            <Switch
              onChange={(e) => {
                sculpt.items.forEach((item) => {
                  if (item.type !== 'Circle' && item.type !== 'Cylinder') {
                    const obj = item.children?.[0] as any
                    obj.setStyle({ lengthEnable: e.target.checked })
                  }
                })
                defaultCreateStyle.lengthEnable = e.target.checked
              }}
            />
          </Button>
          <Button
            variant="contained"
            sx={{ background: 'rgba(255,255,255,0.5)' }}
            onClick={() => {
              Array.from(document.getElementById('LightTagContainer_shgjakdhwakjdhsja')!.children).forEach(
                (i: any) => (i.style.opacity = '1'),
              )
            }}
          >
            显示被模型遮挡的距离
          </Button>
          <Button onClick={() => sculpt.createPoint({ ...defaultCreateStyle })}>点</Button>
          <Button onClick={() => sculpt.createline({ ...defaultCreateStyle })}>线段【自由】</Button>
          <Button onClick={() => sculpt.createline({ ...defaultCreateStyle, limit: 'xoz' })}>线段【水平】</Button>
          <Button onClick={() => sculpt.createline({ ...defaultCreateStyle, limit: 'y' })}>线段【垂直】</Button>
          <Button onClick={() => sculpt.createPolyline({ ...defaultCreateStyle })}>折线【自由】</Button>
          <Button onClick={() => sculpt.createPolyline({ ...defaultCreateStyle, limit: 'xoz' })}>折线【水平】</Button>
          <Button onClick={() => sculpt.createPolyline({ ...defaultCreateStyle, limit: 'y' })}>折线【垂直】</Button>
          <Button onClick={() => sculpt.createPolygon({ ...defaultCreateStyle })}>多边形【自由】</Button>
          <Button onClick={() => sculpt.createPolygon({ ...defaultCreateStyle, limit: 'xoz' })}>多边形【水平】</Button>
          <Button onClick={() => sculpt.createPolygon({ ...defaultCreateStyle, limit: 'y' })}>多边形【垂直】</Button>
          <Button onClick={() => sculpt.createRectangle({ ...defaultCreateStyle })}>长方形</Button>
          <Button onClick={() => sculpt.createBox({ ...defaultCreateStyle })}>长方体</Button>
          <Button onClick={() => sculpt.createPrism({ ...defaultCreateStyle })}>多棱柱</Button>
          <Button onClick={() => sculpt.createCircle({ ...defaultCreateStyle })}>圆</Button>
          <Button onClick={() => sculpt.createCylinder({ ...defaultCreateStyle })}>圆柱体</Button>
          <Button variant="outlined" onClick={() => sculpt.clear()}>
            清空
          </Button>
        </ButtonGroup>
      </Stack>
    </>
  )
}

export default PanoPluginUse
