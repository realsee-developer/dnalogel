import { ModelRoomLabelPlugin, ModelRoomLabelController } from "@realsee/dnalogel";
import { createFiveProvider, FiveCanvas } from "@realsee/five/react";
import React, { FC } from "react";
import { useFetchWork } from "./useFetchWork";
import { useWindowDimensions } from "./useWindowDimensions";
import ModelRoomLabelPluginShow from "./ModelRoomLabelPluginShow";

/** work.json 的数据 URL */
const workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";

const FiveProvider = createFiveProvider({
  plugins: [
    [ModelRoomLabelPlugin, 'modelRoomLabelPlugin']
  ]
});

// const roomLabelPlugin = five.plugins.roomLabel as ModelRoomLabelController
// roomLabelPlugin.appendTo(document.querySelector('#model-room-label-plugin-container')!)
// roomLabelPlugin.load(modelRoomLabels)

const App: FC = () => {
  // const work = useFetchWork(workURL);
  const work = workData
  const size = useWindowDimensions();

  return work && <FiveProvider initialWork={work}>
    <div style={{position: 'absolute', width: '100%', height: '100%'}}><FiveCanvas {...size}/></div>
    <ModelRoomLabelPluginShow />
  </FiveProvider>;
};

export default App ;

const workData = {
  auto_floor_plan_checksum: '3d0b8203b08a23785e6acdb8186dde70',
  auto_floor_plan_url: '',
  code: 'BEy832AVen8DNnOe',
  create_time: '2021-09-10T13:01:41+08:00',
  decoration_enable: false,
  editor_type: 2,
  hierarchy_floor_plan: [
    {
      checksum: '289f0820d2b48f3cc45c5a9513b67944',
      index: 0,
      url: 'https://vrlab-public.ljcdn.com/release/vrcustomer/hierarchy_0_ec177b0b-ddd9-43fe-b9c1-1ac2ce11a065.png',
    },
    {
      checksum: 'e1b36fb1ebb23247ae971512dde1a77f',
      index: 1,
      url: 'https://vrlab-public.ljcdn.com/release/vrcustomer/hierarchy_1_ec177b0b-ddd9-43fe-b9c1-1ac2ce11a065.png',
    },
    {
      checksum: 'df2bfda3e64f44f24cc9b435b75a7741',
      index: 2,
      url: 'https://vrlab-public.ljcdn.com/release/vrcustomer/hierarchy_2_ec177b0b-ddd9-43fe-b9c1-1ac2ce11a065.png',
    },
  ],
  house_layout: '{"bedroom_amount":4,"parlor_amount":1,"cookroom_amount":1,"toilet_amount":3}',
  initial: {
    flag_position: [2.645116918485062, -1.1110399827557513, 6.4596901320775695],
    fov: 95,
    heading: 0,
    latitude: 0,
    longitude: 3.193668872327031,
    pano: 5,
    pano_index: 5,
  },
  is_active: 1,
  machine: {
    create_time: '2021年09月10日 13:01',
    create_user: '专业摄影师',
    name: '伽罗华',
    principle: '激光',
  },
  machine_id: 'PHAB800037',
  machine_version: '3',
  model: {
    file_url:
        'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/model/auto3d-VDKsQUwFdpt39RPpMHfdtk.at3d',
    material_base_url: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/',
    material_textures: [
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_0.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_1.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_2.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_3.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_4.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_5.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_6.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_7.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_8.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_9.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_10.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_11.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_12.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_13.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_14.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_15.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_16.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_17.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_18.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_19.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_20.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_21.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_22.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_23.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_24.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_25.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_26.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_27.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_28.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_29.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_30.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_31.jpg',
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/materials/texture_32.jpg',
    ],
    modify_time: '2021-09-10T21:36:11+08:00',
    score: 101.36,
    type: 0,
  },
  name: '贝壳·如视 | 真实，如你所视',
  observers: [
    {
      accessible_nodes: [1, 2, 5, 9, 14, 15, 16, 17, 18],
      floor_index: 0,
      index: 0,
      offset_point_count: 0,
      position: [1.2749899625778198, -0.030437400564551353, -1.7918100357055664],
      quaternion: {
        w: 0.011343780140639392,
        x: 0.009568884667252689,
        y: -0.9998898072923358,
        z: 0.0003738448707354643,
      },
      standing_position: [1.2749899625778198, -1.1070020242625014, -1.7918100357055664],
      visible_nodes: [1, 2, 5, 9, 14, 15, 16, 17, 18],
    },
    {
      accessible_nodes: [0, 2, 5, 9, 12, 13, 14, 15, 16, 17, 18],
      floor_index: 0,
      index: 1,
      offset_point_count: 0,
      position: [1.057729959487915, -0.04077820107340813, -0.015849700197577477],
      quaternion: {
        w: -0.011946544586031158,
        x: -0.006343317489586267,
        y: -0.9999030930532783,
        z: 0.0032935952382189223,
      },
      standing_position: [1.057729959487915, -1.1100294287073686, -0.015849700197577477],
      visible_nodes: [0, 2, 5, 9, 12, 13, 14, 15, 16, 17, 18],
    },
    {
      accessible_nodes: [0, 1, 3, 5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      floor_index: 0,
      index: 2,
      offset_point_count: 0,
      position: [1.0877000093460083, -0.040640801191329956, 1.91225004196167],
      quaternion: {
        w: -0.08084483331667779,
        x: -0.006228844519549869,
        y: -0.9966932101101376,
        z: 0.005288871116917768,
      },
      standing_position: [1.0877000093460083, -1.1072608726948356, 1.91225004196167],
      visible_nodes: [0, 1, 3, 5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    },
    {
      accessible_nodes: [2, 4],
      floor_index: 0,
      index: 3,
      offset_point_count: 0,
      position: [3.1423699855804443, -0.04099230095744133, 1.7463200092315674],
      quaternion: {
        w: -0.02726404418466759,
        x: -0.004310175899561027,
        y: -0.9995959106230196,
        z: 0.006790993062892156,
      },
      standing_position: [3.1423699855804443, -1.1182659389667748, 1.7463200092315674],
      visible_nodes: [2, 4],
    },
    {
      accessible_nodes: [3, 19, 21],
      floor_index: 0,
      index: 4,
      offset_point_count: 0,
      position: [3.3780601024627686, -0.037994999438524246, -0.6245669722557068],
      quaternion: {
        w: -0.1370199770877478,
        x: 0.002526019829436302,
        y: -0.9905543666170888,
        z: -0.004604408001666247,
      },
      standing_position: [3.3780601024627686, -1.1087222845733493, -0.6245669722557068],
      visible_nodes: [3, 19, 21],
    },
    {
      accessible_nodes: [0, 1, 2, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      floor_index: 0,
      index: 5,
      offset_point_count: 0,
      position: [1.5069799423217773, -0.048482801765203476, 3.901439905166626],
      quaternion: {
        w: -0.016321783141136647,
        x: -0.008116959327295442,
        y: -0.9998328024444744,
        z: -0.0014409885125760333,
      },
      standing_position: [1.5069799423217773, -1.1110399827557513, 3.901439905166626],
      visible_nodes: [0, 1, 2, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    },
    {
      accessible_nodes: [5, 7, 8, 9, 10, 11, 22, 23, 24],
      floor_index: 0,
      index: 6,
      offset_point_count: 0,
      position: [-0.2938069999217987, -0.04446839913725853, 4.296989917755127],
      quaternion: {
        w: -0.0034773478204763075,
        x: -0.006477528961372483,
        y: -0.9999725367828055,
        z: -0.0009348058988663726,
      },
      standing_position: [-0.2938069999217987, -1.1106107528656923, 4.296989917755127],
      visible_nodes: [5, 7, 8, 9, 10, 11, 22, 23, 24],
    },
    {
      accessible_nodes: [6, 8, 9, 11, 12, 13, 19, 21, 22, 23, 24],
      floor_index: 0,
      index: 7,
      offset_point_count: 0,
      position: [-0.39517900347709656, -0.044975701719522476, 3.52266001701355],
      quaternion: {
        w: 0.02532380576218535,
        x: -0.009051186383765997,
        y: -0.9996341691812419,
        z: 0.0028835702119555037,
      },
      standing_position: [-0.39517900347709656, -1.1098131949521381, 3.52266001701355],
      visible_nodes: [6, 8, 9, 11, 12, 13, 19, 21, 22, 23, 24],
    },
    {
      accessible_nodes: [6, 7, 19],
      floor_index: 0,
      index: 8,
      offset_point_count: 0,
      position: [-0.5960140228271484, -0.051310598850250244, 2.164109945297241],
      quaternion: {
        w: -0.09578572790643647,
        x: -0.002446966221074989,
        y: -0.9953989485442127,
        z: -0.00019770647228659237,
      },
      standing_position: [-0.5960140228271484, -1.113305581208349, 2.164109945297241],
      visible_nodes: [6, 7, 19],
    },
    {
      accessible_nodes: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      floor_index: 0,
      index: 9,
      offset_point_count: 0,
      position: [0.750652015209198, -0.04486130177974701, 5.4638800621032715],
      quaternion: {
        w: 0.022159978263429806,
        x: -0.007241345290231516,
        y: -0.9997279795577488,
        z: -0.0006777168692622624,
      },
      standing_position: [0.750652015209198, -1.1120890448854033, 5.4638800621032715],
      visible_nodes: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    },
    {
      accessible_nodes: [2, 5, 6, 9, 11, 12, 13, 14, 15, 19, 20, 21],
      floor_index: 0,
      index: 10,
      offset_point_count: 0,
      position: [2.9368200302124023, -0.04768089950084686, 5.488850116729736],
      quaternion: {
        w: -0.0443160313322821,
        x: -0.002024391295069854,
        y: -0.9990155023015439,
        z: -0.0001392844631377002,
      },
      standing_position: [2.9368200302124023, -1.111505567219839, 5.488850116729736],
      visible_nodes: [2, 5, 6, 9, 11, 12, 13, 14, 15, 19, 20, 21],
    },
    {
      accessible_nodes: [2, 5, 6, 7, 9, 10, 12, 13, 14, 19, 20],
      floor_index: 0,
      index: 11,
      offset_point_count: 0,
      position: [3.733750104904175, -0.05183950066566467, 7.340410232543945],
      quaternion: {
        w: 0.043907478290063355,
        x: -0.006754042186677378,
        y: -0.999012757782145,
        z: 0.00016194656059157397,
      },
      standing_position: [3.733750104904175, -1.1062539829058644, 7.340410232543945],
      visible_nodes: [2, 5, 6, 7, 9, 10, 12, 13, 14, 19, 20],
    },
    {
      accessible_nodes: [1, 2, 5, 7, 9, 10, 11, 13, 14, 19, 20],
      floor_index: 0,
      index: 12,
      offset_point_count: 0,
      position: [3.1843199729919434, -0.051378898322582245, 9.403039932250977],
      quaternion: {
        w: -0.059702859882157996,
        x: -0.0064930823867550514,
        y: -0.9981932635363946,
        z: -0.0019010602235434559,
      },
      standing_position: [3.1843199729919434, -1.1109960971852422, 9.403039932250977],
      visible_nodes: [1, 2, 5, 7, 9, 10, 11, 13, 14, 19, 20],
    },
    {
      accessible_nodes: [1, 2, 5, 7, 9, 10, 11, 12],
      floor_index: 0,
      index: 13,
      offset_point_count: 0,
      position: [3.191499948501587, -0.05412460118532181, 10.890700340270996],
      quaternion: {
        w: -0.12157695840659818,
        x: -0.00860568783458469,
        y: -0.9925442302130493,
        z: -0.0009647237651621734,
      },
      standing_position: [3.191499948501587, -1.1099475036233604, 10.890700340270996],
      visible_nodes: [1, 2, 5, 7, 9, 10, 11, 12],
    },
    {
      accessible_nodes: [0, 1, 2, 5, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21],
      floor_index: 0,
      index: 14,
      offset_point_count: 0,
      position: [0.7147390246391296, -0.047619301825761795, 7.833529949188232],
      quaternion: {
        w: 0.05318651825019094,
        x: -0.004413553865654683,
        y: -0.9985748357746859,
        z: 0.00015397046204156128,
      },
      standing_position: [0.7147390246391296, -1.1144971143440476, 7.833529949188232],
      visible_nodes: [0, 1, 2, 5, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21],
    },
    {
      accessible_nodes: [0, 1, 2, 5, 9, 10, 14, 16, 17, 18, 19],
      floor_index: 0,
      index: 15,
      offset_point_count: 0,
      position: [0.9319689869880676, -0.04500259831547737, 10.476799964904785],
      quaternion: {
        w: 0.031963749884590845,
        x: -0.003947583459161337,
        y: -0.9994812156148678,
        z: -0.00020367300841041952,
      },
      standing_position: [0.9319689869880676, -1.105754818778001, 10.476799964904785],
      visible_nodes: [0, 1, 2, 5, 9, 10, 14, 16, 17, 18, 19],
    },
    {
      accessible_nodes: [0, 1, 2, 5, 9, 14, 15, 17, 18],
      floor_index: 0,
      index: 16,
      offset_point_count: 0,
      position: [0.9270970225334167, -0.044294700026512146, 12.08810043334961],
      quaternion: {
        w: 0.06548370747376515,
        x: -0.0035435604564887074,
        y: -0.9978470499620231,
        z: 0.0007738783459612689,
      },
      standing_position: [0.9270970225334167, -1.1033117720179206, 12.08810043334961],
      visible_nodes: [0, 1, 2, 5, 9, 14, 15, 17, 18],
    },
    {
      accessible_nodes: [0, 1, 2, 5, 9, 14, 15, 16, 18],
      floor_index: 0,
      index: 17,
      offset_point_count: 0,
      position: [0.9155660271644592, -0.03588249906897545, 14.006600379943848],
      quaternion: {
        w: -0.057726026489643784,
        x: -0.0061089708259838985,
        y: -0.9983104201082437,
        z: 0.0025889489802432635,
      },
      standing_position: [0.9155660271644592, -1.0941013870795724, 14.006600379943848],
      visible_nodes: [0, 1, 2, 5, 9, 14, 15, 16, 18],
    },
    {
      accessible_nodes: [0, 1, 2, 5, 9, 14, 15, 16, 17],
      floor_index: 0,
      index: 18,
      offset_point_count: 0,
      position: [0.5929080247879028, -0.029502900317311287, 15.355400085449219],
      quaternion: {
        w: 0.044813590815266244,
        x: -0.0060672693546733715,
        y: -0.9989752585389711,
        z: 0.0018308241572581381,
      },
      standing_position: [0.5929080247879028, -1.0872688086624738, 15.355400085449219],
      visible_nodes: [0, 1, 2, 5, 9, 14, 15, 16, 17],
    },
    {
      accessible_nodes: [4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 20, 22, 23],
      floor_index: 0,
      index: 19,
      offset_point_count: 0,
      position: [-0.32936400175094604, 0.3756510019302368, 5.436989784240723],
      quaternion: {
        w: -0.01976385114564157,
        x: -0.008698346916840466,
        y: -0.9997644072412932,
        z: 0.002203829347575735,
      },
      standing_position: [-0.32936400175094604, -0.5716276884928236, 5.436989784240723],
      visible_nodes: [4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 20, 22, 23],
    },
    {
      accessible_nodes: [5, 9, 10, 11, 12, 14, 19, 21, 22, 23, 24, 25],
      floor_index: 0,
      index: 20,
      offset_point_count: 0,
      position: [-1.1141899824142456, 0.7432829737663269, 5.777560234069824],
      quaternion: {
        w: -0.017663832308254766,
        x: -0.0041730656154184385,
        y: -0.9998339947360074,
        z: 0.0015933744855181641,
      },
      standing_position: [-1.1141899824142456, -0.3677049111009454, 5.777560234069824],
      visible_nodes: [5, 9, 10, 11, 12, 14, 19, 21, 22, 23, 24, 25],
    },
    {
      accessible_nodes: [4, 5, 7, 9, 10, 14, 20, 22, 23, 24, 25],
      floor_index: 0,
      index: 21,
      offset_point_count: 0,
      position: [-1.0822900533676147, 1.2663899660110474, 6.562880039215088],
      quaternion: {
        w: -0.002856101933729382,
        x: -0.00010743052778420805,
        y: -0.9999391939630614,
        z: 0.010651201863596376,
      },
      standing_position: [-1.0822900533676147, 0.31641261265497056, 6.562880039215088],
      visible_nodes: [4, 5, 7, 9, 10, 14, 20, 22, 23, 24, 25],
    },
    {
      accessible_nodes: [6, 7, 19, 20, 21, 23, 24, 25, 26, 27],
      floor_index: 0,
      index: 22,
      offset_point_count: 0,
      position: [-1.152999997138977, 1.9759700298309326, 7.423749923706055],
      quaternion: {
        w: 0.0027841452851510382,
        x: 0.0015829046589660401,
        y: -0.9999841152360045,
        z: 0.0046396897036360945,
      },
      standing_position: [-1.152999997138977, 1.0302532736437284, 7.423749923706055],
      visible_nodes: [6, 7, 19, 20, 21, 23, 24, 25, 26, 27],
    },
    {
      accessible_nodes: [6, 7, 19, 20, 21, 22, 24, 25, 26],
      floor_index: 0,
      index: 23,
      offset_point_count: 0,
      position: [-1.1461700201034546, 2.6894500255584717, 8.269789695739746],
      quaternion: {
        w: 0.013927494705406307,
        x: -0.0047754167767634055,
        y: -0.9998905971406025,
        z: -0.0014203799447387224,
      },
      standing_position: [-1.1461700201034546, 1.743090023982331, 8.269789695739746],
      visible_nodes: [6, 7, 19, 20, 21, 22, 24, 25, 26],
    },
    {
      accessible_nodes: [6, 7, 20, 21, 22, 23, 25, 26, 27, 28],
      floor_index: 1,
      index: 24,
      offset_point_count: 0,
      position: [-1.0456199645996094, 3.1650099754333496, 9.172369956970215],
      quaternion: {
        w: -0.017092891754488946,
        x: -0.00756262813749623,
        y: -0.9998210806526402,
        z: -0.002906423166594822,
      },
      standing_position: [-1.0456199645996094, 2.093695536568431, 9.172369956970215],
      visible_nodes: [6, 7, 20, 21, 22, 23, 25, 26, 27, 28],
    },
    {
      accessible_nodes: [20, 21, 22, 23, 24, 26, 27, 28],
      floor_index: 1,
      index: 25,
      offset_point_count: 0,
      position: [-0.7763460278511047, 3.1574599742889404, 10.540399551391602],
      quaternion: {
        w: 0.08346144165199836,
        x: -0.00656058805743221,
        y: -0.996481337593142,
        z: -0.004009281500919144,
      },
      standing_position: [-0.7763460278511047, 2.094983299881333, 10.540399551391602],
      visible_nodes: [20, 21, 22, 23, 24, 26, 27, 28],
    },
    {
      accessible_nodes: [22, 23, 24, 25, 28],
      floor_index: 1,
      index: 26,
      offset_point_count: 0,
      position: [-0.8469380140304565, 3.160360097885132, 12.981900215148926],
      quaternion: {
        w: -0.0010430750506980869,
        x: -0.0036441732575778775,
        y: -0.9999923035206256,
        z: 0.0010081248648241858,
      },
      standing_position: [-0.8469380140304565, 2.1062864274232664, 12.981900215148926],
      visible_nodes: [22, 23, 24, 25, 28],
    },
    {
      accessible_nodes: [22, 24, 25, 28, 39],
      floor_index: 1,
      index: 27,
      offset_point_count: 0,
      position: [0.1066960021853447, 3.1715800762176514, 8.594010353088379],
      quaternion: {
        w: -0.029828017825452535,
        x: 0.0028447228524662855,
        y: -0.9995411997567186,
        z: -0.004425513002827359,
      },
      standing_position: [0.1066960021853447, 2.1014367199483184, 8.594010353088379],
      visible_nodes: [22, 24, 25, 28, 39],
    },
    {
      accessible_nodes: [24, 25, 26, 27, 29, 33, 39, 40, 41, 42, 43, 44],
      floor_index: 1,
      index: 28,
      offset_point_count: 0,
      position: [0.12793199717998505, 3.163749933242798, 5.602560043334961],
      quaternion: {
        w: -0.012276509954847862,
        x: -0.0016897521750165888,
        y: -0.9999160060774415,
        z: -0.0037958110550428926,
      },
      standing_position: [0.12793199717998505, 2.098158409131841, 5.602560043334961],
      visible_nodes: [24, 25, 26, 27, 29, 33, 39, 40, 41, 42, 43, 44],
    },
    {
      accessible_nodes: [28, 30, 31, 32, 33, 41, 42],
      floor_index: 1,
      index: 29,
      offset_point_count: 0,
      position: [1.8064099550247192, 3.163140058517456, 5.4435200691223145],
      quaternion: {
        w: -0.06316009792058462,
        x: -0.0038953433006434822,
        y: -0.9979686295805058,
        z: -0.007365412962147094,
      },
      standing_position: [1.8064099550247192, 2.0939899583135126, 5.4435200691223145],
      visible_nodes: [28, 30, 31, 32, 33, 41, 42],
    },
    {
      accessible_nodes: [29, 31, 32, 33, 39],
      floor_index: 1,
      index: 30,
      offset_point_count: 0,
      position: [1.7527199983596802, 3.1572799682617188, 7.735579967498779],
      quaternion: {
        w: -0.04788675466671479,
        x: -0.005725762686800391,
        y: -0.9988360634772878,
        z: -0.0007800278634169064,
      },
      standing_position: [1.7527199983596802, 2.08892163649449, 7.735579967498779],
      visible_nodes: [29, 31, 32, 33, 39],
    },
    {
      accessible_nodes: [29, 30, 32, 33, 34, 37],
      floor_index: 1,
      index: 31,
      offset_point_count: 0,
      position: [2.4142301082611084, 3.1626200675964355, 9.678500175476074],
      quaternion: {
        w: 0.048800237631354805,
        x: -0.008714721517482428,
        y: -0.9987697409706753,
        z: 0.0012668434128062104,
      },
      standing_position: [2.4142301082611084, 2.097281939435004, 9.678500175476074],
      visible_nodes: [29, 30, 32, 33, 34, 37],
    },
    {
      accessible_nodes: [29, 30, 31],
      floor_index: 1,
      index: 32,
      offset_point_count: 0,
      position: [2.6121599674224854, 3.116849899291992, 10.942999839782715],
      quaternion: {
        w: -0.04381564945950141,
        x: -0.005878997949890798,
        y: -0.9990223039040795,
        z: 0.00027315046239082485,
      },
      standing_position: [2.6121599674224854, 2.058735433668919, 10.942999839782715],
      visible_nodes: [29, 30, 31],
    },
    {
      accessible_nodes: [28, 29, 30, 31, 34, 37, 42],
      floor_index: 1,
      index: 33,
      offset_point_count: 0,
      position: [3.2632598876953125, 3.1594300270080566, 5.168950080871582],
      quaternion: {
        w: -0.10742184603741257,
        x: -0.00432100993754878,
        y: -0.9941948536769788,
        z: -0.004295912715745982,
      },
      standing_position: [3.2632598876953125, 2.1012681756827254, 5.168950080871582],
      visible_nodes: [28, 29, 30, 31, 34, 37, 42],
    },
    {
      accessible_nodes: [31, 33, 35, 37],
      floor_index: 1,
      index: 34,
      offset_point_count: 0,
      position: [3.2257299423217773, 3.156330108642578, 3.152290105819702],
      quaternion: {
        w: -0.01825917044384125,
        x: -0.007090014083500325,
        y: -0.9998076075015508,
        z: -0.0010331283717200843,
      },
      standing_position: [3.2257299423217773, 2.0889270044502846, 3.152290105819702],
      visible_nodes: [31, 33, 35, 37],
    },
    {
      accessible_nodes: [34, 36],
      floor_index: 1,
      index: 35,
      offset_point_count: 0,
      position: [1.772029995918274, 3.1509199142456055, 3.5140600204467773],
      quaternion: {
        w: 0.04111812725159652,
        x: -0.0020009338244199176,
        y: -0.9991507873209248,
        z: -0.0017294182972317983,
      },
      standing_position: [1.772029995918274, 2.0860560121340495, 3.5140600204467773],
      visible_nodes: [34, 36],
    },
    {
      accessible_nodes: [35],
      floor_index: 1,
      index: 36,
      offset_point_count: 0,
      position: [1.5219299793243408, 3.1535398960113525, 2.1029698848724365],
      quaternion: {
        w: -0.04213741836470278,
        x: 0.00020212605993525387,
        y: -0.9991022938382137,
        z: -0.004358770268910757,
      },
      standing_position: [1.5219299793243408, 2.0849446947216057, 2.1029698848724365],
      visible_nodes: [35],
    },
    {
      accessible_nodes: [31, 33, 34, 38],
      floor_index: 1,
      index: 37,
      offset_point_count: 0,
      position: [3.2859699726104736, 3.0853099822998047, 0.3743399977684021],
      quaternion: {
        w: -0.0354155110860913,
        x: -0.0040778105115058996,
        y: -0.9993631525512369,
        z: 0.0015495790212691795,
      },
      standing_position: [3.2859699726104736, 2.0218354182259555, 0.3743399977684021],
      visible_nodes: [31, 33, 34, 38],
    },
    {
      accessible_nodes: [37],
      floor_index: 1,
      index: 38,
      offset_point_count: 0,
      position: [1.7530800104141235, 3.082279920578003, -0.35538598895072937],
      quaternion: {
        w: 0.05259855433078189,
        x: -0.008035440684400184,
        y: -0.9985825506402138,
        z: -0.001308555272843372,
      },
      standing_position: [1.7530800104141235, 2.012410230565008, -0.35538598895072937],
      visible_nodes: [37],
    },
    {
      accessible_nodes: [27, 28, 30, 40, 42, 43, 44, 45, 46],
      floor_index: 1,
      index: 39,
      offset_point_count: 0,
      position: [-0.25293999910354614, 3.1606600284576416, 4.12060022354126],
      quaternion: {
        w: -0.02320047765989491,
        x: -0.00651507030916039,
        y: -0.9997092807897621,
        z: 0.0008092202866269843,
      },
      standing_position: [-0.25293999910354614, 2.099861033685797, 4.12060022354126],
      visible_nodes: [27, 28, 30, 40, 42, 43, 44, 45, 46],
    },
    {
      accessible_nodes: [28, 39],
      floor_index: 1,
      index: 40,
      offset_point_count: 0,
      position: [-0.5009310245513916, 3.154360055923462, 2.4275200366973877],
      quaternion: {
        w: -0.06173863497891133,
        x: -0.001086048139787542,
        y: -0.9980864694284949,
        z: -0.0032485397043555456,
      },
      standing_position: [-0.5009310245513916, 2.0891836715505985, 2.4275200366973877],
      visible_nodes: [28, 39],
    },
    {
      accessible_nodes: [28, 29, 42, 43, 44, 45, 46],
      floor_index: 1,
      index: 41,
      offset_point_count: 0,
      position: [-0.9105370044708252, 3.168410062789917, 4.874139785766602],
      quaternion: {
        w: -0.0059092878447459755,
        x: -0.008663723289252202,
        y: -0.9999425916286403,
        z: -0.0021993584906204824,
      },
      standing_position: [-0.9105370044708252, 2.0999476248338427, 4.874139785766602],
      visible_nodes: [28, 29, 42, 43, 44, 45, 46],
    },
    {
      accessible_nodes: [28, 29, 33, 39, 41, 43, 44, 45, 46],
      floor_index: 1,
      index: 42,
      offset_point_count: 0,
      position: [-1.053439974784851, 3.709630012512207, 6.191319942474365],
      quaternion: {
        w: -0.035071771235375575,
        x: -0.0025701215697544965,
        y: -0.9993675288194869,
        z: 0.005283041643370265,
      },
      standing_position: [-1.053439974784851, 2.7656916856368188, 6.191319942474365],
      visible_nodes: [28, 29, 33, 39, 41, 43, 44, 45, 46],
    },
    {
      accessible_nodes: [28, 39, 41, 42, 44, 45, 46],
      floor_index: 1,
      index: 43,
      offset_point_count: 0,
      position: [-1.0038100481033325, 4.401090145111084, 7.033649921417236],
      quaternion: {
        w: 0.021884501889610025,
        x: -0.00253275334327512,
        y: -0.9997443229931926,
        z: 0.005092853584023668,
      },
      standing_position: [-1.0038100481033325, 3.4416205053177045, 7.033649921417236],
      visible_nodes: [28, 39, 41, 42, 44, 45, 46],
    },
    {
      accessible_nodes: [28, 39, 41, 42, 43, 45, 46],
      floor_index: 1,
      index: 44,
      offset_point_count: 0,
      position: [-0.9845139980316162, 4.9202799797058105, 7.639599800109863],
      quaternion: {
        w: -0.05029441944878479,
        x: 0.0024356805640125653,
        y: -0.9986789366681258,
        z: 0.01024292912320219,
      },
      standing_position: [-0.9845139980316162, 3.9505319420970038, 7.639599800109863],
      visible_nodes: [28, 39, 41, 42, 43, 45, 46],
    },
    {
      accessible_nodes: [39, 41, 42, 43, 44, 46],
      floor_index: 1,
      index: 45,
      offset_point_count: 0,
      position: [-1.0458300113677979, 5.44074010848999, 8.27029037475586],
      quaternion: {
        w: 0.0087502435123525,
        x: 0.003638899579953246,
        y: -0.9999439700642344,
        z: 0.004717752875727198,
      },
      standing_position: [-1.0458300113677979, 4.475474854011692, 8.27029037475586],
      visible_nodes: [39, 41, 42, 43, 44, 46],
    },
    {
      accessible_nodes: [39, 41, 42, 43, 44, 45, 47, 50, 51, 52],
      floor_index: 2,
      index: 46,
      offset_point_count: 0,
      position: [-1.0732500553131104, 5.995779991149902, 9.177129745483398],
      quaternion: {
        w: -0.03952658919852013,
        x: -0.0036511362877439343,
        y: -0.9992113356207073,
        z: 0.001020032218099435,
      },
      standing_position: [-1.0732500553131104, 4.930705555271547, 9.177129745483398],
      visible_nodes: [39, 41, 42, 43, 44, 45, 47, 50, 51, 52],
    },
    {
      accessible_nodes: [46, 48, 49, 50, 51, 52],
      floor_index: 2,
      index: 47,
      offset_point_count: 0,
      position: [0.5308300256729126, 6.006209850311279, 9.601280212402344],
      quaternion: {
        w: -0.07612787265121741,
        x: -0.004819719068062573,
        y: -0.9970821637711214,
        z: 0.0029098752628363015,
      },
      standing_position: [0.5308300256729126, 4.939613020176168, 9.601280212402344],
      visible_nodes: [46, 48, 49, 50, 51, 52],
    },
    {
      accessible_nodes: [47, 49, 50, 52],
      floor_index: 2,
      index: 48,
      offset_point_count: 0,
      position: [0.6562449932098389, 6.239630222320557, 10.713500022888184],
      quaternion: {
        w: -0.1365423823025202,
        x: 0.001226141612499186,
        y: -0.9906332803855461,
        z: 0.0006116840579621095,
      },
      standing_position: [0.6562449932098389, 5.17543063158421, 10.713500022888184],
      visible_nodes: [47, 49, 50, 52],
    },
    {
      accessible_nodes: [47, 48, 50],
      floor_index: 2,
      index: 49,
      offset_point_count: 0,
      position: [-0.13813599944114685, 6.235529899597168, 11.974300384521484],
      quaternion: {
        w: 0.0004006507748002934,
        x: 0.00033789732972401164,
        y: -0.9998708581982917,
        z: 0.0160623279232143,
      },
      standing_position: [-0.13813599944114685, 5.162995592222559, 11.974300384521484],
      visible_nodes: [47, 48, 50],
    },
    {
      accessible_nodes: [46, 47, 48, 49, 51, 52],
      floor_index: 2,
      index: 50,
      offset_point_count: 0,
      position: [0.9873030185699463, 5.987679958343506, 7.059579849243164],
      quaternion: {
        w: -0.10500133359885434,
        x: 0.006647574737943137,
        y: -0.9944492153426818,
        z: -0.0011376559921293513,
      },
      standing_position: [0.9873030185699463, 4.927682981359809, 7.059579849243164],
      visible_nodes: [46, 47, 48, 49, 51, 52],
    },
    {
      accessible_nodes: [46, 47, 50, 52],
      floor_index: 2,
      index: 51,
      offset_point_count: 0,
      position: [2.8373498916625977, 5.984320163726807, 5.548110008239746],
      quaternion: {
        w: -0.014081862370425698,
        x: 0.005842115681574836,
        y: -0.9998818417122036,
        z: 0.0019686923091649018,
      },
      standing_position: [2.8373498916625977, 4.9260856694194715, 5.548110008239746],
      visible_nodes: [46, 47, 50, 52],
    },
    {
      accessible_nodes: [46, 47, 48, 50, 51],
      floor_index: 2,
      index: 52,
      offset_point_count: 0,
      position: [0.8967400193214417, 5.987239837646484, 4.15064001083374],
      quaternion: {
        w: -0.06533157257927838,
        x: 0.007213059633901819,
        y: -0.9978324226758387,
        z: 0.003196608597190854,
      },
      standing_position: [0.8967400193214417, 4.924379201276399, 4.15064001083374],
      visible_nodes: [46, 47, 48, 50, 51],
    },
  ],
  outline_floor_plan: [
    {
      checksum: '4f0d672229b904dd4e03c31a624e4635',
      index: 0,
      url: 'https://vrlab-public.ljcdn.com/release/vrcustomer/outline_0_ec177b0b-ddd9-43fe-b9c1-1ac2ce11a065.png',
    },
    {
      checksum: '99f52b1a30b99b52621fb946da0ac251',
      index: 1,
      url: 'https://vrlab-public.ljcdn.com/release/vrcustomer/outline_1_ec177b0b-ddd9-43fe-b9c1-1ac2ce11a065.png',
    },
    {
      checksum: 'dc2c68d626e92c01ea048fd03af073fd',
      index: 2,
      url: 'https://vrlab-public.ljcdn.com/release/vrcustomer/outline_2_ec177b0b-ddd9-43fe-b9c1-1ac2ce11a065.png',
    },
  ],
  panorama: {
    base_url: 'http://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/',
    count: 53,
    list: [
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/0/4023ca78c7e9f42c379cfa855d4baa3c/0_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/0/4023ca78c7e9f42c379cfa855d4baa3c/0_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/0/4023ca78c7e9f42c379cfa855d4baa3c/0_f.jpg',
        index: 0,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/0/4023ca78c7e9f42c379cfa855d4baa3c/0_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/0/4023ca78c7e9f42c379cfa855d4baa3c/0_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/0/4023ca78c7e9f42c379cfa855d4baa3c/0_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/1/a639a00edd1c386aecef753a0d08ce26/1_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/1/a639a00edd1c386aecef753a0d08ce26/1_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/1/a639a00edd1c386aecef753a0d08ce26/1_f.jpg',
        index: 1,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/1/a639a00edd1c386aecef753a0d08ce26/1_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/1/a639a00edd1c386aecef753a0d08ce26/1_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/1/a639a00edd1c386aecef753a0d08ce26/1_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/2/04c79c58ae3831b97c83cd1809a0fcae/2_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/2/04c79c58ae3831b97c83cd1809a0fcae/2_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/2/04c79c58ae3831b97c83cd1809a0fcae/2_f.jpg',
        index: 2,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/2/04c79c58ae3831b97c83cd1809a0fcae/2_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/2/04c79c58ae3831b97c83cd1809a0fcae/2_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/2/04c79c58ae3831b97c83cd1809a0fcae/2_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/3/a66253cc711dd58db7252caf6f0a60f8/3_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/3/a66253cc711dd58db7252caf6f0a60f8/3_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/3/a66253cc711dd58db7252caf6f0a60f8/3_f.jpg',
        index: 3,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/3/a66253cc711dd58db7252caf6f0a60f8/3_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/3/a66253cc711dd58db7252caf6f0a60f8/3_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/3/a66253cc711dd58db7252caf6f0a60f8/3_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/4/0468cd3f03d98cd52870a3f35ab97f3e/4_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/4/0468cd3f03d98cd52870a3f35ab97f3e/4_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/4/0468cd3f03d98cd52870a3f35ab97f3e/4_f.jpg',
        index: 4,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/4/0468cd3f03d98cd52870a3f35ab97f3e/4_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/4/0468cd3f03d98cd52870a3f35ab97f3e/4_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/4/0468cd3f03d98cd52870a3f35ab97f3e/4_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/5/fbd4822f167fcd1c8508ef0bf9cc3229/5_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/5/fbd4822f167fcd1c8508ef0bf9cc3229/5_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/5/fbd4822f167fcd1c8508ef0bf9cc3229/5_f.jpg',
        index: 5,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/5/fbd4822f167fcd1c8508ef0bf9cc3229/5_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/5/fbd4822f167fcd1c8508ef0bf9cc3229/5_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/5/fbd4822f167fcd1c8508ef0bf9cc3229/5_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/6/a7fb48b520274d6d61472dbb460c80da/6_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/6/a7fb48b520274d6d61472dbb460c80da/6_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/6/a7fb48b520274d6d61472dbb460c80da/6_f.jpg',
        index: 6,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/6/a7fb48b520274d6d61472dbb460c80da/6_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/6/a7fb48b520274d6d61472dbb460c80da/6_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/6/a7fb48b520274d6d61472dbb460c80da/6_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/7/9954f3235afbd96dd3b4765ffe72b25e/7_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/7/9954f3235afbd96dd3b4765ffe72b25e/7_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/7/9954f3235afbd96dd3b4765ffe72b25e/7_f.jpg',
        index: 7,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/7/9954f3235afbd96dd3b4765ffe72b25e/7_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/7/9954f3235afbd96dd3b4765ffe72b25e/7_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/7/9954f3235afbd96dd3b4765ffe72b25e/7_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/8/cfdb43d01d935d1000887377eb38ee08/8_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/8/cfdb43d01d935d1000887377eb38ee08/8_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/8/cfdb43d01d935d1000887377eb38ee08/8_f.jpg',
        index: 8,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/8/cfdb43d01d935d1000887377eb38ee08/8_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/8/cfdb43d01d935d1000887377eb38ee08/8_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/8/cfdb43d01d935d1000887377eb38ee08/8_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/9/cbd64e3378275b86beaf058f599307a6/9_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/9/cbd64e3378275b86beaf058f599307a6/9_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/9/cbd64e3378275b86beaf058f599307a6/9_f.jpg',
        index: 9,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/9/cbd64e3378275b86beaf058f599307a6/9_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/9/cbd64e3378275b86beaf058f599307a6/9_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/9/cbd64e3378275b86beaf058f599307a6/9_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/10/fb5e00b506f54fb94ddd4af8e6c208c0/10_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/10/fb5e00b506f54fb94ddd4af8e6c208c0/10_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/10/fb5e00b506f54fb94ddd4af8e6c208c0/10_f.jpg',
        index: 10,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/10/fb5e00b506f54fb94ddd4af8e6c208c0/10_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/10/fb5e00b506f54fb94ddd4af8e6c208c0/10_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/10/fb5e00b506f54fb94ddd4af8e6c208c0/10_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/11/1d0c2976e96dee8673dfaf96feba9090/11_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/11/1d0c2976e96dee8673dfaf96feba9090/11_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/11/1d0c2976e96dee8673dfaf96feba9090/11_f.jpg',
        index: 11,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/11/1d0c2976e96dee8673dfaf96feba9090/11_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/11/1d0c2976e96dee8673dfaf96feba9090/11_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/11/1d0c2976e96dee8673dfaf96feba9090/11_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/12/665d6e21992ffb060ebac8f4aa826e76/12_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/12/665d6e21992ffb060ebac8f4aa826e76/12_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/12/665d6e21992ffb060ebac8f4aa826e76/12_f.jpg',
        index: 12,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/12/665d6e21992ffb060ebac8f4aa826e76/12_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/12/665d6e21992ffb060ebac8f4aa826e76/12_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/12/665d6e21992ffb060ebac8f4aa826e76/12_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/13/339f7c83e7c3be909e496e786cf0f1e5/13_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/13/339f7c83e7c3be909e496e786cf0f1e5/13_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/13/339f7c83e7c3be909e496e786cf0f1e5/13_f.jpg',
        index: 13,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/13/339f7c83e7c3be909e496e786cf0f1e5/13_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/13/339f7c83e7c3be909e496e786cf0f1e5/13_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/13/339f7c83e7c3be909e496e786cf0f1e5/13_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/14/52f63df270b7171b7f70eab0b10ec6ab/14_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/14/52f63df270b7171b7f70eab0b10ec6ab/14_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/14/52f63df270b7171b7f70eab0b10ec6ab/14_f.jpg',
        index: 14,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/14/52f63df270b7171b7f70eab0b10ec6ab/14_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/14/52f63df270b7171b7f70eab0b10ec6ab/14_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/14/52f63df270b7171b7f70eab0b10ec6ab/14_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/15/163eccd6db575fb3edc14e9da2de0f76/15_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/15/163eccd6db575fb3edc14e9da2de0f76/15_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/15/163eccd6db575fb3edc14e9da2de0f76/15_f.jpg',
        index: 15,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/15/163eccd6db575fb3edc14e9da2de0f76/15_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/15/163eccd6db575fb3edc14e9da2de0f76/15_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/15/163eccd6db575fb3edc14e9da2de0f76/15_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/16/50833dd84ea8e8dd47d220f69d207dd1/16_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/16/50833dd84ea8e8dd47d220f69d207dd1/16_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/16/50833dd84ea8e8dd47d220f69d207dd1/16_f.jpg',
        index: 16,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/16/50833dd84ea8e8dd47d220f69d207dd1/16_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/16/50833dd84ea8e8dd47d220f69d207dd1/16_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/16/50833dd84ea8e8dd47d220f69d207dd1/16_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/17/05ddaf3f4b50b7da4d3ef019b246cc03/17_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/17/05ddaf3f4b50b7da4d3ef019b246cc03/17_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/17/05ddaf3f4b50b7da4d3ef019b246cc03/17_f.jpg',
        index: 17,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/17/05ddaf3f4b50b7da4d3ef019b246cc03/17_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/17/05ddaf3f4b50b7da4d3ef019b246cc03/17_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/17/05ddaf3f4b50b7da4d3ef019b246cc03/17_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/18/3893a18ca62c9945fcaa357ecb1af099/18_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/18/3893a18ca62c9945fcaa357ecb1af099/18_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/18/3893a18ca62c9945fcaa357ecb1af099/18_f.jpg',
        index: 18,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/18/3893a18ca62c9945fcaa357ecb1af099/18_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/18/3893a18ca62c9945fcaa357ecb1af099/18_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/18/3893a18ca62c9945fcaa357ecb1af099/18_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/19/481caf75b236d09a9a776c7f69e8b783/19_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/19/481caf75b236d09a9a776c7f69e8b783/19_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/19/481caf75b236d09a9a776c7f69e8b783/19_f.jpg',
        index: 19,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/19/481caf75b236d09a9a776c7f69e8b783/19_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/19/481caf75b236d09a9a776c7f69e8b783/19_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/19/481caf75b236d09a9a776c7f69e8b783/19_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/20/d68e947b212363686eea2b3119e57559/20_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/20/d68e947b212363686eea2b3119e57559/20_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/20/d68e947b212363686eea2b3119e57559/20_f.jpg',
        index: 20,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/20/d68e947b212363686eea2b3119e57559/20_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/20/d68e947b212363686eea2b3119e57559/20_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/20/d68e947b212363686eea2b3119e57559/20_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/21/e8ca69c130a0d90386690c4ffefda013/21_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/21/e8ca69c130a0d90386690c4ffefda013/21_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/21/e8ca69c130a0d90386690c4ffefda013/21_f.jpg',
        index: 21,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/21/e8ca69c130a0d90386690c4ffefda013/21_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/21/e8ca69c130a0d90386690c4ffefda013/21_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/21/e8ca69c130a0d90386690c4ffefda013/21_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/22/036d99b24364676a0bc46a8411688c44/22_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/22/036d99b24364676a0bc46a8411688c44/22_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/22/036d99b24364676a0bc46a8411688c44/22_f.jpg',
        index: 22,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/22/036d99b24364676a0bc46a8411688c44/22_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/22/036d99b24364676a0bc46a8411688c44/22_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/22/036d99b24364676a0bc46a8411688c44/22_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/23/f57872fbe5e9b972d9ea901ee3bcce43/23_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/23/f57872fbe5e9b972d9ea901ee3bcce43/23_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/23/f57872fbe5e9b972d9ea901ee3bcce43/23_f.jpg',
        index: 23,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/23/f57872fbe5e9b972d9ea901ee3bcce43/23_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/23/f57872fbe5e9b972d9ea901ee3bcce43/23_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/23/f57872fbe5e9b972d9ea901ee3bcce43/23_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/24/6f7864712f819ba49015fcf923c0a15c/24_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/24/6f7864712f819ba49015fcf923c0a15c/24_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/24/6f7864712f819ba49015fcf923c0a15c/24_f.jpg',
        index: 24,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/24/6f7864712f819ba49015fcf923c0a15c/24_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/24/6f7864712f819ba49015fcf923c0a15c/24_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/24/6f7864712f819ba49015fcf923c0a15c/24_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/25/17930a7bf46cb5121439d24036307c97/25_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/25/17930a7bf46cb5121439d24036307c97/25_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/25/17930a7bf46cb5121439d24036307c97/25_f.jpg',
        index: 25,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/25/17930a7bf46cb5121439d24036307c97/25_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/25/17930a7bf46cb5121439d24036307c97/25_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/25/17930a7bf46cb5121439d24036307c97/25_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/26/f436029065727118ec520ad380b78503/26_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/26/f436029065727118ec520ad380b78503/26_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/26/f436029065727118ec520ad380b78503/26_f.jpg',
        index: 26,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/26/f436029065727118ec520ad380b78503/26_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/26/f436029065727118ec520ad380b78503/26_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/26/f436029065727118ec520ad380b78503/26_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/27/790f79a76f86aa38573b45783af7bc1e/27_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/27/790f79a76f86aa38573b45783af7bc1e/27_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/27/790f79a76f86aa38573b45783af7bc1e/27_f.jpg',
        index: 27,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/27/790f79a76f86aa38573b45783af7bc1e/27_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/27/790f79a76f86aa38573b45783af7bc1e/27_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/27/790f79a76f86aa38573b45783af7bc1e/27_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/28/61ceb17f4acd4f80ea046573fc6b4db9/28_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/28/61ceb17f4acd4f80ea046573fc6b4db9/28_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/28/61ceb17f4acd4f80ea046573fc6b4db9/28_f.jpg',
        index: 28,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/28/61ceb17f4acd4f80ea046573fc6b4db9/28_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/28/61ceb17f4acd4f80ea046573fc6b4db9/28_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/28/61ceb17f4acd4f80ea046573fc6b4db9/28_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/29/7dc228fc38f46d024452d8fed636bb7d/29_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/29/7dc228fc38f46d024452d8fed636bb7d/29_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/29/7dc228fc38f46d024452d8fed636bb7d/29_f.jpg',
        index: 29,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/29/7dc228fc38f46d024452d8fed636bb7d/29_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/29/7dc228fc38f46d024452d8fed636bb7d/29_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/29/7dc228fc38f46d024452d8fed636bb7d/29_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/30/006b76d10a7f05450aa521d3d25e1ad6/30_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/30/006b76d10a7f05450aa521d3d25e1ad6/30_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/30/006b76d10a7f05450aa521d3d25e1ad6/30_f.jpg',
        index: 30,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/30/006b76d10a7f05450aa521d3d25e1ad6/30_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/30/006b76d10a7f05450aa521d3d25e1ad6/30_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/30/006b76d10a7f05450aa521d3d25e1ad6/30_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/31/376c59553b1ffaec33ac9383a3b21540/31_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/31/376c59553b1ffaec33ac9383a3b21540/31_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/31/376c59553b1ffaec33ac9383a3b21540/31_f.jpg',
        index: 31,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/31/376c59553b1ffaec33ac9383a3b21540/31_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/31/376c59553b1ffaec33ac9383a3b21540/31_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/31/376c59553b1ffaec33ac9383a3b21540/31_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/32/c87b394ae495418a01042b9e9a021266/32_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/32/c87b394ae495418a01042b9e9a021266/32_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/32/c87b394ae495418a01042b9e9a021266/32_f.jpg',
        index: 32,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/32/c87b394ae495418a01042b9e9a021266/32_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/32/c87b394ae495418a01042b9e9a021266/32_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/32/c87b394ae495418a01042b9e9a021266/32_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/33/42234ce2385dcd1f476c755486385c2f/33_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/33/42234ce2385dcd1f476c755486385c2f/33_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/33/42234ce2385dcd1f476c755486385c2f/33_f.jpg',
        index: 33,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/33/42234ce2385dcd1f476c755486385c2f/33_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/33/42234ce2385dcd1f476c755486385c2f/33_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/33/42234ce2385dcd1f476c755486385c2f/33_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/34/5aa1582bf38bcba3c0fff77861d91dc3/34_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/34/5aa1582bf38bcba3c0fff77861d91dc3/34_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/34/5aa1582bf38bcba3c0fff77861d91dc3/34_f.jpg',
        index: 34,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/34/5aa1582bf38bcba3c0fff77861d91dc3/34_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/34/5aa1582bf38bcba3c0fff77861d91dc3/34_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/34/5aa1582bf38bcba3c0fff77861d91dc3/34_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/35/cef5b9a06c6c4c58d22af77491a7da2e/35_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/35/cef5b9a06c6c4c58d22af77491a7da2e/35_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/35/cef5b9a06c6c4c58d22af77491a7da2e/35_f.jpg',
        index: 35,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/35/cef5b9a06c6c4c58d22af77491a7da2e/35_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/35/cef5b9a06c6c4c58d22af77491a7da2e/35_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/35/cef5b9a06c6c4c58d22af77491a7da2e/35_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/36/10ebb0ac99ecb753add9beaed88512a2/36_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/36/10ebb0ac99ecb753add9beaed88512a2/36_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/36/10ebb0ac99ecb753add9beaed88512a2/36_f.jpg',
        index: 36,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/36/10ebb0ac99ecb753add9beaed88512a2/36_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/36/10ebb0ac99ecb753add9beaed88512a2/36_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/36/10ebb0ac99ecb753add9beaed88512a2/36_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/37/5fb9800c75230f2de299790c13e02b9e/37_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/37/5fb9800c75230f2de299790c13e02b9e/37_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/37/5fb9800c75230f2de299790c13e02b9e/37_f.jpg',
        index: 37,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/37/5fb9800c75230f2de299790c13e02b9e/37_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/37/5fb9800c75230f2de299790c13e02b9e/37_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/37/5fb9800c75230f2de299790c13e02b9e/37_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/38/053c994b53b71e42752f3fa832010f31/38_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/38/053c994b53b71e42752f3fa832010f31/38_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/38/053c994b53b71e42752f3fa832010f31/38_f.jpg',
        index: 38,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/38/053c994b53b71e42752f3fa832010f31/38_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/38/053c994b53b71e42752f3fa832010f31/38_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/38/053c994b53b71e42752f3fa832010f31/38_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/39/35635e38a61def7890dad81a74b8b91c/39_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/39/35635e38a61def7890dad81a74b8b91c/39_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/39/35635e38a61def7890dad81a74b8b91c/39_f.jpg',
        index: 39,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/39/35635e38a61def7890dad81a74b8b91c/39_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/39/35635e38a61def7890dad81a74b8b91c/39_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/39/35635e38a61def7890dad81a74b8b91c/39_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/40/8f5597661a9e37752b96d3b8b399d8ec/40_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/40/8f5597661a9e37752b96d3b8b399d8ec/40_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/40/8f5597661a9e37752b96d3b8b399d8ec/40_f.jpg',
        index: 40,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/40/8f5597661a9e37752b96d3b8b399d8ec/40_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/40/8f5597661a9e37752b96d3b8b399d8ec/40_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/40/8f5597661a9e37752b96d3b8b399d8ec/40_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/41/9315d6b55c4d95cbbbaf4d46d957f001/41_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/41/9315d6b55c4d95cbbbaf4d46d957f001/41_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/41/9315d6b55c4d95cbbbaf4d46d957f001/41_f.jpg',
        index: 41,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/41/9315d6b55c4d95cbbbaf4d46d957f001/41_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/41/9315d6b55c4d95cbbbaf4d46d957f001/41_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/41/9315d6b55c4d95cbbbaf4d46d957f001/41_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/42/c75d495008394467f067966aa67874c6/42_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/42/c75d495008394467f067966aa67874c6/42_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/42/c75d495008394467f067966aa67874c6/42_f.jpg',
        index: 42,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/42/c75d495008394467f067966aa67874c6/42_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/42/c75d495008394467f067966aa67874c6/42_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/42/c75d495008394467f067966aa67874c6/42_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/43/292b280b442f548a075f88166a6e73c8/43_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/43/292b280b442f548a075f88166a6e73c8/43_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/43/292b280b442f548a075f88166a6e73c8/43_f.jpg',
        index: 43,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/43/292b280b442f548a075f88166a6e73c8/43_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/43/292b280b442f548a075f88166a6e73c8/43_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/43/292b280b442f548a075f88166a6e73c8/43_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/44/5f7ca8da01d3a5108347d00a1370a2e2/44_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/44/5f7ca8da01d3a5108347d00a1370a2e2/44_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/44/5f7ca8da01d3a5108347d00a1370a2e2/44_f.jpg',
        index: 44,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/44/5f7ca8da01d3a5108347d00a1370a2e2/44_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/44/5f7ca8da01d3a5108347d00a1370a2e2/44_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/44/5f7ca8da01d3a5108347d00a1370a2e2/44_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/45/efd646c0e9ed0a583b38ab0a12097634/45_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/45/efd646c0e9ed0a583b38ab0a12097634/45_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/45/efd646c0e9ed0a583b38ab0a12097634/45_f.jpg',
        index: 45,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/45/efd646c0e9ed0a583b38ab0a12097634/45_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/45/efd646c0e9ed0a583b38ab0a12097634/45_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/45/efd646c0e9ed0a583b38ab0a12097634/45_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/46/afe8159f48b0b563a80db3385e1ad02a/46_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/46/afe8159f48b0b563a80db3385e1ad02a/46_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/46/afe8159f48b0b563a80db3385e1ad02a/46_f.jpg',
        index: 46,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/46/afe8159f48b0b563a80db3385e1ad02a/46_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/46/afe8159f48b0b563a80db3385e1ad02a/46_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/46/afe8159f48b0b563a80db3385e1ad02a/46_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/47/4ed5ee98fa5f39ae49e9780de2f00afd/47_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/47/4ed5ee98fa5f39ae49e9780de2f00afd/47_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/47/4ed5ee98fa5f39ae49e9780de2f00afd/47_f.jpg',
        index: 47,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/47/4ed5ee98fa5f39ae49e9780de2f00afd/47_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/47/4ed5ee98fa5f39ae49e9780de2f00afd/47_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/47/4ed5ee98fa5f39ae49e9780de2f00afd/47_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/48/db9707236913d9eb83bdbfd03a21e70a/48_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/48/db9707236913d9eb83bdbfd03a21e70a/48_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/48/db9707236913d9eb83bdbfd03a21e70a/48_f.jpg',
        index: 48,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/48/db9707236913d9eb83bdbfd03a21e70a/48_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/48/db9707236913d9eb83bdbfd03a21e70a/48_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/48/db9707236913d9eb83bdbfd03a21e70a/48_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/49/9eedc783b78ad4917848e9b29eb08e30/49_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/49/9eedc783b78ad4917848e9b29eb08e30/49_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/49/9eedc783b78ad4917848e9b29eb08e30/49_f.jpg',
        index: 49,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/49/9eedc783b78ad4917848e9b29eb08e30/49_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/49/9eedc783b78ad4917848e9b29eb08e30/49_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/49/9eedc783b78ad4917848e9b29eb08e30/49_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/50/b631f8bf2a299c5381192689fc64e5f6/50_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/50/b631f8bf2a299c5381192689fc64e5f6/50_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/50/b631f8bf2a299c5381192689fc64e5f6/50_f.jpg',
        index: 50,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/50/b631f8bf2a299c5381192689fc64e5f6/50_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/50/b631f8bf2a299c5381192689fc64e5f6/50_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/50/b631f8bf2a299c5381192689fc64e5f6/50_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/51/365a6e7d0dc20983d37f3f12c2cffc5e/51_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/51/365a6e7d0dc20983d37f3f12c2cffc5e/51_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/51/365a6e7d0dc20983d37f3f12c2cffc5e/51_f.jpg',
        index: 51,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/51/365a6e7d0dc20983d37f3f12c2cffc5e/51_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/51/365a6e7d0dc20983d37f3f12c2cffc5e/51_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/51/365a6e7d0dc20983d37f3f12c2cffc5e/51_u.jpg',
      },
      {
        back: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/52/0e47bddd975526040863edb33e8abf58/52_b.jpg',
        down: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/52/0e47bddd975526040863edb33e8abf58/52_d.jpg',
        front:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/52/0e47bddd975526040863edb33e8abf58/52_f.jpg',
        index: 52,
        left: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/52/0e47bddd975526040863edb33e8abf58/52_l.jpg',
        right:
            'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/52/0e47bddd975526040863edb33e8abf58/52_r.jpg',
        up: 'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/images/cube_2048/52/0e47bddd975526040863edb33e8abf58/52_u.jpg',
      },
    ],
    type: 0,
    work_code: 'BEy832AVen8DNnOe',
  },
  picture_checksum: '827b858e4d7d1049b36de7f72e925b22',
  picture_url:
      'https://vrlab-public.ljcdn.com/release/auto3dhd/819bc62edb75ee61c624a1c621e2ca66/screenshot/1631238905_5/pc0_Hzeck00HK.jpg',
  project_id: 'auto3d-VDKsQUwFdpt39RPpMHfdtk',
  standard_floor_plan_checksum: '',
  standard_floor_plan_url: '',
  status: 1,
  title: '819bc62edb75ee61c624a1c621e2ca66',
  title_picture_checksum: 'c2e1be3f88758e8af23eb1327b949d18',
  title_picture_url: 'http://vrlab-public.ljcdn.com/release/vradmin/783b7534-6ee1-448f-ae0f-f1483a46748c_1000.jpg',
  user_id: 1000000026510413,
}
