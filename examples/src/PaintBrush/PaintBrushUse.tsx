import * as React from 'react';
import { PaintBrush, PaintBrushTypeEnum } from "@realsee/dnalogel/components"
import { Box, Button, Paper } from "@mui/material";
// import { PaintBrushTypeEnum } from "../../../plugins/comps/PaintBrush/typings";

interface PaintBrushUsePropTypes {

}

const PaintBrushUse = (props: PaintBrushUsePropTypes) => {
    const [paintBrushEnabledIcon, setPaintBrushEnabledIcon] = React.useState<boolean>(true)
    const paintBrushInstanceRef = React.useRef(null)

    const handlePaintBrushEnable = () => {
        paintBrushInstanceRef.current?.show()
        setPaintBrushEnabledIcon(false)
    }

    React.useEffect(() => {
        paintBrushInstanceRef.current = new PaintBrush({
            currentColor: '#ff0000',
            onUndoText: 'undo',
            onExitText: 'exit'
        })
    }, [])

    const handlePaintBrushStateChange = (state, userAction) => {
        console.log(state, userAction)
        if(state.type === PaintBrushTypeEnum.Exit) {
            setPaintBrushEnabledIcon(true)
        }
    }

    React.useEffect(() => {
        if (!paintBrushInstanceRef) return

        paintBrushInstanceRef.current.on('stateChange', handlePaintBrushStateChange)

        return () => paintBrushInstanceRef.current.off('stateChange', handlePaintBrushStateChange)
    }, [paintBrushInstanceRef])

    return <>
        <Box sx={{display: paintBrushEnabledIcon ? 'block' : 'none'}}>
            <Paper sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
                <Button onClick={handlePaintBrushEnable}>开启画笔 🖌️</Button>
            </Paper>
        </Box>
    </>
};

export default PaintBrushUse;
