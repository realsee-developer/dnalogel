import * as React from 'react'
import { unsafe__useFiveInstance, useFiveModelReadyState, useFiveState } from '@realsee/five/react'
import { Box, Slider, Switch, FormGroup, FormControlLabel } from '@mui/material'
import { Five } from '@realsee/five'
import type { ModelViewPlugin } from '@realsee/dnalogel'

const MiniModelPanel: React.FC = () => {
  const [fiveState, setFiveState] = useFiveState()
  const five = unsafe__useFiveInstance()
  const miniModeRef = React.useRef<HTMLDivElement>(null)
  const fiveModeReadyState = useFiveModelReadyState()
  const [checkedState, setCheckedState] = React.useState({
    latitude: false,
    longitude: false,
    currentPanoIndex: false,
  })
  const [lockedLatitude, setLockedLatitude] = React.useState(0)
  const [lockedLongitude, setLockedLongitude] = React.useState(0)
  const plugin = five.plugins.modelViewPlugin as ReturnType<typeof ModelViewPlugin>

  // React.useEffect(() => {
  //   Object.assign(window, { plugin })
  // }, [])

  function calculateLatitude(value: number) {
    return Math.ceil((value / 100) * (Math.PI / 2) * 10000) / 10000
  }

  function calculateLongitude(value: number) {
    return Math.ceil((value / 100) * Math.PI * 10000) / 10000
  }

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState({
      ...checkedState,
      [event.target.name]: event.target.checked,
    })
  }

  function handleLatitudeSliderChange(event: Event, newValue: number | number[]) {
    setLockedLatitude(newValue as number)
  }

  function handleLongitudeSliderChange(event: Event, newValue: number | number[]) {
    setLockedLongitude(newValue as number)
  }

  React.useEffect(() => {
    if (!miniModeRef.current || fiveState.mode !== Five.Mode.Panorama) return
    five.plugins.modelViewPlugin.appendTo(miniModeRef.current)
  }, [fiveState.mode, fiveModeReadyState])

  React.useEffect(() => {
    const config: Parameters<typeof plugin['changeConfigs']>[0] = {
      lookAtCurrentCamera: checkedState.currentPanoIndex,
      lockedLatitude: checkedState.latitude ? calculateLatitude(lockedLatitude) : null,
      lockedLongitude: checkedState.longitude ? calculateLongitude(lockedLongitude) : null,
    }
    plugin.changeConfigs(config)
  }, [lockedLatitude, lockedLongitude, checkedState])

  if (fiveState.mode !== Five.Mode.Panorama) return null
  if (fiveModeReadyState !== 'Loaded') return null
  return (
    <>
      <FormGroup sx={{ position: 'absolute', left: '20px', top: '20px', width: '200px' }}>
        <FormControlLabel
          control={<Switch checked={checkedState.latitude} name="latitude" onChange={handleCheckChange} />}
          label="锁定俯仰角"
        />
        <Slider
          value={lockedLatitude}
          disabled={!checkedState.latitude}
          defaultValue={0}
          aria-label="Default"
          valueLabelDisplay="auto"
          scale={calculateLatitude}
          onChange={handleLatitudeSliderChange}
        />
        <FormControlLabel
          control={<Switch checked={checkedState.longitude} name="longitude" onChange={handleCheckChange} />}
          label="锁定水平角"
        />
        <Slider
          value={lockedLongitude}
          disabled={!checkedState.longitude}
          defaultValue={0}
          aria-label="Default"
          valueLabelDisplay="auto"
          scale={calculateLongitude}
          onChange={handleLongitudeSliderChange}
        />
        <FormControlLabel
          control={<Switch name="currentPanoIndex" checked={checkedState.currentPanoIndex} onChange={handleCheckChange} />}
          label="锁定当前点位"
        />
      </FormGroup>
      <Box
        onClick={() => setFiveState({ mode: 'Floorplan' })}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '60px',
          right: '20px',
          padding: '10px', // 注意: 插件内部无法获知 padding 值，如有需要，请务必传入 size
          width: '500px',
          height: '500px',
          boxSizing: 'border-box',
          backgroundColor: 'rgba(0, 0, 0, .2)',
          pointerEvents: 'all',
        }}
        ref={miniModeRef}
      />
    </>
  )
}

export default MiniModelPanel
