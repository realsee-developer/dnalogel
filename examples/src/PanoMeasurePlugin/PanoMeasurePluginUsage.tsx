import { Box, Paper, ButtonGroup, Button } from '@mui/material'
import { PanoMeasurePlugin } from '@realsee/dnalogel'
import { unsafe__useFiveInstance, useFiveEventCallback } from '@realsee/five/react'
import * as React from 'react'
import { useEffect } from "react";

interface PanoRulerPluginUsePropTypes {
}

const PanoMeasurePluginUsage = (props: PanoRulerPluginUsePropTypes) => {
    const five = unsafe__useFiveInstance()
    const panoMeasurePlugin = five.plugins.panoMeasurePlugin as ReturnType<typeof PanoMeasurePlugin>
    const [measureEnableBtn, setMeasureEnableBtn] = React.useState<boolean>(true)

    const handlePanoMeasurePluginListener = () => {
        panoMeasurePlugin.hook.on("modeChange", (mode) => {
            console.log("__mode__", mode)
        })

        panoMeasurePlugin.hook.on("enable", () => {
            console.log('开启测量工具')
            setMeasureEnableBtn(false)
        })

        panoMeasurePlugin.hook.on("disable", () => {
            console.log('关闭测量工具')
            setMeasureEnableBtn(true)
        })
    }

    useEffect(() => {
        handlePanoMeasurePluginListener()

        const container = document.querySelector('.plugin-full-screen-container') as HTMLElement
        if (container) {
            panoMeasurePlugin.appendTo(container)
        }
    }, [])

    // useFiveEventCallback('modelLoaded', async () => {
    //     panoMeasurePlugin.enable()
    // })

    const handleMeasureEnable = (isMobile: boolean) => {
        panoMeasurePlugin.changeIsMobile(isMobile)
        panoMeasurePlugin.enable()
        setMeasureEnableBtn(false)
    }

    return (
        <Box>
            <Paper sx={{
                display: `${measureEnableBtn ? 'block' : 'none'}`,
                position: 'fixed',
                top: '10px',
                right: '10px',
                backgroundColor: 'transparent'
            }}>
                <ButtonGroup size="large" aria-label="large button group" orientation="vertical">
                    <Button onClick={() => {
                        handleMeasureEnable(false)
                    }}>
                        开启测量工具(pc端)
                    </Button>
                    <Button onClick={() => {
                        handleMeasureEnable(true)
                    }}>
                        开启测量工具(移动端)
                    </Button>
                </ButtonGroup>
            </Paper>
        </Box>
    )
}

export default PanoMeasurePluginUsage
