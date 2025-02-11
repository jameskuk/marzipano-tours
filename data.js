var APP_DATA = {
  "scenes": [
    {
      "id": "0-car-park",
      "name": "Car Park",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.014712267268173207,
          "pitch": 0.01913845199254638,
          "rotation": 0,
          "target": "2-reception"
        },
        {
          "yaw": 1.010560193898396,
          "pitch": 0.0631166101339069,
          "rotation": 0,
          "target": "6-playground"
        },
        {
          "yaw": 0.47153249545778664,
          "pitch": -0.01304425947982324,
          "rotation": 0,
          "target": "5-classroom"
        },
        {
          "yaw": 0.017539243922779946,
          "pitch": 0.2541259484600644,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.08187366000001717,
        "pitch": 0,
        "fov": 1.4083983627516938
      },
      "linkHotspots": [
        {
          "yaw": 3.0863025435085696,
          "pitch": 0.4061543032399637,
          "rotation": 0,
          "target": "0-car-park"
        },
        {
          "yaw": 0.09458525446800436,
          "pitch": 0.2110911525258352,
          "rotation": 0,
          "target": "4-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.012616795818214399,
          "pitch": 0.033051768299547035,
          "rotation": 0,
          "target": "0-car-park"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5353467682260877,
          "pitch": 0.1501073324526807,
          "rotation": 0,
          "target": "4-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5694992727540402,
          "pitch": 0.09614187883423675,
          "rotation": 0,
          "target": "5-classroom"
        },
        {
          "yaw": 2.909820148668561,
          "pitch": 0.22838391058506247,
          "rotation": 0,
          "target": "3-hall"
        },
        {
          "yaw": 0.11077978772016372,
          "pitch": 0.09603779114897648,
          "rotation": 0,
          "target": "2-reception"
        },
        {
          "yaw": -0.15456638269492373,
          "pitch": 0.09715139104230275,
          "rotation": 0,
          "target": "0-car-park"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-classroom",
      "name": "Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.293471213547825,
          "pitch": 0.06641585282831386,
          "rotation": 0,
          "target": "6-playground"
        },
        {
          "yaw": -2.8882933530915142,
          "pitch": 0.085095552646548,
          "rotation": 0,
          "target": "4-hallway"
        },
        {
          "yaw": -2.713212723924155,
          "pitch": 0.07386878261099383,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-playground",
      "name": "Playground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4108668828453723,
          "pitch": 0.11414556144613819,
          "rotation": 0,
          "target": "7-rear-playground"
        },
        {
          "yaw": -1.9124520801502847,
          "pitch": 0.05721372649949785,
          "rotation": 0,
          "target": "5-classroom"
        },
        {
          "yaw": -2.448156067819898,
          "pitch": 0.058972460265742654,
          "rotation": 0,
          "target": "0-car-park"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-rear-playground",
      "name": "Rear Playground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3515188292643394,
          "pitch": 0.16560539095688043,
          "rotation": 0,
          "target": "8-grass-field-1"
        },
        {
          "yaw": -2.252741902112044,
          "pitch": 0.08638677074945988,
          "rotation": 0,
          "target": "6-playground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-grass-field-1",
      "name": "Grass Field 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3530201664168562,
          "pitch": 0.14089924842736679,
          "rotation": 0,
          "target": "9-grass-field-2"
        },
        {
          "yaw": 2.9020057561610937,
          "pitch": 0.19791696561823002,
          "rotation": 0,
          "target": "7-rear-playground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-grass-field-2",
      "name": "Grass Field 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.784814374639984,
          "pitch": 0.15749505112871276,
          "rotation": 0,
          "target": "8-grass-field-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Shorne C of E",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
