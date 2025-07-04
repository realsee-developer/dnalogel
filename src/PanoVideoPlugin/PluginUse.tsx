import { unsafe__useFiveInstance } from '@realsee/five/react'
import { Paper, ButtonGroup, Button } from '@mui/material'
import React from 'react'
import { FiveModeSwitcher } from '../components/FiveModeSwitcher'
import { PanoVideoPluginController } from '@realsee/dnalogel/dist/PanoVideoPlugin/Controller'

const data = {}

const PluginUse = () => {
  const five = unsafe__useFiveInstance()
  const pluginInstance = five.plugins.panoVideoPlugin as PanoVideoPluginController

  React.useEffect(() => {
    if (!five.getElement()) return
    pluginInstance.load({
      list: [
        {
          render_id: '123',
          pano_index: 305,
          video_list: [
            {
              render_id: '12345',
              "url": "https://vrlab-public.ljcdn.com/release/auto3dhd/935c1f75ec30cfd3edbf1332b6c1370d/embedded_videos/270/ac172fc976b27498020ce039e2c19a9a.mp4",
              "origin": [
                0.842,
                0.292,
                0.16325,
                0.364
              ],
            },
          ]
        }
      ]
    }, {initialState: {enabled: false}})

    pluginInstance.hooks.on('click', (e) => {
      e.preventDefault()
      const video = e.target.video
      video.paused ? video.play() : video.pause()
    })
    return () => {
      pluginInstance.dispose()
    }
  }, [five])

  return (
    <>
      <FiveModeSwitcher modeList={['Panorama', 'Mapview', 'Floorplan']} />
      <Paper sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
        <ButtonGroup size="large" aria-label="large button group" orientation="vertical">
          <Button onClick={() => pluginInstance?.disable()}>disable</Button>
          <Button onClick={() => pluginInstance?.enable()}>enable</Button>
        </ButtonGroup>
      </Paper>
    </>
  )
}

export default PluginUse
