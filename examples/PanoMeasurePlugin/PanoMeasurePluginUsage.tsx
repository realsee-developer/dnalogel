import { Box, Paper, ButtonGroup, Button } from '@mui/material'
import PanoMeasurePlugin from '@realsee/dnalogel/libs/PanoMeasurePlugin'
import { unsafe__useFiveInstance, useFiveEventCallback } from '@realsee/five/react'
import * as React from 'react'
import { useEffect } from "react";

interface PanoRulerPluginUsePropTypes {
}

const PanoMeasurePluginUsage = (props: PanoRulerPluginUsePropTypes) => {
    const five = unsafe__useFiveInstance()
    const panoMeasurePlugin = five.plugins.panoMeasurePlugin as ReturnType<typeof PanoMeasurePlugin>
    const [measureEnableBtn, setMeasureEnableBtn] = React.useState(false)

    useEffect(() => {
        const container = document.querySelector('.plugin-full-screen-container') as HTMLElement
        if (container) {
            panoMeasurePlugin.appendTo(container)
        }
    }, [])

    useFiveEventCallback('modelLoaded', async () => {
        panoMeasurePlugin.open()
        panoMeasurePlugin.hook.on("modeChange", (mode) => {
            console.log("__mode__", mode)
        })
    })

    const handleMeasureEnable = () => {
        panoMeasurePlugin.open()
        setMeasureEnableBtn(false)
    }

    return (
        <Box>
            <Paper sx={{ display: `${measureEnableBtn ? 'block' : 'none'}`, position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
                <Button onClick={handleMeasureEnable}>
                    开启测量工具
                </Button>
            </Paper>
        </Box>
    )
}

export default PanoMeasurePluginUsage
