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

interface PluginShowPropTypes {

}

const PluginShow = (props: PluginShowPropTypes) => {
    const [fiveState, setFiveState] = useFiveState()
    const five = unsafe__useFiveInstance()
    const fiveModeReadyState = useFiveModelReadyState()
    // const modelItemLabels = useFetchDatas(DATATYPES.MODEL_ROOM_LABEL_PLUGIN_DATA)
    const modelItemLabels = {
        "model_item_labels": [
            {
                "id": "u-0E2X34Kv9q7K29",
                "name": "\u4e09\u4eba\u6c99\u53d1",
                "center": [0.011001, 41.978, -0.019002],
                "position": {
                    "x": -0.00406,
                    "y": -0.818605,
                    "z": -0.55034
                },
                "type": ["furniture", "sofa", "siamesed_sofa"]
            },
            {
                "id": "u-s5YwhMKv9Q7KfN",
                "name": "\u8336\u51e0",
                "center": [0, 28.503649, 0],
                "position": {
                    "x": 0.005735,
                    "y": -0.818592,
                    "z": 0.398252
                },
                "type": [
                    "furniture",
                    "table",
                    "coffee_table",
                    "coffee_table_4"
                ],
            },
            {
                "id": "u-5A3b6IKV9q7iUg",
                "name": "\u5e8a\u5934\u67dc",
                "center": [
                    -0.00965,
                    27.65765,
                    0.2111
                ],
                "position": {
                    "x": 4.39022,
                    "y": 0,
                    "z": 8.642688
                },
                "type": [
                    "furniture",
                    "cabinet",
                    "beside_table"
                ],
            }
        ]

    }

    React.useEffect(() => {
        const wrapper = document.querySelector('.plugin-full-screen-container')
        if (wrapper) {
            five.plugins.modelItemLabelPlugin.appendTo(wrapper)
        }
    }, [])

    useFiveEventCallback('modelLoaded', () => {
        if (!modelItemLabels) return
        five.plugins.modelItemLabelPlugin.load(modelItemLabels)
    }, [modelItemLabels])

    if (fiveModeReadyState !== 'Loaded') return null
    return (
        <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: 'transparent' }}
            className="model-item-label-plugin-show"
        >
            <BottomNavigation
                showLabels
                value={fiveState.mode}
                onChange={(_, newValue: Mode) => {
                    setFiveState({ mode: newValue });
                }}
            >
                <BottomNavigationAction label="全景漫游" icon={<DirectionsWalkIcon />} value={Five.Mode.Panorama} />
                <BottomNavigationAction label="空间总览" icon={<ViewInArIcon />} value={Five.Mode.Floorplan} />
            </BottomNavigation>
        </Paper>
    )

};

export default PluginShow;
