import * as React from 'react';
import { Box, Button, ButtonGroup, Paper } from "@mui/material";

interface CameraMovementPluginUsePropTypes {

}

const CameraMovementPluginUse = (props: CameraMovementPluginUsePropTypes) => {
    const handleMove = () => {

    }

    return (
        <Box>
            <Paper sx={{position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent'}}>
                <ButtonGroup size="large" aria-label="large button group" orientation="vertical">
                    <Button onClick={handleMove}>点位游走</Button>
                    <Button onClick={handleMove}>顺时针旋转</Button>
                    <Button onClick={handleMove}>逆时针旋转</Button>
                    <Button onClick={handleMove}>来回旋转</Button>
                </ButtonGroup>
            </Paper>
        </Box>
    )

};

export default CameraMovementPluginUse;
