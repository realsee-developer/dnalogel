import * as React from "react";
import {
    unsafe__useFiveInstance,
    useFiveEventCallback,
    useFiveModelReadyState,
    useFiveState
} from "@realsee/five/react";
import { BottomNavigation, BottomNavigationAction, Box, Paper } from '@mui/material'
import { Five, Mode } from "@realsee/five";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import useFetchDatas, { DATATYPES } from "../utils/useFetchDatas";

const ModelChassisCompassPluginUse: React.FC = () => {
    const [fiveState, setFiveState] = useFiveState();
    const five = unsafe__useFiveInstance()
    const fiveModelReadyState = useFiveModelReadyState()
    const floorplanServerData = useFetchDatas(DATATYPES.FLOOR_PLAN_SERVER_PLUGIN_DATA)

    useFiveEventCallback('modelLoaded', async () => {
        if(!floorplanServerData ||  JSON.stringify(floorplanServerData) === '{}') return
        // 朝北方向来源于户型图数据
        const NORTH_RAD = floorplanServerData?.computed_data?.entrance?.north_rad

        // 数据载入格式
        // {
        //     north_rad: number,
        //     fbx_url: '//vrlab-static.ljcdn.com/release/web/v3/dipan3/dipan.FBX'
        // }

        // 载入朝北数据
        await five.plugins.modelChassisCompassPlugin.load({north_rad: NORTH_RAD})

        // 为了显示效果，将 five state 置为较好观察模型底盘的角度
        setFiveState({
            panoIndex: 0,
            fov: 106,
            latitude: -0.07983208586321928,
            longitude: 1.52265306535823,
            mode: Five.Mode.Floorplan
        })

        // 显示模型底盘
        five.plugins.modelChassisCompassPlugin.enable()
    }, [floorplanServerData])

    if(fiveModelReadyState !== 'Loaded') return null
    return (
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: 'transparent' }}>
            <BottomNavigation
                showLabels
                value={fiveState.mode}
                onChange={(_, newValue: Mode) => {
                    setFiveState({ mode: newValue });
                }}
            >
                <BottomNavigationAction label="全景漫游" icon={<DirectionsWalkIcon/>} value={Five.Mode.Panorama}/>
                <BottomNavigationAction label="空间总览" icon={<ViewInArIcon/>} value={Five.Mode.Floorplan}/>
            </BottomNavigation>
        </Paper>
    )
}

export default ModelChassisCompassPluginUse
