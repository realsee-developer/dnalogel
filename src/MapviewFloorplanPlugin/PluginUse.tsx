/* eslint-disable react/jsx-curly-brace-presence */
import * as React from 'react'
import { Five, InternalWebGLRenderer, Mode } from '@realsee/five'
import { GuideLinePluginExportType, MapviewFloorplanPlugin, Util } from '@realsee/dnalogel/dist'
import { unsafe__useFiveInstance, useFiveEventCallback, useFiveModelReadyState, useFiveState } from '@realsee/five/react'
import { Paper, BottomNavigation, BottomNavigationAction, ButtonGroup, Button, Slider, FormGroup, Stack } from '@mui/material'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import ViewInArIcon from '@mui/icons-material/ViewInAr'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import { workData, floorplanData } from './mock/dimensionData'

const PluginUse = () => {
    const five = unsafe__useFiveInstance()
    const [fiveState, setFiveState] = useFiveState()
    const fiveModelReadyState = useFiveModelReadyState()
    // const floorplanServerData = useFetchDatas(DATA_TYPES.FLOOR_PLAN_SERVER_PLUGIN_DATA)
    const floorplanServerData = floorplanData
    const plugin = five.plugins.mapviewFloorplanPlugin as ReturnType<typeof MapviewFloorplanPlugin>
    const guideLinePlugin = five.plugins.guideLinePlugin as GuideLinePluginExportType
    const floorIndex = React.useRef(0)
    const fivePuppet = React.useRef<Util.FivePuppet>()

    const [isDefaultUnit, setIsDefaultUnit] = React.useState(true)
    const [missingFloorConfigWidth, setMissingFloorConfigWidth] = React.useState(200)
    const [missingFloorConfigHeight, setMissingFloorConfigHeight] = React.useState(120)
    const [missingFloorConfigFontSize, setMissingFloorConfigFontSize] = React.useState(14)

    function toggleUnit() {
        setIsDefaultUnit(!isDefaultUnit)
    }

    React.useEffect(() => {
        plugin.changeConfigs({
            roomDimensionEnable: true,
            getRoomAreaText(areaSize) {
                return isDefaultUnit ? (areaSize / 1000000).toFixed(1) + '㎡' : (areaSize * 0.000010764).toFixed(1) + 'ft²'
            },
            getRoomDimensionText(width: number, height: number) {
                return isDefaultUnit
                    ? (width * 0.001).toFixed(1) + 'm × ' + (height * 0.001).toFixed(1) + 'm'
                    : (width * 0.0032808).toFixed(1) + 'ft × ' + (height * 0.0032808).toFixed(1) + 'ft'
            },
            getRuleDistanceText(distance) {
                return isDefaultUnit ? distance.toString() : (distance * 0.0032808).toFixed(1) + 'ft'
            },
        })
    }, [isDefaultUnit])

    React.useEffect(async () => {
        const fiveElement = five.getElement()

        if (!floorplanServerData || JSON.stringify(floorplanServerData) === '{}' || !fiveElement) return
        await plugin.load(floorplanServerData)
        // @ts-ignore
        // plugin.loadItems([[
        //     {
        //         "type": 62,
        //         "x": 33990.7255,
        //         "y": 34537.7015,
        //         "notes": "",
        //         "comment": "",
        //         "locked": false,
        //         "width": 2851,
        //         "height": 2200,
        //         "rotateZ": 180,
        //         "rotateX": false,
        //         "rotateY": false,
        //         "area": "u-6a4425b8-b85f-4895-dbb1-2dc7f09646bb",
        //         "displayName": "Item-SimpleItem",
        //         "id": "u-6b19c1d7-eed0-4ef2-04a2-cfa77088faa0"
        //     },
        //     {
        //         "type": 31,
        //         "x": 38715.7691,
        //         "y": 33812.7015,
        //         "notes": "",
        //         "comment": "",
        //         "locked": false,
        //         "width": 450,
        //         "height": 750,
        //         "rotateZ": 180,
        //         "rotateX": false,
        //         "rotateY": false,
        //         "area": "u-800df8b4-ac4d-40e4-1a14-30c7fe9365cd",
        //         "displayName": "Item-SimpleItem",
        //         "id": "u-144d6c05-b3ac-437d-7305-a5ba48c87c18"
        //     },
        //     {
        //         "type": 23,
        //         "x": 35552.0966,
        //         "y": 41348.7015,
        //         "notes": "",
        //         "comment": "",
        //         "locked": false,
        //         "width": 2020,
        //         "height": 650,
        //         "rotateZ": 0,
        //         "rotateX": false,
        //         "rotateY": false,
        //         "area": "u-11d2fd7e-7de9-4584-3d88-26b2402f44fd",
        //         "displayName": "Item-SimpleItem",
        //         "id": "u-ce1267aa-bfc8-4196-c3d5-6913c046f9fb"
        //     },
        //     {
        //         "type": 68,
        //         "x": 34508.7667,
        //         "y": 37643.7015,
        //         "notes": "",
        //         "comment": "",
        //         "locked": false,
        //         "width": 2670,
        //         "height": 2330,
        //         "rotateZ": 180,
        //         "rotateX": false,
        //         "rotateY": false,
        //         "area": "u-7654185f-3853-4aa0-b2dc-ae40bf304d7f",
        //         "displayName": "Item-SimpleItem",
        //         "id": "u-7c5bccab-0c21-4afc-511c-dd6bea687b5f"
        //     },
        //     {
        //         "type": 74,
        //         "x": 38332.1141,
        //         "y": 37930.0709,
        //         "notes": "",
        //         "comment": "",
        //         "locked": false,
        //         "width": 1700,
        //         "height": 1700,
        //         "rotateZ": 90,
        //         "rotateX": false,
        //         "rotateY": false,
        //         "area": "u-7654185f-3853-4aa0-b2dc-ae40bf304d7f",
        //         "displayName": "Item-SimpleItem",
        //         "id": "u-5d88b95d-8502-4d41-8e1f-1d3efa2dde90"
        //     }
        // ]])
        plugin.appendTo(fiveElement!.parentElement!)
    }, [floorplanServerData])

    // React.useEffect(() => {
    //   const fiveElement = five.getElement()
    //   if (!fiveElement) return
    //   guideLinePlugin.load({
    //     lines: [
    //       {
    //         id: '123',
    //         pano_group: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    //         panorama_style: {
    //           visible: true,
    //           border_color: '#FF0000',
    //           background_color: '#FFFFFF',
    //           background_opacity: 0.4,
    //           border_opacity: 0.4,
    //           border_width: 0.05,
    //           background_clip: 'border-box',
    //           color: '#FFFFFF',
    //           unit_length: 0.5,
    //           opacity: 0.8,
    //           width: 0.5,
    //         },
    //         model_style: {
    //           visible: true,
    //           background_color: '#FFFFFF',
    //           background_opacity: 0.6,
    //           border_color: '#FFFFFF',
    //           border_opacity: 0.4,
    //           border_width: 0.05,
    //           background_clip: 'border-box',
    //           color: 'green',
    //           unit_length: 0.5,
    //           width: 0.5,
    //         },
    //       },
    //     ],
    //   })
    //   guideLinePlugin.show()
    // }, [five])

    // React.useEffect(() => {
    //   fivePuppet.current = new Util.FivePuppet(five, { zIndex: 11 })
    //   return () => {
    //     fivePuppet.current?.destory()
    //   }
    // }, [five])

    // useFiveEventCallback('mode.change', ({ mode }) => {
    //   five.ready().then(() => {
    //     if (!fivePuppet.current) return
    //     if (mode === 'Mapview') {
    //       const guideline = guideLinePlugin.itemMap.get('123')?.modelItem.group.clone()
    //       if (guideline) {
    //         fivePuppet.current.scene.add(guideline)
    //       }
    //     } else {
    //       fivePuppet.current.scene.remove(fivePuppet.current.scene.children[0])
    //     }
    //   })
    // })

    React.useEffect(() => {
        plugin.changeConfigs({
            missingFloorConfig: {
                imageWidth: missingFloorConfigWidth,
                imageHeight: missingFloorConfigHeight,
                textFontSize: missingFloorConfigFontSize,
            },
        })
    }, [missingFloorConfigWidth, missingFloorConfigHeight, missingFloorConfigFontSize])

    function handleMissingFloorConfigWidthChange(event: Event, newValue: number | number[]) {
        setMissingFloorConfigWidth(newValue as number)
    }

    function handleMissingFloorConfigHeightChange(event: Event, newValue: number | number[]) {
        setMissingFloorConfigHeight(newValue as number)
    }

    function changeFloor() {
        const floorLength = five.model.floorLength
        floorIndex.current = (floorIndex.current + 1) % floorLength
        five.model.show(floorIndex.current)
    }

    if (fiveModelReadyState !== 'Loaded') return null
    return (
        <Paper sx={{ position: 'absolute', width: '100%', left: 0, top: 0, zIndex: 10 }}>
            <ButtonGroup
                sx={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                }}
                size="large"
                aria-label="large button group"
                orientation="vertical"
                variant="contained"
            >
                <Button variant="contained" onClick={toggleUnit}>
                    切换单位
                </Button>
                <Button variant="contained" onClick={changeFloor}>
                    切换楼层
                </Button>
            </ButtonGroup>
            <FormGroup sx={{ position: 'absolute', left: '20px', top: '20px', width: '200px' }}>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <Slider
                        min={100}
                        max={1000}
                        value={missingFloorConfigWidth}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        onChange={handleMissingFloorConfigWidthChange}
                    />
                    <span style={{ whiteSpace: 'nowrap', color: '#fff' }}>占位图宽度</span>
                </Stack>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <Slider
                        min={100}
                        max={1000}
                        value={missingFloorConfigHeight}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        onChange={handleMissingFloorConfigHeightChange}
                    />
                    <span style={{ whiteSpace: 'nowrap', color: '#fff' }}>占位图高度</span>
                </Stack>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <Slider
                        min={14}
                        max={20}
                        value={missingFloorConfigFontSize}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        onChange={(event, value) => setMissingFloorConfigFontSize(value as number)}
                    />
                    <span style={{ whiteSpace: 'nowrap', color: '#fff' }}>占位文字大小</span>
                </Stack>
            </FormGroup>
            <Paper
                sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'transparent' }}
                className="mapview-floorplan-plugin-use"
            >
                <BottomNavigation
                    showLabels
                    key="mapview-floorplan-plugin"
                    value={fiveState.mode}
                    onChange={(_, newValue: Mode) => {
                        if (newValue !== 'Mapview') return setFiveState({ mode: newValue })
                        const plugin = five.plugins.mapviewFloorplanPlugin
                        plugin.show()
                    }}
                >
                    <BottomNavigationAction key={1} label="全景漫游" icon={<DirectionsWalkIcon />} value={Five.Mode.Panorama} />
                    <BottomNavigationAction key={2} label="户型图" icon={<ViewInArIcon />} value={Five.Mode.Mapview} />
                </BottomNavigation>
            </Paper>
        </Paper>
    )
}

export default PluginUse
