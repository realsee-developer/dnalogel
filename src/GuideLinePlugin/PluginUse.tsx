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
import { FiveModeSwitcher } from '../components/FiveModeSwitcher'
import data3 from './mocks/data3.json'
import data2 from './mocks/data2.json'
import data from './mocks/data.json'

const GuideLinePluginUse = () => {
  const id = 624
  const five = unsafe__useFiveInstance()
  const [visible, setVisible] = useState<boolean>(true)
  // 可选的路径
  const [checkedObserverGroup, setCheckedObserverGroup] = useState<boolean[]>([true, true, true, true, true, true, true])
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
  }, [visible, five])

  // 重载路径
  useEffect(() => {
    if (panoIndexGroup.length === 0) return guideLine.clear()
    // guideLine.load(data as any)
    guideLine.load({
      lines: [
        {
          id,
          pano_group: panoIndexGroup,
          panorama_style: {
            visible: true,
            border_color: '#FF0000',
            background_color: '#FFFFFF',
            background_opacity: 0.4,
            border_opacity: 0.4,
            border_width: 0.05,
            background_clip: 'border-box',
            color: '#FFFFFF',
            unit_length: 0.5,
            opacity: 0.8,
            width: 0.5,
          },
          model_style: {
            visible: true,
            background_color: '#FFFFFF',
            background_opacity: 0.6,
            border_color: '#FFFFFF',
            border_opacity: 0.4,
            border_width: 0.05,
            background_clip: 'border-box',
            color: 'green',
            unit_length: 0.5,
            width: 0.5,
          },
        },
      ],
    })
    return () => guideLine.clear()
  }, [panoIndexGroup, five])

  useFiveEventCallback('loaded', (_, work) => {
    setCheckedObserverGroup((checkedObserverGroup) => {
      return work.observers.map((_, index) => {
        if (typeof checkedObserverGroup[index] === 'boolean') {
          return checkedObserverGroup[index]
        } else {
          return false
        }
      })
    })
  })

  return (
    <>
      <FiveModeSwitcher modeList={['Mapview', 'Panorama']} />
      <Stack spacing={2} direction="row" sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
        <Stack spacing={2} direction="column" sx={{ backgroundColor: 'transparent' }}>
          <Button variant="contained" onClick={() => setVisible(!visible)}>
            {visible ? '隐藏' : '显示'}
          </Button>
        </Stack>
        <Stack spacing={2} direction="column" sx={{ backgroundColor: 'transparent' }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>当前路径：{panoIndexGroup?.join(',')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>选择节点，添加到当前路径中</Typography>
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
                          <Checkbox
                            edge="start"
                            checked={checked}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
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
    </>
  )
}

export default GuideLinePluginUse
