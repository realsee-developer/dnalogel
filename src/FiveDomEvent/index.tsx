// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom'
// import { createFiveProvider, FiveCanvas, unsafe__useFiveInstance, useFiveState } from '@realsee/five/react'
// import { Five, Mode, parseWork } from '@realsee/five'
// import useFetchDatas, { DATA_TYPES } from '../utils/useFetchDatas.ts'
// import { Mesh } from 'three'
// import * as THREE from 'three'
// import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
// import { FiveDomEvents } from '@realsee/dnalogel/src/shared-utils/five/FiveDomEvents.ts'

// const FiveProvider = createFiveProvider({
//   imageOptions: { size: 512 }, // 图片默认分辨率
//   textureOptions: { size: 512 }, // 贴图默认分辨率
// })

// const createSphere = () => {
//   const geometry = new window.THREE.SphereGeometry(0.1, 32, 32)
//   const material = new window.THREE.MeshBasicMaterial({ color: 0x90ebb1 })
//   const mesh = new window.THREE.Mesh(geometry, material)
//   return mesh
// }

// const generate3x3x3Sphere = (centerPosition) => {
//   const meshes: Mesh[] = []
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       for (let k = 0; k < 3; k++) {
//         const position = new window.THREE.Vector3(centerPosition.x + i * 0.5, centerPosition.y + j * 0.5, centerPosition.z + k * 0.5)
//         const mesh = createSphere()
//         mesh.name = `mesh-${i}-${j}-${k}`
//         mesh.position.copy(position)
//         meshes.push(mesh)
//       }
//     }
//   }
//   return meshes
// }

// const changeMeshColor = (mesh: Mesh, color: number) => {
//   const material = new window.THREE.MeshBasicMaterial({ color })
//   mesh.material = material
// }

// const FiveDomEventApp: React.FC = () => {
//   const five = unsafe__useFiveInstance()
//   const [fiveState, setFiveState] = useFiveState()
//   const fiveDomEvent = new FiveDomEvents(five)

//   useEffect(() => {
//     const centerPosition = new THREE.Vector3(-2, 1, -3)
//     const meshes = generate3x3x3Sphere(centerPosition)
//     const helper = new THREE.AxesHelper(10)

//     // test
//     meshes.forEach((mesh) => {
//       fiveDomEvent.addAutoBindEventListener(mesh, 'click', () => {
//         console.info('click', mesh)
//       })

//       fiveDomEvent.addAutoBindEventListener(mesh, 'hover', () => {
//         changeMeshColor(mesh, 0xff0000)
//       })

//       fiveDomEvent.addAutoBindEventListener(mesh, 'unHover', () => {
//         changeMeshColor(mesh, 0x90ebb1)
//       })
//     })

//     //
//     five.scene.add(...meshes, helper)
//     return () => {
//       five.scene.remove(...meshes, helper)
//     }
//   }, [])

//   return (
//     <Paper sx={{ position: 'fixed', bottom: 0 }} style={{ borderRadius: '4px', overflow: 'hidden' }}>
//       <BottomNavigation showLabels value={fiveState.mode} onChange={(_, mode: Mode) => setFiveState({ mode })}>
//         <BottomNavigationAction label="全景漫游" value={Five.Mode.Panorama} />
//         <BottomNavigationAction label="空间总览" value={Five.Mode.Floorplan} />
//       </BottomNavigation>
//     </Paper>
//   )
// }

// const App: React.FC = () => {
//   const work = useFetchDatas(DATA_TYPES.WORK)

//   return (
//     work && (
//       <FiveProvider
//         initialState={{ mode: 'Floorplan' }}
//         initialWork={parseWork(work)}
//         ref={(ref) => Object.assign(window, { $five: ref?.five })}
//       >
//         <FiveDomEventApp />
//         <FiveCanvas width={document.body.clientWidth} height={document.body.clientHeight} />
//       </FiveProvider>
//     )
//   )
// }

// ReactDOM.render(<App />, document.querySelector('#app'))
