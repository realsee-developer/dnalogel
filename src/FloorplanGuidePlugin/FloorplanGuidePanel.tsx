import * as React from 'react'
import { unsafe__useFiveInstance, useFiveState } from '@realsee/five/react'
import { Box, Button, Stack, Typography, Paper } from '@mui/material'
import { Five } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import type { FloorplanServerData } from '@realsee/dnalogel'

const FloorplanGuidePanel: React.FC = () => {
  const [fiveState, setFiveState] = useFiveState()
  const floorplanServerData: FloorplanServerData = useFetchDatas(DATA_TYPES.FLOOR_PLAN_SERVER_PLUGIN_DATA)
  const floorplanGuidePanelRef = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState<boolean>(false)
  const [roomLabelsEnabled, setRoomLabelsEnabled] = React.useState<boolean>(false)
  const [roomNameEnabled, setRoomNameEnabled] = React.useState<boolean>(true)
  const [roomAreaEnabled, setRoomAreaEnabled] = React.useState<boolean>(true)
  const [compassEnabled, setCompassEnabled] = React.useState<boolean>(false)
  const five = unsafe__useFiveInstance()
  const floorplanGuidePlugin = five.plugins.floorplanGuidePlugin

  // 初始配置
  React.useEffect(() => {
    floorplanGuidePlugin.changeConfigs({ 
      hoverEnable: true,
      clickEnable: true,
      roomLabelsEnable: roomLabelsEnabled,
      roomNameEnable: roomNameEnabled,
      roomAreaEnable: roomAreaEnabled,
      compassEnable: compassEnabled,
      northDesc: '北',
      getRoomAreaText: (size) => (size / 1000000).toFixed(1) + '㎡'
    })
  }, [roomLabelsEnabled, roomNameEnabled, roomAreaEnabled, compassEnabled])

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
    <>
      {/* 控制面板 - 固定在屏幕左上角 */}
      {visible && (
        <Paper 
          sx={{ 
            position: 'fixed',
            top: 16,
            left: 16,
            p: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            zIndex: 1000
          }}
        >
          <Typography variant="h6" gutterBottom>房间标签控制</Typography>
          <Stack spacing={1}>
            <Button 
              variant={roomLabelsEnabled ? "contained" : "outlined"}
              size="small"
              onClick={() => setRoomLabelsEnabled(!roomLabelsEnabled)}
            >
              {roomLabelsEnabled ? '隐藏房间标签' : '显示房间标签'}
            </Button>
            
            {roomLabelsEnabled && (
              <>
                <Button 
                  variant={roomNameEnabled ? "contained" : "outlined"}
                  size="small"
                  onClick={() => setRoomNameEnabled(!roomNameEnabled)}
                >
                  {roomNameEnabled ? '隐藏房间名称' : '显示房间名称'}
                </Button>
                
                <Button 
                  variant={roomAreaEnabled ? "contained" : "outlined"}
                  size="small"
                  onClick={() => setRoomAreaEnabled(!roomAreaEnabled)}
                >
                  {roomAreaEnabled ? '隐藏房间面积' : '显示房间面积'}
                </Button>
              </>
            )}
            
            <Button 
              variant={compassEnabled ? "contained" : "outlined"}
              size="small"
              onClick={() => setCompassEnabled(!compassEnabled)}
            >
              {compassEnabled ? '隐藏指北针' : '显示指北针'}
            </Button>
          </Stack>
        </Paper>
      )}

      {/* 户型图容器 */}
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
      >
        <div style={{ height: 400, width: 400 }} ref={floorplanGuidePanelRef} />
      </Box>
    </>
  )
}

export default FloorplanGuidePanel
