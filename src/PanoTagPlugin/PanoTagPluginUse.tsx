import { useEffect, useState } from 'react'
import { unsafe__useFiveInstance, useFiveState } from '@realsee/five/react'
import { Five, Mode } from '@realsee/five'
import { TagsList, AddTagData } from './mocks/mock_data'
import TagsList2 from './mocks/marketingData'
import TagsList3 from './mocks/mediaModel'
import TagsList4 from './mocks/textTagData'
import TagsList5 from './mocks/mjyygrw5.ts'
import TagsList6 from './mocks/crash/maxTest.ts'
import TagsListCrash from './mocks/crash/tag.json'
import { Slot, Vapor, Button as VaporButton } from '@realsee/vapor'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ImageIcon from '@mui/icons-material/Image'
import TitleIcon from '@mui/icons-material/Title'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import LinkIcon from '@mui/icons-material/Link'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { ContentType, PanoTagPluginExportInterface, Tag, TagInstance } from '@realsee/dnalogel/dist'
import { Vector3 } from 'three'
import ReactDOM from 'react-dom'
import React from 'react'
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { FiveModeSwitcher } from '../components/FiveModeSwitcher.tsx'

// function CommentTag(props: { tag: TagInstance<'Unknown'> }) {
//   const [data, setData] = React.useState(props.tag.data)

//   React.useEffect(() => {
//     console.info('data change', data)
//   }, [data])

//   React.useEffect(() => {
//     props.tag.hooks.on('dataChanged', setData)
//     return () => {
//       props.tag.hooks.off('dataChanged', setData)
//     }
//   }, [props.tag])

//   return (
//     <div>
//       <div>CommentTag</div>
//       <div>{JSON.stringify(props.tag.data)}</div>
//     </div>
//   )
// }

const ContentTypeOptions = {
  [ContentType.Text]: '文字标签',
  [ContentType.ImageText]: '图文标签',
  [ContentType.Audio]: '音频标签',
  [ContentType.MediaPlane]: '图片视频贴片',
  [ContentType.Marketing]: '营销标签',
  [ContentType.Link]: 'VR跳转标签',
  // [ContentType.MediaModel]: 'MR标签',
}
const PanoTagPluginUse = () => {
  const five = unsafe__useFiveInstance()
  // const [fiveState, setFiveState] = useFiveState()
  // const [currentTagList, setCurrentTagList] = useState(TagsList6.map((v, i) => ({ ...v, id: i })))
  // const [currentTagList, setCurrentTagList] = useState(TagsListCrash.data.tagList.map((v, i) => ({ ...v, id: i })))
  const [visible, setVisible] = useState(true)
  const [enabled, setEnabled] = useState(true)
  const pluginInstance = five.plugins.panoTagPlugin as PanoTagPluginExportInterface

  // const modelIntersectRaycaster = useFiveModelIntersectRaycaster();
  // // 获取坐标
  // useFiveEventCallback("wantsTapGesture", (raycaster) => {
  //   const [intersect] = modelIntersectRaycaster(raycaster);
  //   if (intersect) {
  //     console.info(intersect.point)
  //   }
  //   return false;
  // },);

  // globalConfig: {renderType: 'Mesh',}

  useEffect(() => {
    // pluginInstance.registerRenderer('Text', (container: HTMLElement, tag: TagInstance<'Unknown'>) => {
    //   ReactDOM.render(
    //     <div>
    //       {/* <VaporButton></VaporButton> */}
    //       <Slot name="slot_symbol" />
    //     </div>,
    //     container,
    //   )
    //   return () => ReactDOM.unmountComponentAtNode(container)
    // })
    // pluginInstance.bindRenderer('OCR', 'Text')
    const list = TagsList.map((v, i) => ({ ...v, id: i })) as any
    pluginInstance.load({
      tagList: list,
      globalConfig: {
        renderType: 'Mesh',
        visibleConfig: {
          visibleFiveMode: 'all',
        },
      },
      contentTypeConfig: {
        Text: {
          unfoldedConfig: {
            autoUnfold: false,
          },
        },
        '[ModelLike]-Any-Text': {
          visibleConfig: {
            intersectRaycaster: false,
          },
        },
      },
    })
  }, [])

  const addTag = (type: ContentType) => {
    pluginInstance.addTag(AddTagData[type])
    five.setState(AddTagData[type].fiveState, false, false)
  }

  // 添加自定义热点
  const addCustomerTag = () => {
    // 自定义Element
    const ele = document.createElement('div')
    ele.innerText = '这是一个自定义的热点'
    ele.style.color = 'red'
    ele.style.width = '200px'
    ele.style.border = '1px solid #000'

    const tagData = {
      id: '03338b76-b64a-4e90-37fb-44e3c0ffeb88',
      stickType: '2DPoint' as const,
      position: [-1.7882169929208833, 1.022040232156752, -2.339700937271118],
      data: {
        text: '自定义热点',
      },
      element: ele,
      // ContentType设置为Custom
      contentType: 'Custom' as const,
      fiveState: {
        mode: 'Panorama' as Mode,
        panoIndex: 0,
        longitude: 0.4859185812812441,
        latitude: 0.10616887378249829,
        fov: 95,
        offset: {
          x: 0.09141919761896133,
          y: 1.1138173893692536,
          z: -0.08654399961233139,
        } as Vector3,
        distance: 0,
      },
    }
    pluginInstance.addTag(tagData)
    five.setState(tagData.fiveState, false, false)
  }

  const handlerTagVisibleChange = async () => {
    if (visible) {
      await pluginInstance.hide({ withAnimation: true })
    } else {
      await pluginInstance.show({ withAnimation: true })
    }
    setVisible(!visible)
  }

  const handlerTagEnableChange = async () => {
    if (enabled) {
      pluginInstance.disable()
    } else {
      pluginInstance.enable()
    }
    setEnabled(!enabled)
  }

  return (
    <>
      <FiveModeSwitcher modeList={['Mapview', 'Panorama']} />
      <Stack direction={'column'} spacing={1} sx={{ position: 'fixed', top: '10px', right: '10px' }}>
        <Stack direction={'row'} spacing={1} justifyContent="flex-end">
          <Button variant="contained" size="small" startIcon={<TitleIcon />} onClick={() => addTag(ContentType.Text)}>
            添加文字标签
          </Button>
          <Button variant="contained" size="small" startIcon={<MusicNoteIcon />} onClick={() => addTag(ContentType.Audio)}>
            添加音频标签
          </Button>
          <Button variant="contained" size="small" startIcon={<ShoppingBagIcon />} onClick={() => addTag(ContentType.Marketing)}>
            添加营销贴片
          </Button>
          <Button variant="contained" size="small" startIcon={<LinkIcon />} onClick={() => addTag(ContentType.Link)}>
            添加跳转标签
          </Button>
        </Stack>
        <Stack direction={'row'} spacing={1} justifyContent="flex-end">
          <Button variant="contained" size="small" startIcon={<ImageIcon />} onClick={addCustomerTag}>
            添加自定义标签
          </Button>
          <Button variant="contained" size="small" startIcon={<ImageIcon />} onClick={() => addTag(ContentType.ImageText)}>
            添加图文标签
          </Button>
          <Button variant="contained" size="small" startIcon={<ImageIcon />} onClick={() => handlerTagVisibleChange()}>
            {visible ? '隐藏' : '显示'}标签
          </Button>
          <Button variant="contained" size="small" startIcon={<ImageIcon />} onClick={() => handlerTagEnableChange()}>
            {enabled ? '禁用' : '启用'}标签
          </Button>
          <Button variant="contained" size="small" startIcon={<ImageIcon />} onClick={() => pluginInstance.dispose()}>
            dispose
          </Button>
        </Stack>
      </Stack>
    </>
  )
}

export default PanoTagPluginUse
