import * as React from 'react';
import { Box, Button, ButtonGroup, Paper } from "@mui/material";
import { unsafe__useFiveInstance } from "@realsee/five/react";
import type { MoveArgs, RotateArgs } from '@realsee/dnalogel'
import { Rotation } from '@realsee/dnalogel'

enum OperationEnum {
    PANO_MOVE = '点位游走',
    CLOCKWISE_ROTATION = '顺时针旋转',
    COUNTERCLOCKWISE_ROTATION = '逆时针旋转',
    ROUND = '来回旋转'
}

const MoveParams = {
    PANO_MOVE: {
        fov: 98,
        panoIndex: 1,
        latitude: -0.007769878726327784,
        longitude: 4.614049904222785
    },
    CLOCKWISE_ROTATION: {
        fov: 50,
        latitude: 0.0340522133938706,
        longitude: 0.1257016521296519,
        rotation: Rotation.Anticlockwise
    },
    COUNTERCLOCKWISE_ROTATION: {
        fov: 50,
        latitude: 0.0340522133938706,
        longitude: 0.1257016521296519,
        rotation: Rotation.Clockwise
    },
    ROUND: {
        fov: 50,
        latitude: -0.0004827098383655415,
        longitude: 1.264471004436043,
        rotateSpeed: 0.25,
        rotation: Rotation.Loop
    }
}

interface CameraMovementPluginUsePropTypes {

}

const CameraMovementPluginUse = (props: CameraMovementPluginUsePropTypes) => {
    const five = unsafe__useFiveInstance()

    const handlePanoMove = (moveArgs: Partial<MoveArgs>, duration = 10000) => {
        const cameraMovementPlugin = five.plugins.cameraMovementPlugin
        cameraMovementPlugin.move(moveArgs, duration)
    }

    const handleRotation = (rotateArgs: Partial<RotateArgs>, duration = 10000) => {
        const cameraMovementPlugin = five.plugins.cameraMovementPlugin
        cameraMovementPlugin.rotate(rotateArgs, duration)
    }

    return (
        <Box>
            <Paper sx={{position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent'}}>
                <ButtonGroup size="large" aria-label="large button group" orientation="vertical">
                    <Button onClick={() => handlePanoMove(MoveParams.PANO_MOVE)}>{OperationEnum.PANO_MOVE}</Button>
                    <Button onClick={() => handleRotation(MoveParams.CLOCKWISE_ROTATION)}>{OperationEnum.CLOCKWISE_ROTATION}</Button>
                    <Button onClick={() => handleRotation(MoveParams.COUNTERCLOCKWISE_ROTATION)}>{OperationEnum.COUNTERCLOCKWISE_ROTATION}</Button>
                    <Button onClick={() => handleRotation(MoveParams.ROUND, 20000)}>{OperationEnum.ROUND}</Button>
                </ButtonGroup>
            </Paper>
        </Box>
    )

};

export default CameraMovementPluginUse;
