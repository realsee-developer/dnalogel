/* eslint-disable react/jsx-curly-brace-presence */
import * as React from 'react';
import { Five, Mode } from "@realsee/five"
import { unsafe__useFiveInstance, useFiveModelReadyState, useFiveState } from "@realsee/five/react";
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import useFetchDatas, { DATA_TYPES } from "../utils/useFetchDatas";


const TopviewFloorplanPluginUse = () => {
    const five = unsafe__useFiveInstance()
    const [fiveState, setFiveState] = useFiveState()
    const fiveModelReadyState = useFiveModelReadyState()
    const floorplanServerData = useFetchDatas(DATA_TYPES.FLOOR_PLAN_SERVER_PLUGIN_DATA)

    React.useEffect(() => {
        if(!floorplanServerData || JSON.stringify(floorplanServerData) === '{}') return
        const topviewFloorplanPlugin = five.plugins.topviewFloorplanPlugin
        topviewFloorplanPlugin.load(floorplanServerData)
        topviewFloorplanPlugin.appendTo(document.querySelector('.plugin-full-screen-container'))
    }, [floorplanServerData])

    if(fiveModelReadyState !== 'Loaded') return null
    return (
        <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: 'transparent' }}
            className="topview-floorplan-plugin-use"
        >
            <BottomNavigation
                key="topview-floorplan-plugin"
                showLabels
                value={fiveState.mode}
                onChange={(_, newValue: Mode) => {
                    setFiveState({ mode: newValue });
                }}
            >
                <BottomNavigationAction key={1} label="全景漫游" icon={<DirectionsWalkIcon/>} value={Five.Mode.Panorama}/>
                <BottomNavigationAction key={2} label="俯视模型" icon={<ViewInArIcon/>} value={Five.Mode.Topview}/>
            </BottomNavigation>
        </Paper>
    )

};

export default TopviewFloorplanPluginUse;
