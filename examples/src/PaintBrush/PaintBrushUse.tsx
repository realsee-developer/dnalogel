import * as React from 'react';
import { PaintBrush } from '@realsee/dnalogel/components/index.es'
import { BottomNavigation, BottomNavigationAction, Box, Button, Paper } from "@mui/material";
import { Five, Mode } from "@realsee/five";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

interface PaintBurshUsePropTypes {

}

const PaintBurshUse = (props: PaintBurshUsePropTypes) => {
    const [paintBrushEnabled, setPaintBrushEnabled] = React.useState<boolean>(false)
    const paintBrushInstanceRef = React.useRef(new PaintBrush())

    const handlePaintBrushEnable = () => {
        paintBrushInstanceRef.current?.show()
    }

    React.useEffect(() => {
        if (!paintBrushInstanceRef) return

        paintBrushInstanceRef.current.on('stateChange', state => {

        })


    }, [paintBrushInstanceRef])

    return <>
        { paintBrushEnabled ? null : <Box>
            <Paper sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
                <Button onClick={handlePaintBrushEnable}>开启画笔🖌️</Button>
            </Paper>
        </Box>}
    </>

};

export default PaintBurshUse;
