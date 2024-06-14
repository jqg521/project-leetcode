<script setup lang="ts">
import { UserGraph } from '../../lib/my-antv-plugin.es'
const formJson = {
  cells: [
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#88D13800',
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          strokeDasharray: '10, 5',
          opacity: 0.1
        },
        line3: {
          connection: true,
          stroke: 'rgba(114,185,32,0.39)',
          strokeWidth: 15,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 1
        },
        line2: {
          connection: true,
          stroke: 'rgba(126,211,33,1)',
          strokeWidth: 3,
          strokeDasharray: '10, 5',
          opacity: 1,
          style: {
            animation: 'ant-line 30s infinite linear',
            zIndex: 1
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          stroke: '#973636B3',
          opacity: 0
        }
      },
      id: 'd87021c6-36ef-410f-8758-96f44e1a4b8d',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      zIndex: 0,
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      animation: 'water',
      source: {
        x: 770,
        y: 290
      },
      target: {
        x: 680,
        y: 470
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: 'rgba(0,0,0,0)',
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          strokeDasharray: '0',
          opacity: 1
        },
        line3: {
          connection: true,
          stroke: 'rgba(151,54,54,0.7)',
          strokeWidth: 15,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 0
        },
        line2: {
          connection: true,
          stroke: '',
          strokeWidth: 5,
          opacity: 0,
          style: {
            animation: 'ant-line 30s infinite linear',
            zIndex: 1
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          stroke: '#973636B3',
          opacity: 1,
          strokeWidth: 15
        }
      },
      id: '828c2f59-fd01-4fd9-b332-e37a83a0fdfe',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      zIndex: 0,
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      animation: 'water',
      source: {
        x: 680,
        y: 470
      },
      target: {
        x: 630,
        y: 570
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#00000000',
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          opacity: 1,
          strokeDasharray: '0'
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          strokeWidth: 15,
          stroke: '#973636B3',
          opacity: 1
        },
        line3: {
          connection: true,
          stroke: '#7ED3215E',
          strokeWidth: 15,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 0
        },
        line2: {
          connection: true,
          stroke: 'rgba(126,211,33,1)',
          strokeWidth: 5,
          strokeDasharray: '10, 5',
          opacity: 0,
          style: {
            zIndex: 1,
            animation: 'ant-line 30s infinite linear'
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        }
      },
      id: '84f1c493-1dc2-4f7c-b872-f337005f592d',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      zIndex: 0,
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      animation: 'water',
      nodeName: '边2',
      edgeData: [
        {
          id: 0,
          event: 'valueChange',
          eventAction: 'playAnimation',
          hrefImage: '',
          targetObject: '',
          watchObject: ['4', '1507984447662718979', '1507997953359347713'],
          condition: '>,<',
          attrName: 'value',
          attrValue: '365',
          attrValueRight: '400'
        }
      ],
      source: {
        x: 850,
        y: 110
      },
      target: {
        x: 1320,
        y: 280
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: 'rgba(0,0,0,0)',
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          opacity: 1
        },
        line3: {
          connection: true,
          stroke: '#7ED3215C',
          strokeWidth: 15,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 0
        },
        line2: {
          connection: true,
          stroke: 'rgba(126,211,33,1)',
          strokeWidth: 5,
          strokeDasharray: '10, 5',
          opacity: 0,
          style: {
            animation: 'ant-line 30s infinite linear',
            zIndex: 1
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          strokeWidth: 15,
          stroke: '#973636B3',
          opacity: 1
        }
      },
      id: '929088f7-f985-4d96-bbc0-c242aeeb4dfb',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      zIndex: 0,
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      animation: 'water',
      source: {
        x: 810,
        y: 200
      },
      target: {
        x: 1290,
        y: 380
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: 'rgba(0,0,0,0)',
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          opacity: 1
        },
        line3: {
          connection: true,
          stroke: '#942F2F00',
          strokeWidth: 15,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 0
        },
        line2: {
          connection: true,
          stroke: '',
          strokeWidth: 5,
          opacity: 0,
          style: {
            animation: 'ant-line 30s infinite linear',
            zIndex: 1
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          stroke: '#973636B3',
          opacity: 1,
          strokeWidth: 15
        }
      },
      id: 'c2b6cd34-4dc6-4c7d-9d3b-d9712d17bf72',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      zIndex: 0,
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      animation: 'water',
      source: {
        x: 850,
        y: 110
      },
      target: {
        x: 770,
        y: 290
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: 'rgba(0,0,0,0)',
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          opacity: 1
        },
        line3: {
          connection: true,
          stroke: 'rgba(151,54,54,0.7)',
          strokeWidth: 13,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 0
        },
        line2: {
          connection: true,
          stroke: '',
          strokeWidth: 5,
          opacity: 0,
          style: {
            animation: 'ant-line 30s infinite linear',
            zIndex: 1
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          strokeWidth: 15,
          stroke: '#973636B3',
          opacity: 1
        }
      },
      id: 'e52c35a6-a627-4483-80c0-56d88306ccca',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      zIndex: 0,
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      animation: 'water',
      source: {
        x: 680,
        y: 470
      },
      target: {
        x: 1160,
        y: 650
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#A2B1C3',
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true
        },
        line4: {
          connection: true,
          stroke: '#973636B3',
          strokeWidth: 5
        },
        line3: {
          connection: true,
          stroke: '',
          strokeWidth: 5
        },
        line2: {
          connection: true,
          stroke: '',
          strokeWidth: 5
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10
        }
      },
      id: '8ac12064-a594-4d59-83ff-c2956d6922b2',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      zIndex: 0,
      source: {
        cell: '683f59af-290f-4155-ae1e-c01b3bb982ee',
        port: '2c384b4d-4c3f-4d87-b997-e82cb7ff739e'
      },
      target: {
        x: 900,
        y: 620
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#00000000',
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          opacity: 1,
          strokeDasharray: '0'
        },
        line4: {
          strokeDasharray: 0,
          strokeWidth: 15,
          stroke: '#D36A6AB3',
          opacity: 1,
          connection: true
        },
        line3: {
          connection: true,
          stroke: 'rgba(151,54,54,0.7)',
          strokeWidth: 15,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 0
        },
        line2: {
          connection: true,
          stroke: 'rgba(126,211,33,1)',
          strokeWidth: 5,
          strokeDasharray: '10, 5',
          opacity: 0,
          style: {
            zIndex: 1,
            animation: 'ant-line 30s infinite linear'
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        }
      },
      id: '1d6b6c51-e921-401b-98cd-706a6b96af61',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      zIndex: 0,
      animation: 'water',
      source: {
        x: 377,
        y: 327
      },
      target: {
        x: 153,
        y: 417
      }
    },
    {
      position: {
        x: 785,
        y: 40
      },
      size: {
        width: 140,
        height: 100
      },
      attrs: {
        image: {
          'xlink:href': '/image/zyz.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: 'e377007b-eabf-40e7-8a5f-cc515ede693e',
      zIndex: 1,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'bd9944d0-ba77-47ee-b080-ea732d51dc11',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: 'ef09c7c0-ca90-4159-94a1-8d1d4f8d7149',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '1416e7b9-5ec9-4e6b-bb2d-95f79c495ca5',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: 'e0af8e9e-083c-4702-a4b3-adfdfa04d562',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 20,
      position: {
        x: 835.4358212329792,
        y: 204.04672858170392
      },
      size: {
        width: 467,
        height: 40
      },
      attrs: {
        image: {
          xlinkHref: '/image/md1.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: '34189acb-7062-42b8-90a6-96c0d12db598',
      rotation: 0,
      zIndex: '1',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'aa77e294-2006-480b-a091-d57974acca7e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '640c2c1a-93ba-4af4-9b0b-6c9b6d760f59',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '1ba90df8-4e0c-47d7-9eef-bb69d4cbf2ef',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: 'f7b39d1e-24bb-4334-b422-add4c7e360f8',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 20,
      position: {
        x: 823.4358212329792,
        y: 238.0467285817039
      },
      size: {
        width: 467,
        height: 40
      },
      attrs: {
        image: {
          xlinkHref: '/image/md1.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: 'a5373c94-b293-41c6-a62c-27bb1bcf740f',
      rotation: 0,
      zIndex: '1',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'aa77e294-2006-480b-a091-d57974acca7e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '640c2c1a-93ba-4af4-9b0b-6c9b6d760f59',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '1ba90df8-4e0c-47d7-9eef-bb69d4cbf2ef',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: 'f7b39d1e-24bb-4334-b422-add4c7e360f8',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 20.5,
      position: {
        x: 797.7586298200231,
        y: 296.6555558822618
      },
      size: {
        width: 467,
        height: 40
      },
      attrs: {
        image: {
          xlinkHref: '/image/md1.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: '70a780b4-1467-4bcd-904a-6f86de2c8156',
      rotation: 0,
      zIndex: '1',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'aa77e294-2006-480b-a091-d57974acca7e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '640c2c1a-93ba-4af4-9b0b-6c9b6d760f59',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '1ba90df8-4e0c-47d7-9eef-bb69d4cbf2ef',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: 'f7b39d1e-24bb-4334-b422-add4c7e360f8',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 20.5,
      position: {
        x: 785.7586298200231,
        y: 329.6555558822618
      },
      size: {
        width: 467,
        height: 40
      },
      attrs: {
        image: {
          xlinkHref: '/image/md1.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: '62c4a140-9906-4bb5-a76b-b969465d1ddf',
      rotation: 0,
      zIndex: '1',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'aa77e294-2006-480b-a091-d57974acca7e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '640c2c1a-93ba-4af4-9b0b-6c9b6d760f59',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '1ba90df8-4e0c-47d7-9eef-bb69d4cbf2ef',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: 'f7b39d1e-24bb-4334-b422-add4c7e360f8',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 20.5,
      position: {
        x: 756.7586298200231,
        y: 385.6555558822618
      },
      size: {
        width: 467,
        height: 40
      },
      attrs: {
        image: {
          xlinkHref: '/image/md1.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: '674d5d3e-cc2f-4a46-a031-a9a6a3741f23',
      rotation: 0,
      zIndex: '1',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'aa77e294-2006-480b-a091-d57974acca7e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '640c2c1a-93ba-4af4-9b0b-6c9b6d760f59',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '1ba90df8-4e0c-47d7-9eef-bb69d4cbf2ef',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: 'f7b39d1e-24bb-4334-b422-add4c7e360f8',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 20.5,
      position: {
        x: 744.2171038146902,
        y: 419.2711631659921
      },
      size: {
        width: 467,
        height: 40
      },
      attrs: {
        image: {
          xlinkHref: '/image/md1.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: '2bed1ab5-0ffb-4bc7-aac6-d18cd7d341cb',
      rotation: 0,
      zIndex: '1',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'aa77e294-2006-480b-a091-d57974acca7e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '640c2c1a-93ba-4af4-9b0b-6c9b6d760f59',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '1ba90df8-4e0c-47d7-9eef-bb69d4cbf2ef',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: 'f7b39d1e-24bb-4334-b422-add4c7e360f8',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 20,
      position: {
        x: 711.7828961853098,
        y: 474.5068673090536
      },
      size: {
        width: 480,
        height: 40
      },
      attrs: {
        image: {
          xlinkHref: '/image/md1.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: 'a57715f7-ae43-4fbb-9357-596fa79f6095',
      rotation: 0,
      zIndex: '1',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'aa77e294-2006-480b-a091-d57974acca7e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '640c2c1a-93ba-4af4-9b0b-6c9b6d760f59',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '1ba90df8-4e0c-47d7-9eef-bb69d4cbf2ef',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: 'f7b39d1e-24bb-4334-b422-add4c7e360f8',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 20,
      position: {
        x: 699.7828961853098,
        y: 508.5068673090536
      },
      size: {
        width: 477,
        height: 40
      },
      attrs: {
        image: {
          xlinkHref: '/image/md1.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: '737195b2-8a87-4188-8f67-d30d2aaf29ae',
      rotation: 0,
      zIndex: '1',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'aa77e294-2006-480b-a091-d57974acca7e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '640c2c1a-93ba-4af4-9b0b-6c9b6d760f59',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '1ba90df8-4e0c-47d7-9eef-bb69d4cbf2ef',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: 'f7b39d1e-24bb-4334-b422-add4c7e360f8',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 21,
      position: {
        x: 665.5429070760474,
        y: 569.3656565988902
      },
      size: {
        width: 485,
        height: 40
      },
      attrs: {
        image: {
          xlinkHref: '/image/md1.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: '6f18d59b-f303-43a6-a8ab-edca933d4fe4',
      rotation: 0,
      zIndex: '1',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'aa77e294-2006-480b-a091-d57974acca7e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '640c2c1a-93ba-4af4-9b0b-6c9b6d760f59',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '1ba90df8-4e0c-47d7-9eef-bb69d4cbf2ef',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: 'f7b39d1e-24bb-4334-b422-add4c7e360f8',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 21,
      position: {
        x: 652.5429070760474,
        y: 604.3656565988902
      },
      size: {
        width: 485,
        height: 40
      },
      attrs: {
        image: {
          xlinkHref: '/image/md1.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: '22d8021b-83dc-449f-b22e-59d6c46d0084',
      rotation: 0,
      zIndex: '1',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'aa77e294-2006-480b-a091-d57974acca7e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '640c2c1a-93ba-4af4-9b0b-6c9b6d760f59',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '1ba90df8-4e0c-47d7-9eef-bb69d4cbf2ef',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: 'f7b39d1e-24bb-4334-b422-add4c7e360f8',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 20,
      position: {
        x: 616.9393875835226,
        y: 668.5758362946793
      },
      size: {
        width: 495,
        height: 40
      },
      attrs: {
        image: {
          xlinkHref: '/image/md1.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: 'fa2a3fc1-618a-49fd-809e-2e7d789b8d95',
      rotation: 0,
      zIndex: '1',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'aa77e294-2006-480b-a091-d57974acca7e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '640c2c1a-93ba-4af4-9b0b-6c9b6d760f59',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '1ba90df8-4e0c-47d7-9eef-bb69d4cbf2ef',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: 'f7b39d1e-24bb-4334-b422-add4c7e360f8',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 20,
      position: {
        x: 603.9393875835226,
        y: 705.5758362946793
      },
      size: {
        width: 495,
        height: 40
      },
      attrs: {
        image: {
          xlinkHref: '/image/md1.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: '6a33f219-2abb-4694-bdbc-7e20ad450c59',
      rotation: 0,
      zIndex: '1',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'aa77e294-2006-480b-a091-d57974acca7e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '640c2c1a-93ba-4af4-9b0b-6c9b6d760f59',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '1ba90df8-4e0c-47d7-9eef-bb69d4cbf2ef',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: 'f7b39d1e-24bb-4334-b422-add4c7e360f8',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 736,
        y: 138
      },
      size: {
        width: 150,
        height: 80
      },
      attrs: {
        image: {
          'xlink:href': '/image/zyz.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: 'd588f91f-1f8f-489c-953a-b5e2b83495a3',
      zIndex: 4,
      data: [
        {
          id: 1,
          event: 'mouseenter',
          eventAction: 'changeImage',
          hrefImage: '',
          targetObject: '',
          watchObject: '',
          condition: '',
          attrName: '',
          attrValue: ''
        }
      ],
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'bd9944d0-ba77-47ee-b080-ea732d51dc11',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: 'ef09c7c0-ca90-4159-94a1-8d1d4f8d7149',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '1416e7b9-5ec9-4e6b-bb2d-95f79c495ca5',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: 'e0af8e9e-083c-4702-a4b3-adfdfa04d562',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 612,
        y: 400.1624231913154
      },
      size: {
        width: 140,
        height: 100
      },
      attrs: {
        image: {
          'xlink:href': '/image/zyz.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: 'd1f4c5d3-cd70-40ac-b9c0-7524d9df62ac',
      zIndex: 10,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'bd9944d0-ba77-47ee-b080-ea732d51dc11',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: 'ef09c7c0-ca90-4159-94a1-8d1d4f8d7149',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '1416e7b9-5ec9-4e6b-bb2d-95f79c495ca5',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: 'e0af8e9e-083c-4702-a4b3-adfdfa04d562',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#88D13800',
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          strokeDasharray: '10, 5',
          opacity: 0.1
        },
        line3: {
          connection: true,
          stroke: 'rgba(114,185,32,0.39)',
          strokeWidth: 15,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 1
        },
        line2: {
          connection: true,
          stroke: 'rgba(126,211,33,1)',
          strokeWidth: 3,
          strokeDasharray: '10, 5',
          opacity: 1,
          style: {
            animation: 'ant-line 30s infinite linear',
            zIndex: 1
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          strokeWidth: 15,
          stroke: '#973636B3',
          opacity: 0
        }
      },
      id: '7c8855ce-5277-4e63-b46a-5851c8e1812f',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      zIndex: 11,
      animation: 'water',
      source: {
        x: 630,
        y: 570
      },
      target: {
        x: 542,
        y: 742
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#97363600',
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          strokeDasharray: '10, 5',
          opacity: 0.1
        },
        line3: {
          connection: true,
          stroke: 'rgba(114,185,32,0.39)',
          strokeWidth: 15,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 1
        },
        line2: {
          connection: true,
          stroke: 'rgba(126,211,33,1)',
          strokeWidth: 3,
          strokeDasharray: '10, 5',
          opacity: 1,
          style: {
            animation: 'ant-line 30s infinite linear',
            zIndex: 1
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          strokeWidth: 15,
          stroke: '#973636B3',
          opacity: 0
        }
      },
      id: 'bf5fbca1-1c58-462f-839e-3f3723aae82f',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      zIndex: 12,
      animation: 'water',
      source: {
        x: 1240,
        y: 470
      },
      target: {
        x: 760,
        y: 290
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#88D13800',
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          strokeDasharray: '10, 5',
          opacity: 1
        },
        line3: {
          connection: true,
          stroke: 'rgba(114,185,32,0.39)',
          strokeWidth: 13,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 0
        },
        line2: {
          connection: true,
          stroke: 'rgba(126,211,33,1)',
          strokeWidth: 3,
          strokeDasharray: '10, 5',
          opacity: 0,
          style: {
            animation: 'ant-line 30s infinite linear',
            zIndex: 1
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          strokeWidth: 15,
          stroke: '#973636B3',
          opacity: 1
        }
      },
      id: 'b7d55753-c112-48f9-b127-16c7da1306cc',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      zIndex: 13,
      animation: 'water',
      source: {
        x: 1200,
        y: 550
      },
      target: {
        x: 730,
        y: 380
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#88D13800',
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          strokeDasharray: '10, 5',
          opacity: 0.1
        },
        line3: {
          connection: true,
          stroke: 'rgba(114,185,32,0.39)',
          strokeWidth: 13,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 1
        },
        line2: {
          connection: true,
          stroke: 'rgba(126,211,33,1)',
          strokeWidth: 3,
          strokeDasharray: '10, 5',
          opacity: 1,
          style: {
            animation: 'ant-line 30s infinite linear',
            zIndex: 1
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          strokeWidth: 15,
          stroke: '#973636B3',
          opacity: 0
        }
      },
      id: '5cbaa394-b50c-4746-ac86-e8d13578497c',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      zIndex: 14,
      animation: 'water',
      source: {
        x: 1140,
        y: 750
      },
      target: {
        x: 615,
        y: 560
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#88D13800',
          strokeWidth: 3,
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          strokeDasharray: '10,10',
          opacity: 0.1
        },
        line3: {
          connection: true,
          stroke: 'rgba(114,185,32,0.39)',
          strokeWidth: 9,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 1
        },
        line2: {
          connection: true,
          stroke: 'rgba(126,211,33,1)',
          strokeWidth: 3,
          strokeDasharray: '10, 5',
          opacity: 1,
          style: {
            animation: 'ant-line 30s infinite linear',
            zIndex: 1
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          strokeWidth: 9,
          stroke: '#973636B3',
          opacity: 0
        }
      },
      id: '75c7bca8-5b73-49a5-bc30-b40aa8f01da8',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      zIndex: 15,
      animation: 'water',
      source: {
        x: 1320,
        y: 260
      },
      target: {
        x: 1080,
        y: 850
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#88D13800',
          strokeWidth: 3,
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          strokeDasharray: '10,10',
          opacity: 0.1
        },
        line3: {
          connection: true,
          stroke: 'rgba(114,185,32,0.39)',
          strokeWidth: 9,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 1
        },
        line2: {
          connection: true,
          stroke: 'rgba(126,211,33,1)',
          strokeWidth: 3,
          strokeDasharray: '10, 5',
          opacity: 1,
          style: {
            animation: 'ant-line 30s infinite linear',
            zIndex: 1
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          strokeWidth: 9,
          stroke: '#973636B3',
          opacity: 0
        }
      },
      id: '513ab430-5725-4220-9598-6ecb49f1b913',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      zIndex: 16,
      animation: 'water',
      source: {
        x: 1322,
        y: 282
      },
      target: {
        x: 1090,
        y: 870
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: 'rgba(136,209,56,1)',
          strokeWidth: 3,
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          strokeDasharray: '10,10',
          opacity: 0.1
        },
        line3: {
          connection: true,
          stroke: 'rgba(114,185,32,0.39)',
          strokeWidth: 9,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 1
        },
        line2: {
          connection: true,
          stroke: 'rgba(126,211,33,1)',
          strokeWidth: 3,
          strokeDasharray: '10, 5',
          opacity: 1,
          style: {
            animation: 'ant-line 30s infinite linear',
            zIndex: 1
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          strokeWidth: 9,
          stroke: '#973636B3',
          opacity: 0
        }
      },
      id: 'a36bd206-aabe-4e91-adf4-016186d8885a',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      zIndex: 17,
      animation: 'water',
      source: {
        x: 1420,
        y: 300
      },
      target: {
        x: 1190,
        y: 910
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: 'rgba(136,209,56,1)',
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          strokeDasharray: '10,10',
          opacity: 0.1
        },
        line3: {
          connection: true,
          stroke: 'rgba(114,185,32,0.39)',
          strokeWidth: 8,
          strokeDasharray: '',
          strokeDashoffset: 0
        },
        line2: {
          connection: true,
          stroke: 'rgba(126,211,33,1)',
          strokeWidth: 3,
          strokeDasharray: '10, 5',
          opacity: 1,
          style: {
            animation: 'ant-line 30s infinite linear',
            zIndex: 1
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          strokeWidth: 9,
          stroke: '#973636B3',
          opacity: 0
        }
      },
      id: '7204c12a-73a3-4c38-95c9-3027168cc2ee',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      zIndex: 18,
      animation: 'water',
      source: {
        x: 1190,
        y: 910
      },
      target: {
        x: 1090,
        y: 860
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: '#88D13800',
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          strokeDasharray: '10,10',
          opacity: 0.1
        },
        line3: {
          connection: true,
          stroke: 'rgba(114,185,32,0.39)',
          strokeWidth: 8,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 1
        },
        line2: {
          connection: true,
          stroke: 'rgba(126,211,33,1)',
          strokeWidth: 3,
          strokeDasharray: '10, 5',
          opacity: 1,
          style: {
            animation: 'ant-line 30s infinite linear',
            zIndex: 1
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          strokeWidth: 9,
          stroke: '#973636B3',
          opacity: 0
        }
      },
      id: 'a72f0142-712c-47ab-812e-ec2ec1465027',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      zIndex: 19,
      animation: 'water',
      source: {
        x: 1190,
        y: 920
      },
      target: {
        x: 1070,
        y: 860
      }
    },
    {
      shape: 'edge',
      attrs: {
        line: {
          stroke: 'rgba(0,0,0,0)',
          targetMarker: {
            name: '',
            width: 12,
            height: 8
          },
          connection: true,
          opacity: 1
        },
        line3: {
          connection: true,
          stroke: 'rgba(151,54,54,0.7)',
          strokeWidth: 8,
          strokeDasharray: '',
          strokeDashoffset: 0,
          opacity: 0
        },
        line2: {
          connection: true,
          stroke: '',
          strokeWidth: 5,
          opacity: 0,
          style: {
            animation: 'ant-line 30s infinite linear',
            zIndex: 1
          }
        },
        circle: {
          r: 5,
          fill: '#ffffff00',
          atConnectionRatio: 0,
          refCy: -10,
          opacity: 0
        },
        line4: {
          connection: true,
          strokeDasharray: '',
          strokeWidth: 9,
          stroke: '#973636B3',
          opacity: 1
        }
      },
      id: 'c4e0027a-e998-415f-ab51-28385a4cf445',
      markup: [
        {
          tagName: 'path',
          selector: 'line4',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line3',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line2',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'path',
          selector: 'line',
          attrs: {
            fill: 'none'
          }
        },
        {
          tagName: 'circle',
          selector: 'circle'
        }
      ],
      zIndex: 20,
      router: {
        name: 'normal'
      },
      connector: {
        name: 'normal'
      },
      animation: 'water',
      source: {
        x: 1430,
        y: 310
      },
      target: {
        x: 1200,
        y: 920
      }
    },
    {
      position: {
        x: 693,
        y: 222.68843876330615
      },
      size: {
        width: 150,
        height: 90
      },
      attrs: {
        image: {
          'xlink:href': '/image/zyz.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: 'df342260-bc17-4f1c-9739-50a0b176bf81',
      zIndex: 21,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '6b8fbb03-5f7b-4002-b943-a958803fb656',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '3d895f05-a6ec-4d18-b9d0-fa80bd49134f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'bc0457af-c8c1-4c3e-88e7-ada7bcfc981d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '96fc3af1-60ac-4ab8-9558-ee1170d2009c',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 655,
        y: 307
      },
      size: {
        width: 150,
        height: 100
      },
      attrs: {
        image: {
          'xlink:href': '/image/zyz.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: 'db8975bc-b846-4779-ad44-bbaa9d4293b8',
      zIndex: 22,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '6b8fbb03-5f7b-4002-b943-a958803fb656',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '3d895f05-a6ec-4d18-b9d0-fa80bd49134f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'bc0457af-c8c1-4c3e-88e7-ada7bcfc981d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '96fc3af1-60ac-4ab8-9558-ee1170d2009c',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 560,
        y: 493.38555412293226
      },
      size: {
        width: 140,
        height: 100
      },
      attrs: {
        image: {
          'xlink:href': '/image/zyz.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: '3d70c9d0-9a08-4ded-916f-bba6d5df3211',
      zIndex: 23,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '6b8fbb03-5f7b-4002-b943-a958803fb656',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '3d895f05-a6ec-4d18-b9d0-fa80bd49134f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'bc0457af-c8c1-4c3e-88e7-ada7bcfc981d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '96fc3af1-60ac-4ab8-9558-ee1170d2009c',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 463,
        y: 672
      },
      size: {
        width: 150,
        height: 90
      },
      attrs: {
        image: {
          'xlink:href': '/image/zyz.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: 'cb7fed23-40ff-489c-8daa-64b089991f30',
      zIndex: 24,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '6b8fbb03-5f7b-4002-b943-a958803fb656',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '3d895f05-a6ec-4d18-b9d0-fa80bd49134f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'bc0457af-c8c1-4c3e-88e7-ada7bcfc981d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '96fc3af1-60ac-4ab8-9558-ee1170d2009c',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 1245,
        y: 212
      },
      size: {
        width: 150,
        height: 90
      },
      attrs: {
        image: {
          'xlink:href': '/image/zyz.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: '1d9c8737-8d0c-4774-9e06-5a3d1b917b41',
      zIndex: 25,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '6b8fbb03-5f7b-4002-b943-a958803fb656',
            attrs: {
              circle: {
                style: {
                  visibility: 'visible'
                }
              }
            }
          },
          {
            group: 'right',
            id: '3d895f05-a6ec-4d18-b9d0-fa80bd49134f',
            attrs: {
              circle: {
                style: {
                  visibility: 'visible'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'bc0457af-c8c1-4c3e-88e7-ada7bcfc981d',
            attrs: {
              circle: {
                style: {
                  visibility: 'visible'
                }
              }
            }
          },
          {
            group: 'left',
            id: '96fc3af1-60ac-4ab8-9558-ee1170d2009c',
            attrs: {
              circle: {
                style: {
                  visibility: 'visible'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 1206,
        y: 311
      },
      size: {
        width: 150,
        height: 90
      },
      attrs: {
        image: {
          'xlink:href': '/image/zyz.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: 'e95ca43a-7285-47ef-999d-5c4d234e556a',
      zIndex: 26,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '6b8fbb03-5f7b-4002-b943-a958803fb656',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '3d895f05-a6ec-4d18-b9d0-fa80bd49134f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'bc0457af-c8c1-4c3e-88e7-ada7bcfc981d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '96fc3af1-60ac-4ab8-9558-ee1170d2009c',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 1165,
        y: 402
      },
      size: {
        width: 150,
        height: 90
      },
      attrs: {
        image: {
          'xlink:href': '/image/zyz.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: '021d3baa-73f0-4297-84c5-1436a02e99bf',
      zIndex: 27,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '6b8fbb03-5f7b-4002-b943-a958803fb656',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '3d895f05-a6ec-4d18-b9d0-fa80bd49134f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'bc0457af-c8c1-4c3e-88e7-ada7bcfc981d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '96fc3af1-60ac-4ab8-9558-ee1170d2009c',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 1130,
        y: 485
      },
      size: {
        width: 150,
        height: 90
      },
      attrs: {
        image: {
          'xlink:href': '/image/zyz.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: '73bb6aed-d533-4ba6-9387-d6428d8cb1f6',
      zIndex: 28,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '6b8fbb03-5f7b-4002-b943-a958803fb656',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '3d895f05-a6ec-4d18-b9d0-fa80bd49134f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'bc0457af-c8c1-4c3e-88e7-ada7bcfc981d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '96fc3af1-60ac-4ab8-9558-ee1170d2009c',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 1093,
        y: 585
      },
      size: {
        width: 150,
        height: 90
      },
      attrs: {
        image: {
          'xlink:href': '/image/zyz.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: '0739f722-a065-4926-84d4-f0dbbb45a6b4',
      zIndex: 29,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '6b8fbb03-5f7b-4002-b943-a958803fb656',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '3d895f05-a6ec-4d18-b9d0-fa80bd49134f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'bc0457af-c8c1-4c3e-88e7-ada7bcfc981d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '96fc3af1-60ac-4ab8-9558-ee1170d2009c',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 1056,
        y: 680
      },
      size: {
        width: 150,
        height: 90
      },
      attrs: {
        image: {
          'xlink:href': '/image/zyz.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: 'f263e70b-b7df-4cf1-a217-37707c55bb2a',
      zIndex: 30,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '6b8fbb03-5f7b-4002-b943-a958803fb656',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '3d895f05-a6ec-4d18-b9d0-fa80bd49134f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'bc0457af-c8c1-4c3e-88e7-ada7bcfc981d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '96fc3af1-60ac-4ab8-9558-ee1170d2009c',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 1118,
        y: 849
      },
      size: {
        width: 150,
        height: 90
      },
      attrs: {
        image: {
          'xlink:href': '/image/zyz.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: 'd5dc4369-e865-459b-b615-65c8c3619403',
      zIndex: 31,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '6b8fbb03-5f7b-4002-b943-a958803fb656',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '3d895f05-a6ec-4d18-b9d0-fa80bd49134f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'bc0457af-c8c1-4c3e-88e7-ada7bcfc981d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '96fc3af1-60ac-4ab8-9558-ee1170d2009c',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 1010,
        y: 792
      },
      size: {
        width: 150,
        height: 90
      },
      attrs: {
        image: {
          'xlink:href': '/image/zyz.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: 'ecffac45-2ce9-4b70-a2c2-6680df66c1e8',
      zIndex: 32,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '6b8fbb03-5f7b-4002-b943-a958803fb656',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '3d895f05-a6ec-4d18-b9d0-fa80bd49134f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'bc0457af-c8c1-4c3e-88e7-ada7bcfc981d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '96fc3af1-60ac-4ab8-9558-ee1170d2009c',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 345,
      position: {
        x: 824.2776599125334,
        y: 90.76429585693855
      },
      size: {
        width: 223.1,
        height: 96
      },
      attrs: {
        image: {
          'xlink:href': '/image/dlj-90.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: 'f0dec54c-c04f-4b95-ae3a-70fbbfa18e88',
      zIndex: 34,
      data: [
        {
          id: 1,
          event: 'valueChange',
          eventAction: '',
          hrefImage: '',
          targetObject: '',
          watchObject: ['4', '1507984447662718979', '1507997953384513538'],
          condition: '>=',
          attrName: 'value',
          attrValue: '4'
        }
      ],
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '932d59de-fe9c-497a-a30e-8725c5de1981',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '977a940b-23cc-4cea-a64e-f5848e31c60d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'd2293a62-4f04-46f2-a0b6-c1909744638b',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '2c384b4d-4c3f-4d87-b997-e82cb7ff739e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 345,
      position: {
        x: 1036.2776599125336,
        y: 275.76429585693853
      },
      size: {
        width: 223.1,
        height: 96
      },
      attrs: {
        image: {
          'xlink:href': '/image/dlj-90.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: '7f6e0876-e8b5-4d92-ad0d-e093e25890a9',
      zIndex: 35,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '932d59de-fe9c-497a-a30e-8725c5de1981',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '977a940b-23cc-4cea-a64e-f5848e31c60d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'd2293a62-4f04-46f2-a0b6-c1909744638b',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '2c384b4d-4c3f-4d87-b997-e82cb7ff739e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 345,
      position: {
        x: 861.2776599125334,
        y: 318.23570414306147
      },
      size: {
        width: 223.1,
        height: 96
      },
      attrs: {
        image: {
          'xlink:href': '/image/dlj-90.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: '46d977d9-9b81-47ae-96ac-ba6a62136906',
      zIndex: 36,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '932d59de-fe9c-497a-a30e-8725c5de1981',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '977a940b-23cc-4cea-a64e-f5848e31c60d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'd2293a62-4f04-46f2-a0b6-c1909744638b',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '2c384b4d-4c3f-4d87-b997-e82cb7ff739e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 345,
      position: {
        x: 764.0551337921542,
        y: 382
      },
      size: {
        width: 223.1,
        height: 96
      },
      attrs: {
        image: {
          'xlink:href': '/image/dlj-90.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: 'ac57e198-54d3-4fcb-92cf-b70d91699c6d',
      zIndex: 37,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '932d59de-fe9c-497a-a30e-8725c5de1981',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '977a940b-23cc-4cea-a64e-f5848e31c60d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'd2293a62-4f04-46f2-a0b6-c1909744638b',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '2c384b4d-4c3f-4d87-b997-e82cb7ff739e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 345,
      position: {
        x: 623.6223400874666,
        y: 554.7642958569386
      },
      size: {
        width: 223.1,
        height: 96
      },
      attrs: {
        image: {
          'xlink:href': '/image/dlj-90.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: '40d0cd73-725f-43c0-84c5-2835d3dc1708',
      zIndex: 38,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '932d59de-fe9c-497a-a30e-8725c5de1981',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '977a940b-23cc-4cea-a64e-f5848e31c60d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'd2293a62-4f04-46f2-a0b6-c1909744638b',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '2c384b4d-4c3f-4d87-b997-e82cb7ff739e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      angle: 345,
      position: {
        x: 898.2776599125334,
        y: 543.7642958569386
      },
      size: {
        width: 223.1,
        height: 96
      },
      attrs: {
        image: {
          'xlink:href': '/image/dlj-90.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'image',
      id: '683f59af-290f-4155-ae1e-c01b3bb982ee',
      zIndex: 39,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '932d59de-fe9c-497a-a30e-8725c5de1981',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '977a940b-23cc-4cea-a64e-f5848e31c60d',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: 'd2293a62-4f04-46f2-a0b6-c1909744638b',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '2c384b4d-4c3f-4d87-b997-e82cb7ff739e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 786,
        y: 77
      },
      size: {
        width: 50,
        height: 26
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(44,111,189,1)',
          text: 'T14'
        },
        body: {
          stroke: 'rgba(95,149,255,0)',
          fill: 'rgba(239,244,255,0)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: 'e56fae06-8dce-4193-87d0-81d597f711d3',
      zIndex: 40
    },
    {
      position: {
        x: 740,
        y: 164
      },
      size: {
        width: 55,
        height: 28
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(44,111,189,1)',
          text: 'T12'
        },
        body: {
          stroke: 'rgba(95,149,255,0)',
          fill: 'rgba(239,244,255,0)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: '48284cec-b2f3-4c17-8044-0d5b6cfd9056',
      zIndex: 41
    },
    {
      position: {
        x: 703,
        y: 254.18843876330618
      },
      size: {
        width: 52,
        height: 27
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(44,111,189,1)',
          text: 'T10'
        },
        body: {
          stroke: 'rgba(95,149,255,0)',
          fill: 'rgba(239,244,255,0)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: '8844aabb-1b90-48ec-bff8-10508b101692',
      zIndex: 42
    },
    {
      position: {
        x: 661,
        y: 342
      },
      size: {
        width: 48,
        height: 30
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(44,111,189,1)',
          text: 'T8'
        },
        body: {
          stroke: 'rgba(95,149,255,0)',
          fill: 'rgba(239,244,255,0)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: '385cfae6-95bc-44bf-9b7d-220abb1edf60',
      zIndex: 43
    },
    {
      position: {
        x: 615,
        y: 434
      },
      size: {
        width: 48,
        height: 30
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(44,111,189,1)',
          text: 'T6'
        },
        body: {
          stroke: 'rgba(95,149,255,0)',
          fill: 'rgba(239,244,255,0)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: 'fdd8a445-ad51-4bda-8663-93fe6c4a1684',
      zIndex: 44
    },
    {
      position: {
        x: 567,
        y: 545
      },
      size: {
        width: 48,
        height: 30
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(44,111,189,1)',
          text: 'T4'
        },
        body: {
          stroke: 'rgba(95,149,255,0)',
          fill: 'rgba(239,244,255,0)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: '16c9a422-fb95-48a7-9758-c378b68b3c89',
      zIndex: 45
    },
    {
      position: {
        x: 473,
        y: 702
      },
      size: {
        width: 48,
        height: 30
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(44,111,189,1)',
          text: 'TZ1'
        },
        body: {
          stroke: 'rgba(95,149,255,0)',
          fill: 'rgba(239,244,255,0)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: 'b59d547d-519e-4b66-ae55-3db5c76e8127',
      zIndex: 46
    },
    {
      position: {
        x: 1130,
        y: 919
      },
      size: {
        width: 48,
        height: 30
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(44,111,189,1)',
          text: 'T1'
        },
        body: {
          stroke: 'rgba(95,149,255,0)',
          fill: 'rgba(239,244,255,0)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: 'ac1d9e83-2d69-4756-8f67-b5efce24b0d6',
      zIndex: 47
    },
    {
      position: {
        x: 1008,
        y: 832
      },
      size: {
        width: 48,
        height: 30
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(44,111,189,1)',
          text: 'T2'
        },
        body: {
          stroke: 'rgba(95,149,255,0)',
          fill: 'rgba(239,244,255,0)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: 'b55193e1-3daf-448d-a4c9-132bf36b2859',
      zIndex: 48
    },
    {
      position: {
        x: 1347,
        y: 218
      },
      size: {
        width: 48,
        height: 30
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(44,111,189,1)',
          text: 'T13'
        },
        body: {
          stroke: 'rgba(95,149,255,0)',
          fill: 'rgba(239,244,255,0)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: '7202be5d-22bc-4481-ad20-373314e4ea72',
      zIndex: 49
    },
    {
      position: {
        x: 1256,
        y: 302
      },
      size: {
        width: 48,
        height: 30
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(44,111,189,1)',
          text: 'T11'
        },
        body: {
          stroke: 'rgba(95,149,255,0)',
          fill: 'rgba(239,244,255,0)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: '13611c22-2ab8-4264-9b97-3a6adb62fb6c',
      zIndex: 50
    },
    {
      position: {
        x: 1219,
        y: 393
      },
      size: {
        width: 48,
        height: 30
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(44,111,189,1)',
          text: 'T9'
        },
        body: {
          stroke: 'rgba(95,149,255,0)',
          fill: 'rgba(239,244,255,0)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: '65432b53-10b8-46fb-b9d7-568dd5256cfe',
      zIndex: 51
    },
    {
      position: {
        x: 1187,
        y: 475
      },
      size: {
        width: 48,
        height: 30
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(44,111,189,1)',
          text: 'T7'
        },
        body: {
          stroke: 'rgba(95,149,255,0)',
          fill: 'rgba(239,244,255,0)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: 'd00498c5-6234-42de-96c9-5e1781ef8c68',
      zIndex: 52
    },
    {
      position: {
        x: 1149,
        y: 573
      },
      size: {
        width: 48,
        height: 30
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(44,111,189,1)',
          text: 'T5'
        },
        body: {
          stroke: 'rgba(95,149,255,0)',
          fill: 'rgba(239,244,255,0)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: '0b3c7f2b-cd93-4ae5-aab3-a619a7b0d4e4',
      zIndex: 53
    },
    {
      position: {
        x: 1112,
        y: 668
      },
      size: {
        width: 48,
        height: 30
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(44,111,189,1)',
          text: 'T3'
        },
        body: {
          stroke: 'rgba(95,149,255,0)',
          fill: 'rgba(239,244,255,0)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '10, 5'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: 'abc2298c-e413-4d9a-a590-e1deff76de85',
      zIndex: 54
    },
    {
      position: {
        x: 900.8276599125334,
        y: 63.52859171387708
      },
      size: {
        width: 70,
        height: 24
      },
      attrs: {
        text: {
          fontSize: 16,
          fill: 'rgba(255,255,255,1)',
          text: 'SR6'
        },
        body: {
          stroke: 'rgba(15,92,243,1)',
          fill: 'rgba(8,8,139,1)',
          fillOpacity: 0.5,
          borderRadius: 0,
          strokeDasharray: '0'
        }
      },
      visible: true,
      shape: 'custom-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '79918b63-002b-480d-8d99-d5899382cf37',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '5b896370-1098-4844-886c-0b399f9971ba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '92268cd8-5007-473c-8c28-8f16f3d4fdba',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '1c86dd3d-34e3-476c-ae07-a97ecb6b9004',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      },
      id: '01eb8e3b-2991-4042-ab0e-67a7e6a1239a',
      zIndex: 55
    },
    {
      position: {
        x: 64.99999999999886,
        y: 335.6555558822618
      },
      size: {
        width: 220,
        height: 140
      },
      attrs: {
        image: {
          'xlink:href': '/image/dlj0.png'
        },
        body: {
          fill: 'white'
        }
      },
      visible: true,
      shape: 'image',
      id: '0fded6e0-bd47-4d78-be03-4148d9d1623a',
      rotation: 0,
      zIndex: 56,
      data: [
        {
          id: 1,
          event: 'valueChange',
          eventAction: 'changeImage',
          hrefImage: '/image/ceshi.svg',
          targetObject: '',
          watchObject: ['1', '1507984447507529730', '1507997953862664195'],
          condition: '>=',
          attrName: 'value',
          attrValue: '1'
        },
        {
          id: 1,
          event: 'valueChange',
          eventAction: 'playAnimation',
          hrefImage: '',
          targetObject: '边2',
          watchObject: ['1', '1507984447507529730', '1507997953862664195'],
          condition: '>',
          attrName: 'value',
          attrValue: '1'
        }
      ],
      nodeName: '节点1',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '329a1e22-3187-4490-9153-48163deb41d9',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: '6b4649cc-c688-4279-a190-aee94e75bbf3',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '7c9f9a91-6f33-4b94-b320-402a11c214ef',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '31467cce-b66d-4cef-9665-b45448541c4e',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 377,
        y: 297
      },
      size: {
        width: 65,
        height: 60
      },
      attrs: {
        image: {
          'xlink:href': '/image/dlj-90.png'
        },
        body: {
          fill: 'white'
        }
      },
      visible: true,
      shape: 'image',
      id: 'bb812fee-79d6-4a04-86ac-3ef487971ee3',
      rotation: 0,
      zIndex: 57,
      data: [
        {
          id: 1,
          event: 'click',
          eventAction: 'openModel',
          hrefImage: '',
          targetObject: '',
          watchObject: '',
          condition: '',
          attrName: '',
          attrValue: ''
        }
      ],
      nodeAnimation: {
        animation: 'onAnimation'
      },
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: 'd2bd601f-c3e3-4f26-8653-d459976e3375',
            attrs: {
              circle: {
                style: {
                  visibility: 'visible'
                }
              }
            }
          },
          {
            group: 'right',
            id: '380db6c6-9565-4c27-a40c-9f830641d64a',
            attrs: {
              circle: {
                style: {
                  visibility: 'visible'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '3832669f-7a3f-49b1-a0cf-14090723301c',
            attrs: {
              circle: {
                style: {
                  visibility: 'visible'
                }
              }
            }
          },
          {
            group: 'left',
            id: '9d51b9bf-1db2-497d-b110-384318a2bfc0',
            attrs: {
              circle: {
                style: {
                  visibility: 'visible'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 1078,
        y: 733.9414928935695
      },
      size: {
        width: 200,
        height: 120
      },
      attrs: {
        image: {
          'xlink:href': '/image/xcj.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: 'aed79881-61ad-45ca-b785-382d7de8d0ba',
      rotation: 0,
      zIndex: 58,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '2fbd36f7-2f2c-4647-af9e-70d91b50594b',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: 'f3cad32c-18eb-4927-9ee1-621a09452994',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '108c8de1-200d-4271-8af6-08e08fabf5fb',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '8eba5918-1ee5-40a3-87a2-05f30a16630f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 1114.6035194925248,
        y: 640
      },
      size: {
        width: 200,
        height: 120
      },
      attrs: {
        image: {
          'xlink:href': '/image/xcj.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: 'dee2173c-e40e-4760-879a-bc2d19cc2c5f',
      rotation: 0,
      zIndex: 59,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '2fbd36f7-2f2c-4647-af9e-70d91b50594b',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: 'f3cad32c-18eb-4927-9ee1-621a09452994',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '108c8de1-200d-4271-8af6-08e08fabf5fb',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '8eba5918-1ee5-40a3-87a2-05f30a16630f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 1149,
        y: 541.7780304750456
      },
      size: {
        width: 200,
        height: 120
      },
      attrs: {
        image: {
          'xlink:href': '/image/xcj.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: '74c6d8ee-e86f-4339-8394-6d8ab18a12aa',
      rotation: 0,
      zIndex: 60,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '2fbd36f7-2f2c-4647-af9e-70d91b50594b',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: 'f3cad32c-18eb-4927-9ee1-621a09452994',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '108c8de1-200d-4271-8af6-08e08fabf5fb',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '8eba5918-1ee5-40a3-87a2-05f30a16630f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 1256.9757336347134,
        y: 268.6281804951749
      },
      size: {
        width: 200,
        height: 120
      },
      attrs: {
        image: {
          'xlink:href': '/image/xcj.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: 'aea1c411-b9e6-46d8-add1-31a9d42c8fb0',
      rotation: 0,
      zIndex: 61,
      data: [
        {
          id: 1,
          event: 'valueChange',
          eventAction: '',
          hrefImage: '',
          targetObject: '',
          watchObject: '',
          condition: '',
          attrName: '',
          attrValue: ''
        }
      ],
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '2fbd36f7-2f2c-4647-af9e-70d91b50594b',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: 'f3cad32c-18eb-4927-9ee1-621a09452994',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '108c8de1-200d-4271-8af6-08e08fabf5fb',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '8eba5918-1ee5-40a3-87a2-05f30a16630f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 1218.9757336347134,
        y: 368.2711631659921
      },
      size: {
        width: 200,
        height: 120
      },
      attrs: {
        image: {
          'xlink:href': '/image/xcj.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: '836f44c2-11db-4cc2-9ed3-83f0312d7fc6',
      rotation: 0,
      zIndex: 62,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '2fbd36f7-2f2c-4647-af9e-70d91b50594b',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: 'f3cad32c-18eb-4927-9ee1-621a09452994',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '108c8de1-200d-4271-8af6-08e08fabf5fb',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '8eba5918-1ee5-40a3-87a2-05f30a16630f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    },
    {
      position: {
        x: 1184.149528040441,
        y: 456.1624231913154
      },
      size: {
        width: 200,
        height: 120
      },
      attrs: {
        image: {
          'xlink:href': '/image/xcj.png'
        },
        body: {
          fill: 'white',
          fillOpacity: 0.5,
          borderRadius: 0
        }
      },
      visible: true,
      shape: 'image',
      id: '85c8d310-0a66-479c-b9ee-9c8c77e28e3c',
      rotation: 0,
      zIndex: 63,
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 4,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        },
        items: [
          {
            group: 'top',
            id: '2fbd36f7-2f2c-4647-af9e-70d91b50594b',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'right',
            id: 'f3cad32c-18eb-4927-9ee1-621a09452994',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'bottom',
            id: '108c8de1-200d-4271-8af6-08e08fabf5fb',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          },
          {
            group: 'left',
            id: '8eba5918-1ee5-40a3-87a2-05f30a16630f',
            attrs: {
              circle: {
                style: {
                  visibility: 'hidden'
                }
              }
            }
          }
        ]
      }
    }
  ]
}
</script>

<template>
  <div class="container">
    <UserGraph :formJson="formJson" />
  </div>
</template>
<style scoped>
.container,
.app-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
