import { useEffect, useState } from 'react'
import { unsafe__useFiveInstance, useFiveEventCallback, useFiveState } from '@realsee/five/react'
import { Five, Mode } from '@realsee/five'
import { TagsList, AddTagData } from './mocks/mock_data.ts'
import TagsList2 from './mocks/marketingData.ts'
import TagsList3 from './mocks/mediaModel.ts'
import TagsList4 from './mocks/textTagData.ts'
import TagsList5 from './mocks/mjyygrw5.ts'
import TagsList6 from './mocks/crash/maxTest.ts'
import TagsList7 from './mocks/qingxiesheying.ts'
import TagsListCrash from './mocks/crash/tag.json'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { PanoTagPluginExportInterface } from '@realsee/dnalogel/dist'
import { FiveModeSwitcher } from '../components/FiveModeSwitcher.tsx'

const PanoTagPluginUse = () => {
  const five = unsafe__useFiveInstance()
  const [visible, setVisible] = useState(true)
  const [enabled, setEnabled] = useState(true)
  const pluginInstance = five.plugins.panoTagPlugin as PanoTagPluginExportInterface

  const loadData0 = () => {
    const list = TagsList.map((v, i) => ({ ...v, id: i })) as any
    pluginInstance.load({
      tagList: list,
      globalConfig: {
        renderType: 'Mesh',
        simulate3D: true,
        visibleConfig: {
          // visibleDistance: { max: 1 },
          entryFromModel: true,
          visiblePanoIndex: 'current',
        },
      },
    })
  }

  const loadData1 = () => {
    const list = TagsList6.map((v, i) => ({ ...v, id: i })) as any
    pluginInstance.load({ tagList: list })
  }

  const loadData2 = () => {
    const list = TagsList3.map((v, i) => ({ ...v, id: i })) as any
    pluginInstance.load({
      tagList: list,
      globalConfig: {
        renderType: 'Dom',
      },
    })
  }

  useEffect(() => {
    loadData0()
    return () => pluginInstance.dispose()
  }, [five])

  const handlerTagVisibleChange = async () => {
    if (visible) {
      await pluginInstance.hide()
    } else {
      await pluginInstance.show()
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
          <Button variant="contained" size="small" onClick={() => loadData0()}>
            加载数据0
          </Button>
          <Button variant="contained" size="small" onClick={() => loadData1()}>
            加载大量数据
          </Button>
          <Button variant="contained" size="small" onClick={() => loadData2()}>
            加载视频标签
          </Button>
        </Stack>
        <Stack direction={'row'} spacing={1} justifyContent="flex-end">
          <Button variant="contained" size="small" onClick={() => handlerTagVisibleChange()}>
            {visible ? '隐藏' : '显示'}标签
          </Button>
          <Button variant="contained" size="small" onClick={() => handlerTagEnableChange()}>
            {enabled ? '禁用' : '启用'}标签
          </Button>
          <Button variant="contained" size="small" onClick={() => pluginInstance.dispose()}>
            dispose
          </Button>
        </Stack>
      </Stack>
    </>
  )
}

export default PanoTagPluginUse
