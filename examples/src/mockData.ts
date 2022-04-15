/**
 * 此文件为如视官方提供的 mock 数据
 * 此文件的所有数据仅用作如视能力展示调试
 * 不可商用！！！
 * */

import { Work } from '@realsee/five'
import { FloorplanServerData} from "@realsee/dnalogel/libs/floorplan/typings/floorplanServerData";
import { ModelRoomLabelPluginData} from "@realsee/dnalogel/libs/ModelRoomLabelPlugin/typings";
import { ModelEntryDoorGuidePluginData } from '@realsee/dnalogel/libs/ModelEntryDoorGuidePlugin'
import { RoomInfo, RoomRules } from '@realsee/dnalogel/libs/PanoRulerPlugin/typings'

import getQueryValueByName from "./utils/getQueryValueByName";

// 根据不同的 query 参数，获取不同版本的数据
const defaultRenderCode = '81gmMq5a7zbF9leWMk'

const dataReq = getQueryValueByName('renderCode')
const dataCode = dataReq ? dataReq : defaultRenderCode

// 获取 space 类型
const spaceType = getQueryValueByName('spaceType') || 'virtual'

// 从 github 拉取开源 json 数据

const workUrl = `//unpkg.com/@realsee/open-works/${spaceType}/${dataCode}/work.json`
const floorplanServerDataUrl = `//unpkg.com/@realsee/open-works/${spaceType}/${dataCode}/floorplanServerData.json`
const modelRoomLabelsUrl = `//unpkg.com/@realsee/open-works/${spaceType}/${dataCode}/modelRoomLabels.json`
const modelEntryDoorGuidePluginServerDataUrl = `//unpkg.com/@realsee/open-works/${spaceType}/${dataCode}/modelEntryDoorGuidePluginServerData.json`
// 标尺数据
const roomInfoUrl = `//unpkg.com/@realsee/open-works/${spaceType}/${dataCode}/roomInfo.json`
const roomRulesUrl = `//unpkg.com/@realsee/open-works/${spaceType}/${dataCode}/roomRules.json`

let work: Work | null = null
let floorplanServerData: FloorplanServerData | null = null
let modelRoomLabels: ModelRoomLabelPluginData | null = null
let modelEntryDoorGuidePluginServerData: ModelEntryDoorGuidePluginData | null = null
// 标尺数据
let roomInfo: RoomInfo | null = null
let roomRules: RoomRules | null = null


await fetch(workUrl).then((res) => res.json()).then(res => work = res).catch(e => console.warn('拉取 work 数据失败'))
await fetch(floorplanServerDataUrl).then((res) => res.json()).then(res => floorplanServerData = res).catch(e => console.warn('拉取 floorplanServerData 数据失败或不含此数据源'))
await fetch(modelRoomLabelsUrl).then((res) => res.json()).then(res => modelRoomLabels = res).catch(e => console.warn('拉取 modelRoomLabels 数据失败或不含此数据源'))
await fetch(modelEntryDoorGuidePluginServerDataUrl).then((res) => res.json()).then(res => modelEntryDoorGuidePluginServerData = res).catch(e => console.warn('拉取 modelEntryDoorGuidePluginServerData 数据失败或不含此数据源'))
// 标尺数据
await fetch(roomInfoUrl).then((res) => res.json()).then(res => roomInfo = res).catch(e => console.warn('拉取标尺 roomInfo 数据失败'))
await fetch(roomRulesUrl).then((res) => res.json()).then(res => roomRules = res).catch(e => console.warn('拉取标尺 roomRules 数据失败'))

export {
    work,
    floorplanServerData,
    modelRoomLabels,
    modelEntryDoorGuidePluginServerData,
    roomInfo,
    roomRules
}
