import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Five, Mode } from '@realsee/five'
import { useFiveState } from '@realsee/five/react'

export function FiveModeSwitcher(props: { modeList: Mode[] }) {
  const [fiveState, setFiveState] = useFiveState()

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
          {props.modeList.map((mode) => (
            <BottomNavigationAction key={mode} label={mode} value={mode} />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  )
}
