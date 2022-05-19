import { Box, Button, Paper } from '@mui/material'
import { PanoRulerPlugin } from '@realsee/dnalogel'
import { unsafe__useFiveInstance, useFiveEventCallback, useFiveModelReadyState } from '@realsee/five/react'
import * as React from 'react'
import useFetchDatas, { DATATYPES } from "../utils/useFetchDatas";

interface PanoRulerPluginUsePropTypes {
}

enum OPERATE_OPTIONS {
    OPEN = '开启标尺',
    CLOSE = '关闭标尺'
}

const PanoRulerPluginUsage = (props: PanoRulerPluginUsePropTypes) => {
    const fiveModelReadyState = useFiveModelReadyState()
    const five = unsafe__useFiveInstance()
    const panoRulerPlugin = five.plugins.panoRulerPlugin as ReturnType<typeof PanoRulerPlugin>
    const roomInfo = useFetchDatas(DATATYPES.ROOM_INFO, 'pWLy9nekmQdMXqja')
    const roomRules = useFetchDatas(DATATYPES.ROOM_RULES, 'pWLy9nekmQdMXqja')

    // 标尺状态
    const [rulerEnable, setRulerEnable] = React.useState(panoRulerPlugin.state.enable)

    useFiveEventCallback('modelLoaded', async () => {
        if (!roomInfo || !roomRules) return

        await panoRulerPlugin.load(roomInfo, roomRules, {
            distanceText: (distance) => `约 ${distance.toFixed(1)}米`,
        })

        panoRulerPlugin.enable()
        setRulerEnable(panoRulerPlugin.state.enable)
    }, [roomInfo, roomRules])

    const handleRulerEnable = () => {
        panoRulerPlugin[panoRulerPlugin.state.enable ? 'disable' : 'enable']()
        setRulerEnable(panoRulerPlugin.state.enable)
    }

    if (fiveModelReadyState !== 'Loaded') return null
    return (
        <Box>
            <Paper sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
                <Button onClick={handleRulerEnable}>
                    {rulerEnable ? OPERATE_OPTIONS.CLOSE : OPERATE_OPTIONS.OPEN}
                </Button>
            </Paper>
        </Box>
    )
}

export default PanoRulerPluginUsage
