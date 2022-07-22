import * as React from 'react'
import { unsafe__useFiveInstance, useFiveEventCallback } from '@realsee/five/react'
import useFetchDatas, { DATA_TYPES } from "../utils/useFetchDatas";

const PanoCompassPluginUse = () => {
  const five = unsafe__useFiveInstance()
  const floorplanServerData = useFetchDatas(DATA_TYPES.FLOOR_PLAN_SERVER_PLUGIN_DATA)

  useFiveEventCallback('modelLoaded', async () => {
    if (!floorplanServerData || JSON.stringify(floorplanServerData) === '{}') return

    // 朝北方向来源于户型图数据
    const NORTH_RAD = floorplanServerData?.computed_data?.entrance?.north_rad
    // 载入朝北数据

    await five.plugins.panoCompassPlugin.load({ north_rad: NORTH_RAD })
  }, [floorplanServerData])

  return null
}

export default PanoCompassPluginUse
