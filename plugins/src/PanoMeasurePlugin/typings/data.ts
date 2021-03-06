export interface LineCompletelyJson {
  id: string
  points: PointJson[]
}

export interface PolylineCompletelyJson {
  id: string
  points: PointJson[]
  lines: LineCompletelyJson[]
}

export interface LineJson {
  id: string
  points: string[]
}

export interface PolylineJson {
  id: string
  points: string[]
  lines: string[]
}

export interface PointJson {
  id: string
  lines: string[]
  position: number[]
}

export interface PluginData {
  lines: LineJson[]
  points: PointJson[]
  polylines: PolylineJson[]
}

/** 开放可配置参数 */
export interface OpenParameter {
  isMobile?: boolean // true为移动端模式，false为pc端
  crossHairParameter?: CrossHairParameter // 准心参数
}

export interface CrossHairParameter {
  useNormalVector?: boolean // 是否展示法向量
  ballColor?: number // 法向量小球色值
}
