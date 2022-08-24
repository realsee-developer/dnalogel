import * as React from 'react'
import { unsafe__useFiveInstance, useFiveState } from '@realsee/five/react'
import { Box } from '@mui/material'
import { Five } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import type { FloorplanServerData } from '@realsee/dnalogel'

const PanoDoorLabels: React.FC = () => {
  const [fiveState, setFiveState] = useFiveState()
  const floorplanServerData: FloorplanServerData | null = useFetchDatas(
    DATA_TYPES.FLOOR_PLAN_SERVER_PLUGIN_DATA,
  )
  const doorLabelsRef = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState<boolean>(false)
  const five = unsafe__useFiveInstance()
  const panoDoorLabelPlugin = five.plugins.panoDoorLabelPlugin

  React.useEffect(() => {
    if (!doorLabelsRef.current || fiveState.mode !== Five.Mode.Panorama) return
    panoDoorLabelPlugin.appendTo(doorLabelsRef.current)
  }, [])

  React.useEffect(() => {
    if (!floorplanServerData || JSON.stringify(floorplanServerData) === '{}') return
    panoDoorLabelPlugin.loadData(floorplanServerData)
  }, [floorplanServerData])

  React.useEffect(() => {
    if (fiveState.mode === Five.Mode.Panorama) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [fiveState.mode])

  return <Box ref={doorLabelsRef} />
}

export default PanoDoorLabels
