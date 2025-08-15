import { ContentType } from '@realsee/dnalogel/dist'
import { Mode } from '@realsee/five'
import { Vector3 } from 'three'
export const TagsList = [
  {
      "dimensionType": "2D",
      "pointType": "PointTag",
      "contentType": "Text",
      "position": [
          -0.8374842940598678,
          0.23664385864216705,
          -0.7300714787896644
      ],
      "id": 0,
      "data": {},
      "style": {
          "point": {
              "url": "http://localhost:3000/public/tag/icons/v1/front.svg",
              "width": 24,
              "scale": 1,
              "bgcolor": "linear-gradient(to bottom, rgba(182, 59, 59, 0.8), rgba(182, 59, 59, 0.9))",
              "bgopacity": 1,
              "animation": {
                duration: 600,
                loop: true,
                loopInterval: 800,
                timing: 'linear',
                elements: [
                  {
                    selector: '.front-1',
                    properties: {
                      scale: [1, 0.5],
                      opacity: [1, 0],
                      translateY: [0, -5.5],
                    },
                  },
                  {
                    selector: '.front-2',
                    properties: {
                      translateY: [0, -5.5],
                    },
                  },
                  {
                    selector: '.front-3',
                    properties: {
                      scale: [0.5, 1],
                      opacity: [0, 1],
                      translateY: [0, -5.5],
                    },
                  },
                ],
              },
          }
      },
      "fiveState": {
          "distance": 0,
          "fov": 90,
          "latitude": 0,
          "longitude": 0,
          "mode": "Panorama",
          "offset": {
              "x": 0,
              "y": 0,
              "z": 0
          },
          "panoIndex": 0,
          "workCode": "wxA5LEAbKbTq1BvFYx"
      }
  },
  {
      "dimensionType": "2D",
      "pointType": "PointTag",
      "contentType": "Text",
      "position": [
          -0.837351253220655,
          0.23821199445070373,
          -0.7850167998943645
      ],
      "id": 1,
      "data": {},
      "style": {
          "point": {
              "url": "http://localhost:3000/public/tag/icons/v1/front2.svg",
              "width": 24,
              "scale": 1,
              "bgcolor": "linear-gradient(to bottom, rgba(255, 171, 97, 0.8), rgba(255, 171, 97, 0.9))",
              "bgopacity": 1,
              animation: {
                duration: 1200,
                loop: true,
                loopInterval: 300,
                timing: 'ease-in-out',
                elements: [
                  {
                    properties: {
                      translateY: [0, -4, 0],
                      opacity: [1, 0.4, 1],
                    },
                    delay: 0,
                  },
                ],
              },
          }
      },
      "fiveState": {
          "distance": 0,
          "fov": 90,
          "latitude": 0,
          "longitude": 0,
          "mode": "Panorama",
          "offset": {
              "x": 0,
              "y": 0,
              "z": 0
          },
          "panoIndex": 0,
          "workCode": "wxA5LEAbKbTq1BvFYx"
      }
  },
  {
      "dimensionType": "2D",
      "pointType": "PointTag",
      "contentType": "Text",
      "position": [
          -0.8371571842356624,
          0.24400553000233768,
          -0.8629463865936334
      ],
      "id": 2,
      "data": {},
      "style": {
          "point": {
              "url": "http://localhost:3000/public/tag/icons/v1/front3.svg",
              "width": 24,
              "scale": 1,
              "bgcolor": "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
              "bgopacity": 1,
              animation: {
                duration: 1200,
                loop: true,
                loopInterval: 300,
                timing: 'ease-in-out',
                elements: [
                  {
                    properties: {
                      translateY: [0, -4, 0],
                      opacity: [1, 0.4, 1],
                    },
                    delay: 0,
                  },
                ],
              },
          }
      },
      "fiveState": {
          "distance": 0,
          "fov": 90,
          "latitude": 0.1001814882032668,
          "longitude": 6.257051005909164,
          "mode": "Panorama",
          "offset": {
              "x": 0,
              "y": 0,
              "z": 0
          },
          "panoIndex": 0,
          "workCode": "wxA5LEAbKbTq1BvFYx"
      }
  },
  {
      "dimensionType": "2D",
      "pointType": "PointTag",
      "contentType": "Text",
      "position": [
          -0.8368972859175102,
          0.24652212105270935,
          -0.9706295691554911
      ],
      "id": 3,
      "data": {},
      "style": {
          "point": {
              "url": "http://localhost:3000/public/tag/icons/v1/back.svg",
              "width": 24,
              "scale": 1,
              "bgcolor": "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
              "bgopacity": 1,
              animation: {
                duration: 600,
                loop: true,
                loopInterval: 800,
                timing: 'linear',
                elements: [
                  {
                    selector: '.back-1',
                    properties: {
                      scale: [1, 0.5],
                      opacity: [1, 0],
                      translateY: [0, 5.5],
                    },
                    delay: 0,
                  },
                  {
                    selector: '.back-2',
                    properties: {
                      translateY: [0, 5.5],
                    },
                    delay: 0,
                  },
                  {
                    selector: '.back-3',
                    properties: {
                      scale: [0.5, 1],
                      opacity: [0, 1],
                      translateY: [0, 5.5],
                    },
                    delay: 0,
                  },
                ],
              },
          }
      },
      "fiveState": {
          "distance": 0,
          "fov": 90,
          "latitude": 0.1001814882032668,
          "longitude": 6.257051005909164,
          "mode": "Panorama",
          "offset": {
              "x": 0,
              "y": 0,
              "z": 0
          },
          "panoIndex": 0,
          "workCode": "wxA5LEAbKbTq1BvFYx"
      }
  },
  {
      "dimensionType": "2D",
      "pointType": "PointTag",
      "contentType": "Text",
      "position": [
          -0.8365608977402795,
          0.24562986709849724,
          -1.112632189601319
      ],
      "id": 4,
      "data": {},
      "style": {
          "point": {
              "url": "http://localhost:3000/public/tag/icons/v1/back2.svg",
              "width": 24,
              "scale": 1,
              "bgcolor": "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
              "bgopacity": 1,
              animation: {
                duration: 1200,
                loop: true,
                loopInterval: 300,
                timing: 'ease-in-out',
                elements: [
                  {
                    properties: {
                      translateY: [0, 4, 0],
                      opacity: [1, 0.4, 1],
                    },
                    delay: 0,
                  },
                ],
              },
          }
      },
      "fiveState": {
          "distance": 0,
          "fov": 90,
          "latitude": 0.1001814882032668,
          "longitude": 6.257051005909164,
          "mode": "Panorama",
          "offset": {
              "x": 0,
              "y": 0,
              "z": 0
          },
          "panoIndex": 0,
          "workCode": "wxA5LEAbKbTq1BvFYx"
      }
  },
  {
      "dimensionType": "2D",
      "pointType": "PointTag",
      "contentType": "Text",
      "position": [
          -0.8357050346611057,
          0.24480448481672928,
          -1.251759978483392
      ],
      "id": 5,
      "data": {},
      "style": {
          "point": {
              "url": "http://localhost:3000/public/tag/icons/v1/back3.svg",
              "width": 24,
              "scale": 1,
              "bgcolor": "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
              "bgopacity": 1,
              animation: {
                duration: 1200,
                loop: true,
                loopInterval: 300,
                timing: 'ease-in-out',
                elements: [
                  {
                    properties: {
                      translateY: [0, 4, 0],
                      opacity: [1, 0.4, 1],
                    },
                    delay: 0,
                  },
                ],
              },
          }
      },
      "fiveState": {
          "distance": 0,
          "fov": 90,
          "latitude": 0.1001814882032668,
          "longitude": 6.257051005909164,
          "mode": "Panorama",
          "offset": {
              "x": 0,
              "y": 0,
              "z": 0
          },
          "panoIndex": 0,
          "workCode": "wxA5LEAbKbTq1BvFYx"
      }
  },
  {
      "dimensionType": "2D",
      "pointType": "PointTag",
      "contentType": "Text",
      "position": [
          -0.8376741960312374,
          0.13620991658492346,
          -0.7138220332620768
      ],
      "id": 6,
      "data": {},
      "style": {
          "point": {
              "url": "http://localhost:3000/public/tag/icons/v1/left.svg",
              "width": 24,
              "scale": 1,
              "bgcolor": "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
              "bgopacity": 1,
              animation: {
                duration: 600,
                loop: true,
                loopInterval: 800,
                timing: 'linear',
                elements: [
                  {
                    selector: '.left-1',
                    properties: {
                      scale: [1, 0.5],
                      opacity: [1, 0],
                      translateX: [0, -7],
                    },
                    delay: 0,
                  },
                  {
                    selector: '.left-2',
                    properties: {
                      translateX: [0, -7],
                    },
                    delay: 0,
                  },
                  {
                    selector: '.left-3',
                    properties: {
                      scale: [0.5, 1],
                      opacity: [0, 1],
                      translateX: [0, -7],
                    },
                    delay: 0,
                  },
                ],
              },
          }
      },
      "fiveState": {
          "distance": 0,
          "fov": 90,
          "latitude": 0.1001814882032668,
          "longitude": 6.257051005909164,
          "mode": "Panorama",
          "offset": {
              "x": 0,
              "y": 0,
              "z": 0
          },
          "panoIndex": 0,
          "workCode": "wxA5LEAbKbTq1BvFYx"
      }
  },
  {
      "dimensionType": "2D",
      "pointType": "PointTag",
      "contentType": "Text",
      "position": [
          -0.8375332086371772,
          0.13929719200925175,
          -0.7711466117078192
      ],
      "id": 7,
      "data": {},
      "style": {
          "point": {
              "url": "http://localhost:3000/public/tag/icons/v1/left2.svg",
              "width": 24,
              "scale": 1,
              "bgcolor": "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
              "bgopacity": 1,
              animation: {
                duration: 1200,
                loop: true,
                loopInterval: 300,
                timing: 'ease-in-out',
                elements: [
                  {
                    properties: {
                      translateX: [0, -4, 0],
                      opacity: [1, 0.4, 1],
                    },
                    delay: 0,
                  },
                ],
              },
          }
      },
      "fiveState": {
          "distance": 0,
          "fov": 90,
          "latitude": 0.1001814882032668,
          "longitude": 6.257051005909164,
          "mode": "Panorama",
          "offset": {
              "x": 0,
              "y": 0,
              "z": 0
          },
          "panoIndex": 0,
          "workCode": "wxA5LEAbKbTq1BvFYx"
      }
  },
  {
      "dimensionType": "2D",
      "pointType": "PointTag",
      "contentType": "Text",
      "position": [
          -0.8373537418232007,
          0.14052663792111664,
          -0.8458266430148125
      ],
      "id": 8,
      "data": {},
      "style": {
          "point": {
              "url": "http://localhost:3000/public/tag/icons/v1/left3.svg",
              "width": 24,
              "scale": 1,
              "bgcolor": "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
              "bgopacity": 1,
              animation: {
                duration: 1200,
                loop: true,
                loopInterval: 300,
                timing: 'ease-in-out',
                elements: [
                  {
                    properties: {
                      translateX: [0, -4, 0],
                      opacity: [1, 0.4, 1],
                    },
                    delay: 0,
                  },
                ],
              },
          }
      },
      "fiveState": {
          "distance": 0,
          "fov": 90,
          "latitude": 0.1001814882032668,
          "longitude": 6.257051005909164,
          "mode": "Panorama",
          "offset": {
              "x": 0,
              "y": 0,
              "z": 0
          },
          "panoIndex": 0,
          "workCode": "wxA5LEAbKbTq1BvFYx"
      }
  },
  {
      "dimensionType": "2D",
      "pointType": "PointTag",
      "contentType": "Text",
      "position": [
          -0.8370623868554664,
          0.14247708321749677,
          -0.9670945690578343
      ],
      "id": 9,
      "data": {},
      "style": {
          "point": {
              "url": "http://localhost:3000/public/tag/icons/v1/right.svg",
              "width": 24,
              "scale": 1,
              "bgcolor": "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
              "bgopacity": 1,
              animation: {
                duration: 600,
                loop: true,
                loopInterval: 800,
                timing: 'linear',
                elements: [
                  {
                    selector: '.right-1',
                    properties: {
                      scale: [1, 0.5],
                      opacity: [1, 0],
                      translateX: [0, 7],
                    },
                    delay: 0,
                  },
                  {
                    selector: '.right-2',
                    properties: {
                      translateX: [0, 7],
                    },
                    delay: 0,
                  },
                  {
                    selector: '.right-3',
                    properties: {
                      scale: [0.5, 1],
                      opacity: [0, 1],
                      translateX: [0, 7],
                    },
                    delay: 0,
                  },
                ],
              },
          }
      },
      "fiveState": {
          "distance": 0,
          "fov": 90,
          "latitude": 0.1001814882032668,
          "longitude": 6.257051005909164,
          "mode": "Panorama",
          "offset": {
              "x": 0,
              "y": 0,
              "z": 0
          },
          "panoIndex": 0,
          "workCode": "wxA5LEAbKbTq1BvFYx"
      }
  },
  {
      "dimensionType": "2D",
      "pointType": "PointTag",
      "contentType": "Text",
      "position": [
          -0.8367516748850193,
          0.13647199304685123,
          -1.1015389264135815
      ],
      "id": 10,
      "data": {},
      "style": {
          "point": {
              "url": "http://localhost:3000/public/tag/icons/v1/right2.svg",
              "width": 24,
              "scale": 1,
              "bgcolor": "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
              "bgopacity": 1,
              animation: {
                duration: 1200,
                loop: true,
                loopInterval: 800,
                timing: 'ease-in-out',
                elements: [
                  {
                    properties: {
                      translateX: [0, 2, -1, 2, 0],
                    },
                    delay: 0,
                  },
                ],
              },
          }
      },
      "fiveState": {
          "distance": 0,
          "fov": 90,
          "latitude": 0.1001814882032668,
          "longitude": 6.257051005909164,
          "mode": "Panorama",
          "offset": {
              "x": 0,
              "y": 0,
              "z": 0
          },
          "panoIndex": 0,
          "workCode": "wxA5LEAbKbTq1BvFYx"
      }
  },
  {
      "dimensionType": "2D",
      "pointType": "PointTag",
      "contentType": "Text",
      "position": [
          -0.8363611230263629,
          0.1195119655546905,
          -1.2764896006473656
      ],
      "id": 11,
      "data": {},
      "style": {
          "point": {
              "url": "http://localhost:3000/public/tag/icons/v1/right3.svg",
              "width": 24,
              "scale": 1,
              "bgcolor": "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
              "bgopacity": 1,
              animation: {
                duration: 1200,
                loop: true,
                loopInterval: 300,
                timing: 'ease-in-out',
                elements: [
                  {
                    properties: {
                      translateX: [0, 4, 0],
                      opacity: [1, 0.4, 1],
                    },
                    delay: 0,
                  },
                ],
              },
          }
      },
      "fiveState": {
          "distance": 0,
          "fov": 90,
          "latitude": 0.1001814882032668,
          "longitude": 6.257051005909164,
          "mode": "Panorama",
          "offset": {
              "x": 0,
              "y": 0,
              "z": 0
          },
          "panoIndex": 0,
          "workCode": "wxA5LEAbKbTq1BvFYx"
      }
  },
  {
      "dimensionType": "2D",
      "pointType": "PointTag",
      "contentType": "Text",
      "position": [
          -0.8377680263494852,
          0.042984495724858,
          -0.6944391637812837
      ],
      "id": 12,
      "data": {},
      "style": {
          "point": {
              "url": "http://localhost:3000/public/tag/icons/v1/up.svg",
              "width": 24,
              "scale": 1,
              "bgcolor": "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
              "bgopacity": 1,
              animation: {
                duration: 600,
                loop: true,
                loopInterval: 800,
                timing: 'linear',
                elements: [
                  {
                    selector: '.up-1',
                    properties: {
                      scale: [1, 0.5],
                      opacity: [1, 0],
                      translateY: [0, -7],
                    },
                    delay: 0,
                  },
                  {
                    selector: '.up-2',
                    properties: {
                      translateY: [0, -7],
                    },
                    delay: 0,
                  },
                  {
                    selector: '.up-3',
                    properties: {
                      scale: [0.5, 1],
                      opacity: [0, 1],
                      translateY: [0, -7],
                    },
                    delay: 0,
                  },
                ],
              },
          }
      },
      "fiveState": {
          "distance": 0,
          "fov": 90,
          "latitude": 0.09147005444646102,
          "longitude": 0.11760435571687423,
          "mode": "Panorama",
          "offset": {
              "x": 0,
              "y": 0,
              "z": 0
          },
          "panoIndex": 0,
          "workCode": "wxA5LEAbKbTq1BvFYx"
      }
  },
  {
      "dimensionType": "2D",
      "pointType": "PointTag",
      "contentType": "Text",
      "position": [
          -0.8372774263145665,
          0.02397105715309901,
          -0.9517194087781629
      ],
      "id": 13,
      "data": {},
      "style": {
          "point": {
              "url": "http://localhost:3000/public/tag/icons/v1/down.svg",
              "width": 24,
              "scale": 1,
              "bgcolor": "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))",
              "bgopacity": 1,
              animation: {
                duration: 600,
                loop: true,
                loopInterval: 800,
                timing: 'linear',
                elements: [
                  {
                    selector: '.down-1',
                    properties: {
                      scale: [1, 0.5],
                      opacity: [1, 0],
                      translateY: [0, 7],
                    },
                    delay: 0,
                  },
                  {
                    selector: '.down-2',
                    properties: {
                      translateY: [0, 7],
                    },
                    delay: 0,
                  },
                  {
                    selector: '.down-3',
                    properties: {
                      scale: [0.5, 1],
                      opacity: [0, 1],
                      translateY: [0, 7],
                    },
                    delay: 0,
                  },
                ],
              },
          }
      },
      "fiveState": {
          "distance": 0,
          "fov": 90,
          "latitude": 0.09147005444646102,
          "longitude": 0.11760435571687423,
          "mode": "Panorama",
          "offset": {
              "x": 0,
              "y": 0,
              "z": 0
          },
          "panoIndex": 0,
          "workCode": "wxA5LEAbKbTq1BvFYx"
      }
  }
]