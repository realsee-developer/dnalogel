import * as React from 'react'
import { useState, useEffect } from 'react'
import { unsafe__useFiveInstance, useFiveEventCallback } from '@realsee/five/react'
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
import data from './mocks/data.json'

const GuideLinePluginUse = () => {
  const id = 624
  const five = unsafe__useFiveInstance()
  const [visible, setVisible] = useState<boolean>(true)
  // 可选的路径
  const [checkedObserverGroup, setCheckedObserverGroup] = useState<boolean[]>([])
  const guideLine: GuideLinePluginType.GuideLinePluginExportType = five.plugins.guideLinePlugin
  const panoIndexGroup = React.useMemo(
    () =>
      checkedObserverGroup
        .map((checked, index) => ({ checked, index }))
        .filter(({ checked }) => checked)
        .map(({ index }) => index),
    [checkedObserverGroup],
  )

  Object.assign(window, { guideLine })

  // 显示/隐藏路径
  useEffect(() => {
    visible ? guideLine.show() : guideLine.hide()
  }, [visible])

  // 重载路径
  useEffect(() => {
    // if (panoIndexGroup.length === 0) return guideLine.clear()
    // guideLine.load({
    //   lines: [{ id, pano_group: panoIndexGroup, panorama_style: { visible: true } }],
    // })
    guideLine.load(data as any)
    return () => guideLine.clear()
  }, [panoIndexGroup])

  useFiveEventCallback('loaded', (_, work) => {
    setCheckedObserverGroup(work.observers.map(() => false))
  })

  return (
    <Stack spacing={2} direction="row" sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
      <Stack spacing={2} direction="column" sx={{ backgroundColor: 'transparent' }}>
        <Button variant="contained" onClick={() => setVisible(!visible)}>
          {visible ? '隐藏' : '显示'}
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            const item = guideLine.getGuideLineItemByID(id)
            item?.walk()
          }}
        >
          播放
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
            <Typography>当前路径：{panoIndexGroup?.join(',')}</Typography>
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
              {checkedObserverGroup?.map((checked, index) => {
                const labelId = `checkbox-list-label-${index}`
                return (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      role={undefined}
                      onClick={() =>
                        setCheckedObserverGroup(checkedObserverGroup.map((value, _index) => (_index === index ? !value : value)))
                      }
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox edge="start" checked={checked} tabIndex={-1} disableRipple inputProps={{ 'aria-labelledby': labelId }} />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={`Available PanoIndex ${index}`} />
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
