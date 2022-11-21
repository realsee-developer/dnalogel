import * as React from 'react'
import { useEffect } from 'react'
import { unsafe__useFiveInstance } from '@realsee/five/react'
import { TagsList, AddTagData } from './mock_data';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ImageIcon from '@mui/icons-material/Image';
import TitleIcon from '@mui/icons-material/Title';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LinkIcon from '@mui/icons-material/Link';
import { ContentType, PanoTagPluginExportInterface, Tag } from '@realsee/dnalogel';

import { useFiveEventCallback, useFiveModelIntersectRaycaster } from "@realsee/five/react";

const PanoTagPluginUse = () => {
  const five = unsafe__useFiveInstance();
  console.log('five', five)
  const pluginInstance = five.plugins.panoTagPlugin as PanoTagPluginExportInterface;

  // const modelIntersectRaycaster = useFiveModelIntersectRaycaster();
  // // 获取坐标
  // useFiveEventCallback("wantsTapGesture", (raycaster) => {
  //   const [intersect] = modelIntersectRaycaster(raycaster);
  //   if (intersect) {
  //     console.log(intersect.point)
  //   }
  //   return false;
  // },);

  useEffect(() => {
    pluginInstance.load({ tagList: TagsList } as any)
  })

  const addTag = (type: ContentType) => {
    pluginInstance.addTag(AddTagData[type]);
  }

  // 添加自定义热点
  const addCustomerTag = () => {
    // 自定义Element
    const ele = document.createElement('div');
    ele.innerText = "这是一个自定义的热点";
    ele.style.color = "red";
    ele.style.width = "200px";
    ele.style.border = "1px solid #000";

    const tagData: Tag = {
      id: "03338b76-b64a-4e90-37fb-44e3c0ffeb88",
      pointType: "PointTag",
      dimensionType: "2D",
      position: [-1.7882169929208833, 1.022040232156752, -2.339700937271118],
      data: {
        text: "自定义热点"
      },
      element: ele,
      // ContentType设置为Custom
      contentType: "Custom"
    }
    pluginInstance.addTag(tagData);
  }


  return (
    <Stack direction={'row'} spacing={1} sx={{ position: 'fixed', top: '10px', right: '10px', }}>
      <Button variant="contained" size="small" startIcon={<ImageIcon />} onClick={addCustomerTag}>
        添加自定义标签
      </Button>
      <Button variant="contained" size="small" startIcon={<ImageIcon />} onClick={() => addTag(ContentType.ImageText)}>
        图文标签
      </Button>
      <Button variant="contained" size="small" startIcon={<TitleIcon />} onClick={() => addTag(ContentType.Text)}>
        文字标签
      </Button>
      <Button variant="contained" size="small" startIcon={<MusicNoteIcon />} onClick={() => addTag(ContentType.Audio)}>
        音频标签
      </Button>
      <Button variant="contained" size="small" startIcon={<ShoppingBagIcon />} onClick={() => addTag(ContentType.Marketing)}>
        营销贴片
      </Button>
      <Button variant="contained" size="small" startIcon={<LinkIcon />} onClick={() => addTag(ContentType.Link)}>
        跳转标签
      </Button>
    </Stack >
  )
}

export default PanoTagPluginUse;
