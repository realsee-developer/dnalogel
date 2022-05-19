import * as React from "react";
import {unsafe__useFiveInstance, useFiveState} from "@realsee/five/react";
import { Box } from '@mui/material'
import { Five } from "@realsee/five";
import useFetchDatas, { DATA_TYPES } from "../utils/useFetchDatas";

const PanoFloorplanRadarPanel: React.FC = () => {
    const [fiveState, setFiveState] = useFiveState();
    const floorplanServerData = useFetchDatas(DATA_TYPES.FLOOR_PLAN_SERVER_PLUGIN_DATA)
    const five = unsafe__useFiveInstance()
    const panoFloorplanRadarPanelRef = React.useRef<HTMLDivElement>(null)
    const [visible, setVisible] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (!panoFloorplanRadarPanelRef.current || fiveState.mode !== Five.Mode.Panorama) return
        five.plugins.panoFloorplanRadarPlugin.appendTo(panoFloorplanRadarPanelRef.current)
    }, [])

    React.useEffect(() => {
        if(!floorplanServerData || JSON.stringify(floorplanServerData) === '{}') return
        five.plugins.panoFloorplanRadarPlugin.load(floorplanServerData)
    }, [floorplanServerData])

    React.useEffect(() => {
        if (fiveState.mode === Five.Mode.Panorama) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }

    }, [fiveState.mode])

    return (
        <Box
            onClick={() => setFiveState({ mode: Five.Mode.Floorplan })}
            sx={{
            display: `${visible ? 'flex' : 'none'}`,
            justifyContent: 'center',
            alignItems: 'center',
            position: "absolute",
            top: '60px',
            right: '20px',
            padding: '10px',
            width: '90px',
            height: '120px',
            backgroundColor: 'rgba(0, 0, 0, .2)',
        }}
            ref={panoFloorplanRadarPanelRef}
        />
    )
}

export default PanoFloorplanRadarPanel
