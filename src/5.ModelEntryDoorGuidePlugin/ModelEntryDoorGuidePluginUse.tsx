import * as React from "react";
import { unsafe__useFiveInstance, useFiveEventCallback, useFiveState } from "@realsee/five/react";
import { BottomNavigation, BottomNavigationAction, Box, Paper } from '@mui/material'
import { floorplanServerData } from "../mockData";
import { Five, Mode } from "@realsee/five";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ViewInArIcon from "@mui/icons-material/ViewInAr";



const ModelEntryDoorGuidePluginUse: React.FC = () => {
    const [fiveState, setFiveState] = useFiveState();
    const five = unsafe__useFiveInstance()

    useFiveEventCallback('modelLoaded', async () => {
        await five.plugins.modelEntryDoorGuidePlugin.load()

        // 为了显示效果，将 five state 置为较好观察模型底盘的角度
        setFiveState({
            mode: Five.Mode.Floorplan,
            fov: 80,
            latitude: -0.06631286321852166,
            longitude: 2.424613849671955,
            panoIndex: 0
        })

        // 显示入户门
        five.plugins.modelEntryDoorGuidePlugin.enable()
    })

    React.useEffect(() => {

    }, [fiveState.mode])

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

export default ModelEntryDoorGuidePluginUse
