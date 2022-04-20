import * as React from 'react';
import {
    unsafe__useFiveInstance,
    useFiveEventCallback,
    useFiveModelReadyState,
    useFiveState
} from "@realsee/five/react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Five, Mode } from "@realsee/five";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import useFetchDatas, { DATATYPES } from "../utils/useFetchDatas";
import * as THREE from "three";

interface PluginShowPropTypes {

}

const PluginShow = (props: PluginShowPropTypes) => {
    const [fiveState, setFiveState] = useFiveState()
    const five = unsafe__useFiveInstance()
    const fiveModeReadyState = useFiveModelReadyState()
    // const modelItemLabels = useFetchDatas(DATATYPES.MODEL_ROOM_LABEL_PLUGIN_DATA)
    const modelItemLabels = {
        "model_item_labels": [
            {
                "__type": "Item",
                "materials": null,
                "library": 6219,
                "adsorption": null,
                "position": [
                    7.04986,
                    -1.1e-05,
                    2.898
                ],
                "quaternion": [
                    0,
                    0.707106,
                    0,
                    -0.707107
                ],
                "size": [
                    0.37002,
                    0.70497,
                    0.68223
                ],
                "matrix": [
                    0,
                    0,
                    0.01,
                    0,
                    0,
                    0.009999,
                    0,
                    0,
                    -0.01,
                    0,
                    0,
                    0,
                    7.04986,
                    -1.1e-05,
                    2.898,
                    1
                ],
                "matrixWorld": [
                    0,
                    0,
                    0.01,
                    0,
                    0,
                    0.009999,
                    0,
                    0,
                    -0.01,
                    0,
                    0,
                    0,
                    7.04986,
                    -1.1e-05,
                    2.898,
                    1
                ],
                "name": "\u79d1\u52d2\u5750\u4fbf\u5668",
                "type": [
                    "kitchen_bathroom",
                    "bathroom",
                    "toilet_bowl"
                ],
                "path": "b080ac6fda0d9f41feb031e661f845d4",
                "center": [
                    0,
                    35.249948,
                    -0.002501
                ],
                "id": "u-RLv26eKv9Q7hww",
                "roomName": "\u536b\u751f\u95f4"
            },
            {
                "__type": "Item",
                "materials": null,
                "library": 16168,
                "adsorption": null,
                "position": [
                    -0.27031,
                    0.114995,
                    0.022798
                ],
                "quaternion": [
                    0,
                    0,
                    0,
                    1
                ],
                "size": [
                    0.1,
                    0.11,
                    0.1
                ],
                "matrix": [
                    0.01,
                    0,
                    0,
                    0,
                    0,
                    0.01,
                    0,
                    0,
                    0,
                    0,
                    0.01,
                    0,
                    -0.27031,
                    0.114995,
                    0.022798,
                    1
                ],
                "matrixWorld": [
                    0,
                    0,
                    0.01,
                    0,
                    0,
                    0.01,
                    0,
                    0,
                    -0.010001,
                    0,
                    0,
                    0,
                    2.595872,
                    0.750256,
                    3.598606,
                    1
                ],
                "name": "\u5bc6\u5c01\u7f50",
                "type": [
                    "home_decoration",
                    "tableware",
                    "kitchen_supplies",
                    "kitchen_supplies_4"
                ],
                "path": "3c71d16ca42204a69f5e68bc361b3d2b",
                "center": [
                    0,
                    5.5,
                    0
                ],
                "id": "u-0dYGcukV9q7L58",
                "roomName": "\u5ba2\u5385"
            },
            {
                "__type": "Item",
                "materials": null,
                "library": 36999,
                "adsorption": null,
                "position": [
                    5.364,
                    2.7,
                    9.090005
                ],
                "quaternion": [
                    0,
                    1,
                    0,
                    0
                ],
                "size": [
                    2.393999,
                    0.19999,
                    0.19999
                ],
                "matrix": [
                    -0.01596,
                    0,
                    0,
                    0,
                    0,
                    0.009999,
                    0,
                    0,
                    0,
                    0,
                    -0.01,
                    0,
                    5.364,
                    2.7,
                    9.090005,
                    1
                ],
                "matrixWorld": [
                    -0.01596,
                    0,
                    0,
                    0,
                    0,
                    0.009999,
                    0,
                    0,
                    0,
                    0,
                    -0.01,
                    0,
                    5.364,
                    2.7,
                    9.090005,
                    1
                ],
                "name": "rs_clh_1500_yi",
                "type": [
                    "home_decoration",
                    "cloth_soft_decoration",
                    "curtain",
                    "curtain_others"
                ],
                "path": "b7262274e115bf403aef98d1775d417d",
                "center": [
                    -0.00105,
                    -10,
                    0
                ],
                "id": "u-QC08DFKv9q7jbE",
                "roomName": "\u5367\u5ba4A"
            },
            {
                "__type": "Item",
                "materials": null,
                "library": 513,
                "adsorption": null,
                "position": [
                    0.779995,
                    2.45,
                    0.65229
                ],
                "quaternion": [
                    0,
                    1,
                    0,
                    0
                ],
                "size": [
                    0.19209,
                    0.0259,
                    0.19171
                ],
                "matrix": [
                    -0.010001,
                    0,
                    0,
                    0,
                    0,
                    0.009997,
                    0,
                    0,
                    0,
                    0,
                    -0.01,
                    0,
                    0.779995,
                    2.45,
                    0.65229,
                    1
                ],
                "matrixWorld": [
                    -0.010001,
                    0,
                    0,
                    0,
                    0,
                    0.009997,
                    0,
                    0,
                    0,
                    0,
                    -0.01,
                    0,
                    0.779995,
                    2.45,
                    0.65229,
                    1
                ],
                "name": "\u5438\u9876\u706f-513",
                "type": [
                    "lighting",
                    "dome_light",
                    "spotlight",
                    "spotlight_4"
                ],
                "path": "461f5d1e61415e4fe0be81af8ee11aaa",
                "center": [
                    0,
                    -1.295301,
                    0
                ],
                "id": "u-ed42adc1-a663-4a4f-9a45-4cc26947f094",
                "roomName": "\u5ba2\u5385"
            },
        ]
    }

    // 画辅助线
    function addHelper(x: number, y: number, z: number, type: string, helper?: boolean) {
        // const point = new THREE.Vector3();
        let geometry, materials, mesh: any

        if (type === 'box') {
            geometry = new THREE.BoxGeometry(
                0.6,
                2.5,
                1.010696,
            )

            let mats = []
            for (let i = 0; i < geometry.faces.length; i++) {
                const material = new THREE.MeshBasicMaterial({
                    color: new THREE.Color(Math.random() * 0xffffff)
                })
                mats.push(material)
            }
            materials = mats
        } else if (type === 'ball') {
            geometry = new THREE.SphereGeometry(0.02, 0.02, 64);
            materials = new THREE.MeshBasicMaterial({
                color: new THREE.Color(0xffffff)
            })
        }
        mesh = new THREE.Mesh(geometry, materials)
        // y 轴需要加一半的高度，因为position是从地面开始的，或者我应该算偏移更合理
        mesh.position.set(x, y, z)

        if (helper) {
            const helper = new THREE.AxesHelper(5);
            mesh.add(helper)
        }

        five.scene.add(mesh);

    }

    React.useEffect(() => {
        const wrapper = document.querySelector('.plugin-full-screen-container')
        if (wrapper) {
            five.plugins.modelItemLabelPlugin.appendTo(wrapper)
        }
    }, [])

    useFiveEventCallback('modelLoaded', () => {
        if (!modelItemLabels) return
        five.plugins.modelItemLabelPlugin.load(modelItemLabels)
        setFiveState({ mode: Five.Mode.Floorplan })
        addHelper(                       7.04986,
            -1.1e-05 + 0.70497,
            2.898, 'ball', true)
    }, [modelItemLabels])

    if (fiveModeReadyState !== 'Loaded') return null
    return (
        <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: 'transparent' }}
            className="model-item-label-plugin-show"
        >
            <BottomNavigation
                showLabels
                value={fiveState.mode}
                onChange={(_, newValue: Mode) => {
                    setFiveState({ mode: newValue });
                }}
            >
                <BottomNavigationAction label="全景漫游" icon={<DirectionsWalkIcon />} value={Five.Mode.Panorama} />
                <BottomNavigationAction label="空间总览" icon={<ViewInArIcon />} value={Five.Mode.Floorplan} />
            </BottomNavigation>
        </Paper>
    )

};

export default PluginShow;
