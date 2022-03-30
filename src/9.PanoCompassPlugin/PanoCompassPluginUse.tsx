import * as React from 'react';
import { floorplanServerData } from "../mockData";
import {
    unsafe__useFiveInstance,
    useFiveEventCallback
} from "@realsee/five/react";

// 朝北方向来源于户型图数据
const NORTH_RAD = floorplanServerData?.computed_data?.entrance?.north_rad


const PanoCompassPluginUse = () => {
    const five = unsafe__useFiveInstance()

    useFiveEventCallback('modelLoaded', async () => {
        // 载入朝北数据
        await five.plugins.panoCompassPlugin.load({north_rad: NORTH_RAD})
    })

    return null

};

export default PanoCompassPluginUse;
