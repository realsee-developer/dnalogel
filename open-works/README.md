## 如视公开 Work 数据集。

**Work** 是通过如视硬件设备（[如视扫描仪](https://realsee.com/website/product/hardware) 、[如视 Lite 全景相机](https://realsee.com/website/product/lite) 、[如视 VR App](https://realsee.com/website/mobile) ）扫描并算法加工之后生成的用于描述三维空间展示的数据。

为便于开发、调试和研究，我们面向开源社区公开部分 **Work** 数据集。

## Usage

### 获取 Work 数据

```ts
// JSON
import workJson from '@realsee/open-works/virtual/81RojBlJQdVTglNNMr/work.json'

// ES Modules
import { work } from 'https://cdn.skypack.dev/@realsee/open-works/virtual/81RojBlJQdVTglNNMr/work'
```

### 获取户型图、房间标签等附加数据

```ts
// JSON
import workJson from '@realsee/open-works/virtual/81gmMq5a7zbF9leWMk/work.json' // work
import floorplanServerDataJson from '@realsee/open-works/virtual/81gmMq5a7zbF9leWMk/floorplanServerData.json' // floorplanServerData
import modelRoomLabelsJson from '@realsee/open-works/virtual/81gmMq5a7zbF9leWMk/modelRoomLabels.json' // modelRoomLabels

// ES Modules
import { work, floorplanServerData, modelRoomLabels } from 'https://cdn.skypack.dev/@realsee/open-works/virtual/81gmMq5a7zbF9leWMk/index'
```

## 数据 code 对应数据类型

| code               | work | 户型图数据 | 模型房屋标签数据 | 入户门数据 | 标尺数据 |
| ------------------ | ---- | ---------- | ---------------- | ---------- | -------- |
| 81980RNawnbCVaLz0a | 有   | 无         | 无               | 无         | 无       |
| 81gmMq5a7zbF9leWMk | 有   | 有         | 有               | 有         | 无       |
| 81RojBlJQdVTglNNMr | 有   | 无         | 无               | 无         | 无       |
| 81w1MyAQybVcNa97ME | 有   | 无         | 无               | 无         | 无       |
| 816lPVZQkQDF5XOpPo | 有   | 无         | 无               | 无         | 无       |
| pWLy9ndnVL73Xqja   | 有   | 无         | 无               | 无         | 无       |
