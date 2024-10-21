import { Tag } from '@realsee/dnalogel'

const position = [
  [-0.2618608363261276, 0.7966536323282932, 1.0212990045547485],
  [-0.8321788855090357, 1.5315354153621823, 1.0212990045547485],
  [-0.2596689191831259, 1.4952368436827168, 1.0212990045547485],
  [-0.8869323540820258, 1.0361685937339613, 1.0212990045547485],
  [-1.8065665408063518, 2.220446049250313e-16, 0.021781274924593447],
  [-1.6769760292158853, 0, -1.2588904497608848],
  [-1.477148299370223, 0.6794790938908233, -2.339700937271118],
  [-1.412154525197246, 1.3321209910908967, -2.339700937271118],
  [-0.13450229902227245, 1.9479987642711007, -2.339700937271118],
  [0.40453655275837064, 1.8774880405246819, -2.339700937271118],
  [-0.17904231756003058, 0.8062602516079178, -2.339700937271118],
  [0.490196703883047, 0.7845569305289914, -2.339700937271118],
]

const datas: Tag<'Marketing'>['data'][] = [
  {
    title: '标题很短',
  },
  {
    title: '标题很长长长长长长长长长长长长长长长长长长',
  },
  {
    title: 'tag很短标题很长长长长长长长长长长长长长长长长长长长长长长长长',
    tags: ['tags1'],
  },
  {
    title: '标题很短',
    tags: ['tags很少'],
  },
  {
    title: '标题很短',
    brandTags: ['tags很多'],
    tags: ['tags很多', 'tags2', 'tags3dsjadklsajdklsa', 't', 'tags5', 'tags6'],
    price: {
      value: '100',
      unit: '元',
    },
    headerPictureUrl: '//vr-static.realsee-cdn.cn/release/web/cardHeader.19ff7aa0.png',
    highlightText: '了解不多',
  },
  {
    title: 'Marketing',
    tags: ['tags1dsadhsjkadhskjahdjksahdkahjkdsa'],
  },
  {
    title: 'limitWidth f',
    brandTags: ['tags1'],
    tags: ['tags1', 'tags2', 'tags3', 't', 'tags5', 'tags6'],
    highlightText: '了解更多',
    limitWidth: false,
  },
  {
    title: 'limitWidth true',
    brandTags: ['tags1'],
    tags: ['tags1', 'tags2', 'tags3', 't', 'tags5', 'tags6'],
    price: {
      value: '100',
      unit: '元',
    },
    highlightText: '了解超多多多多多了解超多多多多多了解超多多多多多了解超多多多多多',
  },
  {
    title: 'Marketing limitWidth true true true true true true true true true true true',
    brandTags: ['tags1'],
    tags: ['tags1', 'tags2', 'tags3', 't', 'tags5', 'tags6'],
  },
]

if (datas.length > position.length) throw new Error('datas.length > position.length')

const tags: Tag<'Marketing'>[] = datas.map((data, index) => ({
  id: index,
  stickType: '2DPoint',
  position: position[index],
  contentType: 'Marketing',
  data: { ...data, title: `${index}${data.title}` },
}))

export default tags
