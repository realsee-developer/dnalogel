import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Five, Mode } from '@realsee/five'
import { useFiveState } from '@realsee/five/react'

const ModeName: Record<Mode, string> = {
  Panorama: '全景(Panorama)',
  Mapview: '模型(Mapview)',
  Model: '模型(Model)',
  Floorplan: '模型(Floorplan)',
  Topview: '模型(Topview)',
  VRPanorama: 'VRPanorama',
  XRPanorama: 'XRPanorama',
}

export function FiveModeSwitcher(props?: { modeList?: Mode[] }) {
  const [fiveState, setFiveState] = useFiveState()
  const modeList = props?.modeList ?? ['Panorama', 'Mapview']

  return (
    <>
      <Paper sx={{ position: 'fixed', bottom: 0 }} style={{ borderRadius: '4px', overflow: 'hidden' }}>
        <BottomNavigation
          showLabels
          value={fiveState.mode}
          onChange={(_, newValue: Mode) => {
            setFiveState({ mode: newValue })
          }}
        >
          {modeList.map((mode) => (
            <BottomNavigationAction style={{ width: 100 }} key={mode} label={ModeName[mode]} value={mode} />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  )
}
