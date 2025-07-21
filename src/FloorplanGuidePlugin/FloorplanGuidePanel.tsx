import * as React from 'react'
import { unsafe__useFiveInstance, useFiveState } from '@realsee/five/react'
import { Box } from '@mui/material'
import { Five } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import type { FloorplanServerData } from '@realsee/dnalogel'

const FloorplanGuidePanel: React.FC = () => {
  const [fiveState, setFiveState] = useFiveState()
  const floorplanServerData: FloorplanServerData = useFetchDatas(DATA_TYPES.FLOOR_PLAN_SERVER_PLUGIN_DATA)
  const floorplanGuidePanelRef = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState<boolean>(false)
  const five = unsafe__useFiveInstance()
  const floorplanGuidePlugin = five.plugins.floorplanGuidePlugin
  floorplanGuidePlugin.changeConfigs({ hoverEnable: true })

  React.useEffect(() => {
    if (!floorplanGuidePanelRef.current || fiveState.mode !== Five.Mode.Panorama) return
    floorplanGuidePlugin.appendTo(floorplanGuidePanelRef.current)
  }, [five])

  React.useEffect(() => {
    if (!floorplanServerData || JSON.stringify(floorplanServerData) === '{}') return
    floorplanGuidePlugin.load(floorplanServerData)
  }, [floorplanServerData, five])

  React.useEffect(() => {
    if (fiveState.mode === Five.Mode.Panorama) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [fiveState.mode])

  return (
    <Box
      sx={{
        display: `${visible ? 'flex' : 'none'}`,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 0,
        width: '50%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .2)',
      }}
      ref={floorplanGuidePanelRef}
    />
  )
}

export default FloorplanGuidePanel
