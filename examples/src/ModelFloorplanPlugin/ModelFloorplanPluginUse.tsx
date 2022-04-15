import * as React from 'react';
import { Five, Mode } from "@realsee/five"
import {
    unsafe__useFiveInstance, useFiveCurrentState,
    useFiveEventCallback,
    useFiveModelReadyState,
    useFiveState
} from "@realsee/five/react";
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { floorplanServerData } from '../mockData'

interface ModelFloorplanPluginUsePropTypes {}

const ModelFloorplanPluginUse = (props: ModelFloorplanPluginUsePropTypes) => {
    const five = unsafe__useFiveInstance()
    const [fiveState, setFiveState] = useFiveState()
    const fiveModelReadyState = useFiveModelReadyState()

    useFiveEventCallback("modelLoaded", () => {
        Promise.resolve(five.plugins.modelFloorplanPlugin.load(floorplanServerData)).then(() => {
            five.plugins.modelFloorplanPlugin.show()
        })
    })

    useFiveEventCallback("initAnimationEnded", () => {
        if (fiveState.mode === Five.Mode.Floorplan) {
            five.plugins.modelFloorplanPlugin.show()
        }
    }, [fiveState.mode])

    if (fiveModelReadyState !== 'Loaded') return null
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
                <BottomNavigationAction label="空间总览" icon={<ViewInArIcon/>} value={Five.Mode.Floorplan}/>
            </BottomNavigation>
        </Paper>
    )

};

export default ModelFloorplanPluginUse;
