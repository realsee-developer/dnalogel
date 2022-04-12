import * as React from 'react';
import { Five, Mode } from "@realsee/five"
import { unsafe__useFiveInstance, useFiveModelReadyState, useFiveState } from "@realsee/five/react";
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { floorplanServerData } from '../mockData'


interface TopviewFloorplanPluginUsePropTypes {}

const TopviewFloorplanPluginUse = (props: TopviewFloorplanPluginUsePropTypes) => {
    const five = unsafe__useFiveInstance()
    const [fiveState, setFiveState] = useFiveState()
    const fiveModelReadyState = useFiveModelReadyState()

    React.useEffect(() => {
        const topviewFloorplanPlugin = five.plugins.topviewFloorplanPlugin
        topviewFloorplanPlugin.load(floorplanServerData)
    }, [])

    if(fiveModelReadyState !== 'Loaded') return null
    return (
        <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: 'transparent' }}
            className="topview-floorplan-plugin-use"
        >
            <BottomNavigation
                showLabels
                value={fiveState.mode}
                onChange={(_, newValue: Mode) => {
                    setFiveState({ mode: newValue });
                }}
            >
                <BottomNavigationAction label="全景漫游" icon={<DirectionsWalkIcon/>} value={Five.Mode.Panorama}/>
                <BottomNavigationAction label="俯视模型" icon={<ViewInArIcon/>} value={Five.Mode.Topview}/>
            </BottomNavigation>
        </Paper>
    )

};

export default TopviewFloorplanPluginUse;
