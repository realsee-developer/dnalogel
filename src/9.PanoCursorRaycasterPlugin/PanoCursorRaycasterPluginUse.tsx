import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Box, Paper, ButtonGroup, Button } from "@mui/material";
import { Five, Mode } from "@realsee/five";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import {
    useFiveEventCallback,
    useFiveState,
    useFiveModelReadyState,
    unsafe__useFiveInstance
} from "@realsee/five/react";
import { Vector3 } from "three";

interface PanoCursorRaycasterPluginUsePropTypes {

}

const OPERATE_OPTIONS = {
    STOP: '停止选点',
    START: '进入选点',
    CLEAR: '清理'
}

const PanoCursorRaycasterPluginUse = (props: PanoCursorRaycasterPluginUsePropTypes) => {
    const five = unsafe__useFiveInstance()
    const panoCursorRaycasterPlugin = five.plugins.panoCursorRaycasterPlugin
    const [fiveState, setFiveState] = useFiveState()
    const fiveModelReadyState = useFiveModelReadyState()
    const [enableSelect, setEnableSelect] = React.useState<boolean>(false)
    const [points, setPoints] = React.useState<Vector3[] | undefined>()

    const handlePointSelect = () => {
        setEnableSelect(!enableSelect)
    }

    const clearPoints = () => {
        if (!points) {
            return
        }

        points.forEach(point => {
            panoCursorRaycasterPlugin.pointAxesHelper(point).clear()
        })

        five.refresh()
    }

    // 点击选点
    useFiveEventCallback('wantsTapGesture', () => {
        // 选点依赖模型，仅当模型加载成功才能选点
        if (fiveModelReadyState !== 'Loaded') {
            console.warn('five model not ready!')
            return
        }

        if (!enableSelect) {
            console.warn('not allow to select point')
            return
        }

        // 选择目标点
        const pos = panoCursorRaycasterPlugin.intersection()
        if (!pos) {
            return
        }
        console.log(pos)
        // 添加辅助坐标
        panoCursorRaycasterPlugin.pointAxesHelper(pos.point)

        const newPoints = points ? points : []
        newPoints.push(pos.point)

        setPoints(newPoints)


        return false

    }, [enableSelect, fiveModelReadyState])

    return <Box>
        {/* tool btn */}
        <Paper sx={{ position: "fixed", top: '10px', right: '10px', backgroundColor: 'transparent'}}>
            <ButtonGroup size="large" aria-label="large button group" orientation="vertical">
                <Button onClick={handlePointSelect} disabled={fiveModelReadyState !== 'Loaded' || fiveState.mode !== Five.Mode.Panorama}>{enableSelect ? OPERATE_OPTIONS.STOP : OPERATE_OPTIONS.START}</Button>
                {/*<Button onClick={clearPoints} disabled={!enableSelect}>{OPERATE_OPTIONS.CLEAR}</Button>*/}
            </ButtonGroup>
        </Paper>

        {/* bottom bar ： show mode*/}
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
    </Box>

};

export default PanoCursorRaycasterPluginUse;
