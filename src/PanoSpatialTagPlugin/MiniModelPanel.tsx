import * as React from 'react'
import { unsafe__useFiveInstance, useFiveModelReadyState, useFiveState } from '@realsee/five/react'
import { Box } from '@mui/material'
import { Five } from '@realsee/five'

const MiniModelPanel: React.FC = () => {
  const [fiveState, setFiveState] = useFiveState()
  const five = unsafe__useFiveInstance()
  const miniModeRef = React.useRef<HTMLDivElement>(null)
  const fiveModeReadyState = useFiveModelReadyState()

  React.useEffect(() => {
    if (!miniModeRef.current || fiveState.mode !== Five.Mode.Panorama) return
    five.plugins.modelViewPlugin.appendTo(miniModeRef.current, { width: 90, height: 120 })
  }, [fiveState.mode, fiveModeReadyState])

  if (fiveState.mode !== Five.Mode.Panorama) return null
  if (fiveModeReadyState !== 'Loaded') return null
  return (
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
        width: '110px',
        height: '140px',
        boxSizing: 'border-box',
        backgroundColor: 'rgba(0, 0, 0, .2)',
      }}
      ref={miniModeRef}
    />
  )
}

export default MiniModelPanel
