import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  Slider,
} from '@mui/material'
import { unsafe__useFiveInstance, useFiveState } from '@realsee/five/react'
import { useState } from 'react'
import * as THREE from 'three'

const BlendingFactorMap: Record<string, number> = {
  SrcAlpha: THREE.SrcAlphaFactor, // src 默认
  OneMinusSrcAlpha: THREE.OneMinusSrcAlphaFactor, // dst 默认
  SrcColor: THREE.SrcColorFactor,
  OneMinusSrcColor: THREE.OneMinusSrcColorFactor,
  DstAlpha: THREE.DstAlphaFactor,
  OneMinusDstAlpha: THREE.OneMinusDstAlphaFactor,
  DstColor: THREE.DstColorFactor,
  OneMinusDstColor: THREE.OneMinusDstColorFactor,
  SrcAlphaSaturate: THREE.SrcAlphaSaturateFactor,
}

const BlendingEquationMap: Record<string, number> = {
  Add: THREE.AddEquation,
  Subtract: THREE.SubtractEquation,
  ReverseSubtract: THREE.ReverseSubtractEquation,
  Min: THREE.MinEquation,
  Max: THREE.MaxEquation,
}

export function BlendingSwitcher(props?: { material?: () => THREE.Material }) {
  const five = unsafe__useFiveInstance()
  const [srcFactor, setSrcFactor] = useState<number>(THREE.SrcAlphaFactor)
  const [dstFactor, setDstFactor] = useState<number>(THREE.OneMinusSrcAlphaFactor)
  const [equation, setEquation] = useState<number>(THREE.AddEquation)
  const [opacity, setOpacity] = useState<number>(0.4)
  const [srcFectorAlpha, setSrcFectorAlpha] = useState<number>(THREE.SrcAlphaFactor)
  const [dstFactorAlpha, setDstFactorAlpha] = useState<number>(THREE.OneMinusSrcAlphaFactor)

  return (
    <>
      <Paper sx={{ position: 'fixed', bottom: 60, padding: 1 }}>
        <FormControl>
          <Button
            onClick={() => {
              const m = props?.material?.()
              if (m) {
                setSrcFactor(m.blendSrc)
                setDstFactor(m.blendDst)
                setEquation(m.blendEquation)
                setOpacity(m.opacity)
                setSrcFectorAlpha(m.blendSrcAlpha ?? m.blendSrc)
                setDstFactorAlpha(m.blendDstAlpha ?? m.blendDst)
              }
            }}
          >
            initial
          </Button>
          <RadioGroup
            row
            value={srcFactor}
            onChange={(_: any, factor: string) => {
              const m = props?.material?.()
              if (m) {
                m.blending = THREE.CustomBlending
                m.blendSrc = Number(factor)
                m.needsUpdate = true
                five.needsRender = true
              }
              setSrcFactor(Number(factor))
            }}
          >
            {Object.keys(BlendingFactorMap).map((factor) => (
              <FormControlLabel value={BlendingFactorMap[factor]} key={factor} control={<Radio size="small" />} label={factor} />
            ))}
          </RadioGroup>
          <RadioGroup
            row
            value={srcFectorAlpha}
            onChange={(_: any, factor: string) => {
              const m = props?.material?.()
              if (m) {
                m.blending = THREE.CustomBlending
                m.blendSrcAlpha = Number(factor)
                m.needsUpdate = true
                five.needsRender = true
              }
              setSrcFectorAlpha(Number(factor))
            }}
          >
            {Object.keys(BlendingFactorMap).map((factor) => (
              <FormControlLabel value={BlendingFactorMap[factor]} key={factor} control={<Radio size="small" />} label={factor} />
            ))}
          </RadioGroup>
          <RadioGroup
            row
            value={dstFactor}
            onChange={(_: any, factor: string) => {
              const m = props?.material?.()
              if (m) {
                m.blending = THREE.CustomBlending
                m.blendDst = Number(factor)
                m.needsUpdate = true
                five.needsRender = true
              }
              setDstFactor(Number(factor))
            }}
          >
            {Object.keys(BlendingFactorMap).map((factor) => (
              <FormControlLabel value={BlendingFactorMap[factor]} key={factor} control={<Radio size="small" />} label={factor} />
            ))}
          </RadioGroup>
          <RadioGroup
            row
            value={dstFactorAlpha}
            onChange={(_: any, factor: string) => {
              const m = props?.material?.()
              if (m) {
                m.blending = THREE.CustomBlending
                m.blendDstAlpha = Number(factor)
                m.needsUpdate = true
                five.needsRender = true
              }
              setDstFactorAlpha(Number(factor))
            }}
          >
            {Object.keys(BlendingFactorMap).map((factor) => (
              <FormControlLabel value={BlendingFactorMap[factor]} key={factor} control={<Radio size="small" />} label={factor} />
            ))}
          </RadioGroup>
          <RadioGroup
            row
            value={equation}
            onChange={(_: any, equation: string) => {
              const m = props?.material?.()
              if (m) {
                m.blending = THREE.CustomBlending
                m.blendEquation = Number(equation)
                m.needsUpdate = true
                five.needsRender = true
              }
              setEquation(Number(equation))
            }}
          >
            {Object.keys(BlendingEquationMap).map((equation) => (
              <FormControlLabel value={BlendingEquationMap[equation]} key={equation} control={<Radio size="small" />} label={equation} />
            ))}
          </RadioGroup>
          <Slider
            value={opacity}
            onChange={(_, value) => {
              const m = props?.material?.()
              if (m) {
                m.opacity = value as number
                m.needsUpdate = true
                five.needsRender = true
              }
              setOpacity(value as number)
            }}
            valueLabelDisplay="auto"
            step={0.1}
            min={0}
            max={1}
          />
        </FormControl>
      </Paper>
    </>
  )
}
