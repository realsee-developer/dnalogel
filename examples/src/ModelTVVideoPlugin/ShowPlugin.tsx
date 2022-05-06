import * as React from 'react';
import {
    unsafe__useFiveInstance,
    useFiveEventCallback,
    useFiveModelReadyState,
    useFiveState
} from "@realsee/five/react";
import { ModelTVVideoPlugin } from "@realsee/dnalogel";
import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";
import { Five, Mode } from "@realsee/five";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

const newPoints = [
    {
        topLeft: {
            x: -2.4397027504951727,
            y: 1.321611372744071,
            z: 0.9610979887310558
        },
        bottomLeft: {
            x: -2.4441131950417114,
            y: 0.7002877178083624,
            z: 0.9610504005830736
        },
        bottomRight: {
            x: -3.5409557417698365,
            y: 0.7129315526064004,
            z: 0.9610934983911138
        },
        topRight: {
            x: -3.5415800323154465,
            y: 1.3188503177101172,
            z: 0.961031973361969
        },
    }
]

const TEST_DATA = {
    video_src: 'https://vrlab-public.ljcdn.com/release/web/videos/tv_ads/360/009.mp4',
    video_poster_src: 'https://vrlab-public.ljcdn.com/release/web/videos/posters/002.9203cf99.jpg',
    points: newPoints
    // points: [ // 左上、左下、右下、右上
    //     [
    //         {
    //             x: -2.4397027504951727,
    //             y: 1.321611372744071,
    //             z: 0.9610979887310558
    //         },
    //         {
    //             x: -2.4441131950417114,
    //             y: 0.7002877178083624,
    //             z: 0.9610504005830736
    //         },
    //         {
    //             x: -3.5409557417698365,
    //             y: 0.7129315526064004,
    //             z: 0.9610934983911138
    //         },
    //         {
    //             x: -3.5415800323154465,
    //             y: 1.3188503177101172,
    //             z: 0.961031973361969
    //         },
    //     ]
    // ]
}

interface ShowPluginPropTypes {

}

const ShowPlugin = (props: ShowPluginPropTypes) => {
    const fiveModelReadyState = useFiveModelReadyState()
    const [fiveState, setFiveState] = useFiveState()
    const videoRef = React.useRef<HTMLVideoElement>(null)
    const five = unsafe__useFiveInstance()

    useFiveEventCallback('modelLoaded', async () => {
        if (!videoRef.current) return

        const modelTVVideoPlugin = five.plugins.modelTVVideoPlugin as ReturnType<typeof ModelTVVideoPlugin>
        await modelTVVideoPlugin.load(TEST_DATA)
        // await modelTVVideoPlugin.load(TEST_DATA, videoRef.current)
        modelTVVideoPlugin.enable()

        // 为了优质的视觉效果，手动游走至可看到电视的视角
        setFiveState({ panoIndex: 2, fov: 120, latitude: 0.22534459988940497, longitude: 3.60942475821387 })

    })

    if (fiveModelReadyState !== 'Loaded') return null
    return (
        <Box>
            <Box
                sx={{
                    'position': 'absolute',
                    'left': '13px',
                    'bottom': '60px',
                    'width': '160px',
                    'height': '90px'
                }}
            >
                <video ref={videoRef} style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                }} />
            </Box>
            <Paper
                sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: 'transparent' }}
                className="model-TV-video-plugin-show"
            >
                <BottomNavigation
                    showLabels
                    value={fiveState.mode}
                    onChange={(_, newValue: Mode) => {
                        setFiveState({ mode: newValue });
                    }}
                    sx={{ backgroundColor: 'transparent' }}
                >
                    <BottomNavigationAction label="全景漫游" icon={<DirectionsWalkIcon />} value={Five.Mode.Panorama} />
                    <BottomNavigationAction label="空间总览" icon={<ViewInArIcon />} value={Five.Mode.Floorplan} />
                </BottomNavigation>
            </Paper>
        </Box>
    )
};

export default ShowPlugin;
