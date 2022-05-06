import * as React from "react";
import {unsafe__useFiveInstance, useFiveState} from "@realsee/five/react";

const MiniModelPanel: React.FC = () => {
    const [state, setState] = useFiveState();
    const five = unsafe__useFiveInstance()
    const miniModeRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (!miniModeRef.current || state.mode === 'Floorplan') return
        five.plugins.modelView.appendTo(miniModeRef.current)
    }, [state.mode])

    if (state.mode === 'Floorplan') return null
    return (
        <div onClick={() => setState({ mode: "Floorplan" })} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: "absolute",
            top: '60px',
            right: '20px',
            padding: '10px',
            width: '90px',
            height: '120px',
            backgroundColor: 'rgba(0, 0, 0, .2)',
        }} ref={miniModeRef} />
    )
}

export default MiniModelPanel
