import * as React from 'react';
import {
    unsafe__useFiveInstance,
    useFiveEventCallback,
    useFiveModelReadyState,
    useFiveState
} from "@realsee/five/react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Five, Mode } from "@realsee/five";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import useFetchDatas, { DATATYPES } from "../utils/useFetchDatas";

interface ModelRoomLabelPluginShowPropTypes {

}

const ModelRoomLabelPluginShow = (props: ModelRoomLabelPluginShowPropTypes) => {
    const [fiveState, setFiveState] = useFiveState()
    const five = unsafe__useFiveInstance()
    const fiveModeReadyState = useFiveModelReadyState()
    const modelRoomLabels = useFetchDatas(DATATYPES.MODEL_ROOM_LABEL_PLUGIN_DATA)

    React.useEffect(() => {
        const wrapper = document.querySelector('.plugin-full-screen-container')
        if (wrapper) {
            five.plugins.modelRoomLabelPlugin.appendTo(wrapper)
        }
    }, [])

    useFiveEventCallback('modelLoaded', () => {
        if (!modelRoomLabels) return
        five.plugins.modelRoomLabelPlugin.load(modelRoomLabels)
    }, [modelRoomLabels])

    if (fiveModeReadyState !== 'Loaded') return null
    return (
        <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: 'transparent' }}
            className="model-roomlabel-plugin-show"
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

export default ModelRoomLabelPluginShow;
