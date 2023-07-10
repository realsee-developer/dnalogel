import * as React from 'react'
import { useState, useEffect } from 'react'
import { unsafe__useFiveInstance } from '@realsee/five/react'
import { WorkObserver } from '@realsee/five'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { GuideLinePluginType } from '@realsee/dnalogel/dist'

const GuideLinePluginUse = () => {
  const [visible, setVisible] = useState<boolean>(true)
  const [currentGuideLine, setCurrentGuideLine] = useState<number[]>([0, 1, 2, 3, 4])
  // 可选的路径
  const [observersData, setCurrentObserversData] = useState<WorkObserver[]>()
  const five = unsafe__useFiveInstance()
  const guideLine: GuideLinePluginType.GuideLinePluginExportType = five.plugins.guideLinePlugin

  useEffect(() => {
    reloadGuideLine(visible)
  }, [])

  // 显示/隐藏路径
  const handleVisibleChange = async (value: boolean) => {
    if (value) {
      guideLine.show()
    } else {
      guideLine.hide()
    }

    setVisible(value)
  }
  // 重载路径
  const reloadGuideLine = async (visible) => {
    const data: GuideLinePluginType.PluginData = {
      lines: [
        {
          name: '前往出口',
          id: 1,
          // pano_group: [0, 1, 2],
          path: [
            {
              type: 'CatmullRomCurve3',
              points: [
                [0.09141919761896133, 0.1, -0.08654399961233139],
                [-1.6820100545883179, 0.1, 0.07329510152339935],
                [-3.437459945678711, 0.1, 0.06699030101299286],
              ],
            },
          ],
          model_style: {
            visible: true,
            background_color: '#237CFF',
            background_opacity: 0.5,
            border_color: '#ffffff',
            border_opacity: 0.3,
            unit_length: 0.5,
            width: 0.5,
            texture: {
              url: '//vrlab-static.ljcdn.com/release/web/jsl/arrow_1.b61f8501.png',
            },
            start_tag: {
              position: five.work.observers[0].standingPosition.toArray(),
              data: {
                text: '器械区',
                icon_url: 'https://vrlab-static.ljcdn.com/release/web/jsl/test.804f254f.png',
              },
            },
          },
          panorama_style: {
            visible: true,
            texture: {
              url: '//vrlab-static.ljcdn.com/release/web/jsl/arrow_3.5c2c79a5.png',
            },
            width: 0.3,
            unit_length: 0.3,
          },
          visible_floor_indexes: [0],
        },
        {
          id: 2,
          // pano_group: [1, 3],
          path: [
            {
              type: 'CatmullRomCurve3',
              points: [
                [-1.6820100545883179, 0.1, 0.07329510152339935],
                [-0.618914008140564, 0.1, -1.6621500253677368],
              ],
            },
          ],
          model_style: {
            visible: true,
            background_color: '#237CFF',
            background_opacity: 0.5,
            border_color: '#ffffff',
            border_opacity: 0.3,
            unit_length: 0.5,
            width: 0.5,
            texture: {
              url: '//vrlab-static.ljcdn.com/release/web/jsl/arrow_3.5c2c79a5.png',
            },
            // end_tag: {
            //   position: [-1.6820100545883179, 0.01284792484609465, 0.07329510152339935],
            //   data: {
            //     text: '终点',
            //     icon_url: 'https://vrlab-static.ljcdn.com/release/web/jsl/end.702f9be0.png',
            //   },
            // },
          },
        },
        // {
        //   id: 2,
        //   pano_group: [1, 2],
        //   model_style: {
        //     visible: true,
        //     background_color: '#ffffff',
        //     background_opacity: 0.3,
        //     unit_length: 0.5,
        //     width: 0.5,
        //     texture: {
        //       url: '//vrlab-static.ljcdn.com/release/web/jsl/test.d927bebe.png'
        //     },
        //     start_tag: {
        //       id: '3',
        //       position: five.work.observers[1].standingPosition.toArray(),
        //       data: {
        //         text: '起点起点',
        //         icon_url: 'https://vrlab-static.ljcdn.com/release/web/jsl/test.804f254f.png',
        //       },
        //     },
        //     end_tag: {
        //       id: '4',
        //       position: five.work.observers[2].standingPosition.toArray(),
        //       data: {
        //         text: '终点',
        //         icon_url: 'https://vrlab-static.ljcdn.com/release/web/jsl/end.702f9be0.png',
        //       },
        //     },
        //   },
        // },
      ],
    }
    await guideLine.load(data)
    setCurrentObserversData(five.work.observers)

    if (visible) {
      handleVisibleChange(true)
    } else {
      handleVisibleChange(false)
    }
  }

  // 选择坐标点
  const handleToggle = (value: number) => () => {
    const currentIndex = currentGuideLine.indexOf(value)
    const newChecked = [...currentGuideLine]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setCurrentGuideLine(newChecked)
  }

  return (
    <Stack spacing={2} direction="row" sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
      <Stack spacing={2} direction="column" sx={{ backgroundColor: 'transparent' }}>
        <Button variant="contained" onClick={() => handleVisibleChange(!visible)}>
          {visible ? '隐藏' : '显示'}
        </Button>
        <Button variant="contained" onClick={() => reloadGuideLine(true)}>
          重载路径
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            const item = guideLine.getGuideLineItemByID(1)
            item?.walk()
          }}
        >
          播放
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            const item = guideLine.getGuideLineItemByID(1)
            item?.modelItem.flicker()
          }}
        >
          闪烁
        </Button>
        <Button variant="contained" onClick={() => five.changeMode('Mapview')}>
          切换到模型
        </Button>
        <Button variant="contained" onClick={() => five.changeMode('Panorama')}>
          切换到全景
        </Button>
      </Stack>
      <Stack spacing={2} direction="column" sx={{ backgroundColor: 'transparent' }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>当前路径：{currentGuideLine?.join(',')}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>选择节点，添加到当前路径中，然后点击重载路径</Typography>
            <List
              sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 },
              }}
            >
              {observersData?.map((item) => {
                const labelId = `checkbox-list-label-${item.panoIndex}`
                return (
                  <ListItem key={item.panoIndex} disablePadding>
                    <ListItemButton role={undefined} onClick={handleToggle(item.panoIndex)} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={currentGuideLine.indexOf(item.panoIndex) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={`Available PanoIndex ${item.panoIndex}`} />
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Stack>
  )
}

export default GuideLinePluginUse
