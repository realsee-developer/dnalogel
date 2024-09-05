import { unsafe__useFiveInstance } from '@realsee/five/react'
import { ButtonGroup, Button, Stack, Switch } from '@mui/material'
import { Sculpt } from '@realsee/dnalogel/dist'
import data from './mocks/data.json'
import { useEffect, useState } from 'react'
import { FiveModeSwitcher } from '../components/FiveModeSwitcher'
import { CustomWork } from '../components/CustomWork'

const defaultCreateStyle: any = {
  occlusionVisibility: true,
  occlusionMode: 'translucence' as const,
  lengthEnable: true,
}

const Use = () => {
  const five = unsafe__useFiveInstance()
  const sculpt = five.plugins.Sculpt as Sculpt
  const [action, setAction] = useState<string>('virtualPoint')
  const [limit, setLimit] = useState<string>('none')

  const changeAction = (type: string) => {
    Sculpt.modules.pointSelector.actionIfNoModelUnderMouse = type
    setAction(type)
  }

  const changeLimit = (limit: string) => {
    defaultCreateStyle.limit = limit
    setLimit(limit)
  }

  useEffect(() => {
    sculpt.load(data, {
      occlusionVisibility: true,
      canEdit: true,
    })
    return () => {
      sculpt.clear()
    }
  }, [five])

  return (
    <>
      <FiveModeSwitcher modeList={['Mapview', 'Panorama', 'Model']} />
      <CustomWork onChangeWork={() => sculpt.clear()} />
      <Stack sx={{ position: 'absolute', right: 0, display: 'flex', alignItems: 'end' }} spacing={1}>
        <ButtonGroup sx={{ width: 'max-content' }} orientation="vertical" color="inherit" variant="contained">
          <Button color="primary" variant="contained">
            长度显示
            <Switch
              defaultChecked={true}
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
        </ButtonGroup>
        <ButtonGroup sx={{ width: 'max-content' }} color="inherit" variant="contained">
          <Button color={action === 'virtualPoint' ? 'primary' : undefined} onClick={() => changeAction('virtualPoint')}>
            虚拟点
          </Button>
          <Button color={action === 'lastPoint' ? 'primary' : undefined} onClick={() => changeAction('lastPoint')}>
            最新可用点
          </Button>
          <Button color={action === 'disable' ? 'primary' : undefined} onClick={() => changeAction('disable')}>
            禁用
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={1}>
        <ButtonGroup sx={{ width: 'max-content' }} color="inherit" variant="contained">
          <Button color={limit === 'none' ? 'primary' : undefined} onClick={() => changeLimit('none')}>
            自由
          </Button>
          <Button color={limit === 'xoz' ? 'primary' : undefined} onClick={() => changeLimit('xoz')}>
            水平
          </Button>
          <Button color={limit === 'y' ? 'primary' : undefined} onClick={() => changeLimit('y')}>
            垂直
          </Button>
        </ButtonGroup>
        <ButtonGroup sx={{ width: 'max-content' }} orientation="vertical" color="inherit" variant="contained">
          <Button onClick={() => sculpt.createPoint({ ...defaultCreateStyle })}>点</Button>
          <Button onClick={() => sculpt.createline({ ...defaultCreateStyle })}>线段</Button>
          <Button onClick={() => sculpt.createPolyline({ ...defaultCreateStyle })}>折线</Button>
          <Button onClick={() => sculpt.createPolygon({ ...defaultCreateStyle })}>多边形</Button>
          <Button onClick={() => sculpt.createRectangle({ ...defaultCreateStyle, drawMethod: 'vertex' })}>矩形</Button>
          <Button onClick={() => sculpt.createRectangle({ ...defaultCreateStyle, drawMethod: 'diagonal' })}>矩形【对角线】</Button>
          <Button onClick={() => sculpt.createBox({ ...defaultCreateStyle })}>长方体</Button>
          <Button onClick={() => sculpt.createPrism({ ...defaultCreateStyle })}>多棱柱</Button>
          <Button onClick={() => sculpt.createCircle({ ...defaultCreateStyle })}>圆</Button>
          <Button onClick={() => sculpt.createCylinder({ ...defaultCreateStyle })}>圆柱体</Button>
          <Button color="error" variant="outlined" onClick={() => sculpt.clear()}>
            清空
          </Button>
        </ButtonGroup>
      </Stack>
    </>
  )
}

export default Use
