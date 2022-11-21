import { ContentType } from '@realsee/dnalogel';
export const TagsList = [
    {
        "dimensionType": "2D",
        "pointType": "PointTag",
        "contentType": "Text",
        "position": [
            -2.0543282763294135,
            0.3319934118281651,
            -2.2450259661695933
        ],
        "data": {
            "text": "这是一个文本标签🙋‍♂️🙋‍♂️🙋‍♂️🙋‍♂️🙋‍♂️🙋‍♂️🙋‍♂️，它有很长的标题标题标题标题标题标题标题标题标题标题标题标题标题"
        },
        "style": {
            "point": {
                "style": "CustomIcon",
                "iconUrl": "//vrlab-static.ljcdn.com/release/web/carTagDotContent.08ace25e.png"
            }
        },
        "id": 0
    },
    {
        "dimensionType": "2D",
        "pointType": "PointTag",
        "contentType": "ImageText",
        "position": [
            -1.3311771624715265,
            0,
            -0.8947385152744657
        ],
        "data": {
            "text": "2D图文标签哈哈哈哈哈",
            "mediaData": [
                {
                    "url": "//vrlab-static.ljcdn.com/release/web/jsl/test.69dacffb.mp4",
                    "type": "Video"
                },
                {
                    "url": "//vrlab-static.ljcdn.com/release/web/arrow.c5d028e4.png",
                    "type": "Image"
                },
                {
                    "url": "//vrlab-static.ljcdn.com/release/web/arrow.c5d028e4.png",
                    "type": "Image"
                }
            ]
        },
        "id": 1
    },
    {
        "dimensionType": "3D",
        "pointType": "PlaneTag",
        "contentType": "MediaPlane",
        "position": [
            [
                -1.9866843325110417,
                2.220446049250313e-16,
                0.37528638936879805
            ],
            [
                -0.9866843325110417,
                2.220446049250313e-16,
                0.37528638936879805
            ],
            [
                -1.9866843325110417,
                1.220446049250313e-16,
                0.37528638936879805
            ],
            [
                -1.9866843325110417,
                1.220446049250313e-16,
                0.37528638936879805
            ]
        ],
        "data": {
            "mediaData": [
                {
                    "url": "//vrlab-static.ljcdn.com/release/web/jsl/test.69dacffb.mp4",
                    "type": "Video"
                }
            ]
        },
        "id": 2
    },
    {
        "dimensionType": "2D",
        "pointType": "PointTag",
        "contentType": "Marketing",
        "position": [
            -2.6990631227056436,
            0.018038999289274438,
            -0.3673991100072416
        ],
        "data": {
            "title": "2D营销标签",
            "brandTags": [
                "品牌名称"
            ],
            "tags": [
                "标签描述",
                "标签描述"
            ],
            "headerPictureUrl": "//vrlab-static.ljcdn.com/release/web/cardHeader.19ff7aa0.png",
            "highlightText": "立即查看",
            "price": {
                "value": "20.30",
                "unit": "元起"
            }
        },
        "style": {
            "point": {
                "style": "CustomIcon",
                "iconUrl": "//vrlab-static.ljcdn.com/release/web/carTagDotContent.08ace25e.png"
            }
        },
        "id": 3
    },
    {
        "dimensionType": "3D",
        "pointType": "PointTag",
        "contentType": "Text",
        "normal": [
            -2.6990631227056436,
            0.018038999289274438,
            -0.3673991100072416
        ],
        "position": [
            0.927103332208612,
            0.8445514464586326,
            -0.6591370084540737
        ],
        "data": {
            "text": "3D文本标签哈哈"
        },
        "id": 4
    },
    {
        "dimensionType": "2D",
        "pointType": "PointTag",
        "contentType": "Audio",
        "position": [
            0.17501044773948682,
            1.1010380993204227,
            -2.339700937271118
        ],
        "data": {
            "audioUrl": "//vrlab-static.ljcdn.com/release/web/Bling.678be963.mp3",
            "text": "2D音频标签标题标题标题标标题标题标题标题标题标题标题标题标题标题标题标标题标题"
        },
        "id": 5
    },
    {
        "dimensionType": "2D",
        "pointType": "PointTag",
        "contentType": "Link",
        "position": [
            -0.8070892936181384,
            1.1621840046490304,
            1.0212990045547485
        ],
        "data": {
            "linkType": "vr",
            "text": "2D跳转标签"
        },
        "id": 6
    }
]


export const AddTagData = {
    [ContentType.Text]: {
        "id": "03338b76-b64a-4e90-37fb-44e3c0ffeb56",
        "pointType": "PointTag",
        "dimensionType": "2D",
        "position": [-1.9697880985731286, 1.6096369355028362, -2.339700937271118],
        "data": {
            "text": "创建一个简单的文字标签"
        },
        "style": {
            "point": {
                "style": "Default",
                "iconUrl": "//vrlab-static.ljcdn.com/release/web/tagStyle1.30bff6db.png"
            }
        },
        "contentType": "Text"
    },
    [ContentType.ImageText]: {
        "id": "03338b76-b64a-4e90-37fb-44e3c0ffeb58",
        "pointType": "PointTag",
        "dimensionType": "2D",
        "position": [-0.8340552724043149, 2.1891417065796084, -2.339700937271118],
        "data": {
            "text": "图文标签",
            "mediaData": [
                {
                    "type": "Image",
                    "url": "https://test-vr-public.realsee-cdn.cn/test/uwork/vrcustomer/REALSEE_TECH/gmYwV9YON6Hz0avsvo/2022-11-15_18-32-46.jpg",
                    "name": "magazine-unlock-01-2.3.1336-_1E170DD8392817D3D72576753BB502DA.jpg",
                    "videoCoverUrl": "",
                    "width": 0,
                    "height": 0
                }
            ]
        },
        "style": {
            "point": {
                "style": "CustomIcon",
                "iconUrl": "//vrlab-static.ljcdn.com/release/web/carTagDotContent.08ace25e.png"
            }
        },
        "contentType": "ImageText"
    },
    [ContentType.Audio]: {
        "id": 2268743,
        "pointType": "PointTag",
        "dimensionType": "2D",
        "position": [-2.1892900647187052, 1.6567515982674699, 1.0212990045547485],
        "data": {
            "text": "sadfsdf",
            "audioUrl": "https://test-vr-public.realsee-cdn.cn/test/uwork/vrcustomer/REALSEE_TECH/gmYwV9YON6Hz0avsvo/2022-09-27_11-57-08.mp3"
        },
        "style": {
            "point": {
                "style": "CustomIcon",
                "iconUrl": "//vrlab-static.ljcdn.com/release/web/carTagDotContent.08ace25e.png"
            }
        },
        "contentType": "Audio"
    },
    [ContentType.Marketing]: {
        "id": 2268698,
        "pointType": "PointTag",
        "dimensionType": "2D",
        "position": [-1.338475476220061, 0, -0.33318181321254403],
        "data": {
            "title": "回归营销平面标签",
            "highlightText": "高亮",
            "brandTags": [
                ""
            ],
            "tags": [
                "标签1",
                ""
            ],
            "headerPictureUrl": "//vrlab-static.ljcdn.com/release/web/cardHeader.19ff7aa0.png",
            "price": {
                "value": 0.9385753830250385,
                "unit": "元"
            }
        },
        "style": {
            "point": {
                "style": "Default",
                "iconUrl": "//vrlab-static.ljcdn.com/release/web/tagStyle1.30bff6db.png"
            }
        },
        "contentType": "Marketing"
    },
    [ContentType.Link]: {
        "id": 2268701,
        "pointType": "PointTag",
        "dimensionType": "2D",
        "position": [-1.333800813934946, 0, -2.2449222652733747],
        "data": {
            "text": "回归跳转vr",
            "linkType": "vr"
        },
        "style": {
            "point": {}
        },
        "contentType": "Link"
    },
};