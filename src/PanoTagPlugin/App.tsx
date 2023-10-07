import { PanoTagPlugin } from '@realsee/dnalogel/dist'
import { createFiveProvider, FiveCanvas } from '@realsee/five/react'
import * as React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import PanoTagPluginUse from './PanoTagPluginUse'
import { FivePluginInit, parseWork } from '@realsee/five'
import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas'
import work from './mocks/work.json'

const FiveProvider = createFiveProvider({
  imageOptions: { size: 512 }, // 图片默认分辨率
  textureOptions: { size: 128 }, // 贴图默认分辨率
  onlyRenderIfNeeds: true,
  plugins: [
    [
      PanoTagPlugin,
      'panoTagPlugin',
      {
        config: {
          globalConfig: {
            modelConfig: { autoLookAtEnabled: false },
            // clickable: false
          },
        },
      },
    ] as FivePluginInit<typeof PanoTagPlugin>,
  ],
})

const App: React.FC = () => {
  const size = useWindowDimensions()
  // const work = useFetchDatas(DATA_TYPES.WORK)

  // React.useEffect(() => {
  //     setTimeout(() => {
  //         const five = (window as any).$five
  //         five.setState({ mode: 'Panorama' })
  //     }, 5000)
  // }, [])

  return (
    work && (
      <FiveProvider
        initialWork={parseWork(work)}
        // initialState={{ mode: 'Floorplan' }}
        initialState={{ panoIndex: 21 }}
        ref={(ref) => Object.assign(window, { $five: ref?.five })}
      >
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <FiveCanvas {...size} />
        </div>
        <PanoTagPluginUse />
      </FiveProvider>
    )
  )
}

export default App
