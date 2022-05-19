/**
 * 此文件为如视官方提供的 mock 数据
 * 此文件的所有数据仅用作如视能力展示调试
 * 不可商用！！！
 * */

import * as React from 'react'

import getQueryValueByName from "./getQueryValueByName";

// 根据不同的 query 参数，获取不同版本的数据
const DEFAULT_RENDER_CODE = '81gmMq5a7zbF9leWMk'
const DEFAULT_SPACE_TYPE = 'virtual'

const renderCodeFromQuery = getQueryValueByName('renderCode')
const spaceTypeFromQuery = getQueryValueByName('spaceType')

export enum DATATYPES {
    WORK = 'work',
    FLOOR_PLAN_SERVER_PLUGIN_DATA = 'floorplanServerData',
    MODEL_ROOM_LABEL_PLUGIN_DATA = 'modelRoomLabels',
    MODEL_ENTRY_DOOR_GUIDE_PLUGIN_SERVER_DATA = 'modelEntryDoorGuidePluginServerData',
    ROOM_INFO = 'roomInfo',
    ROOM_RULES = 'roomRules',
    MODEL_TAG = 'modelTag',
}

const useFetchDatas = (dataType: DATATYPES, renderCode?: string, spaceType?: 'real') => {
    const [returnDatas, setReturnData] = React.useState(null)
    const dataCode = renderCodeFromQuery || renderCode || DEFAULT_RENDER_CODE
    const space = spaceTypeFromQuery || spaceType || DEFAULT_SPACE_TYPE

    React.useEffect( () => {
        setReturnData(null)

        const requestUrl = `/dnalogel/open-works/${space}/${dataCode}/${dataType}.json`

        fetch(requestUrl)
            .then(response => response.json())
            .then(response => setReturnData(response))
            .catch(error => {
                console.warn(`拉取${requestUrl}数据失败，error log: ${error}`)
            })

    }, [dataType, dataCode])

    return returnDatas
}

export default useFetchDatas
