import * as React from 'react'
import { useState, useEffect } from 'react'
import { unsafe__useFiveInstance } from '@realsee/five/react'
import { WorkObserver } from '@realsee/five';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const GuideLinePluginUse = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [currentGuideLine, setCurrentGuideLine] = useState<number[]>([0, 1, 2, 3, 4]);
  // 可选的路径
  const [observersData, setCurrentObserversData] = useState<WorkObserver[]>();
  const five = unsafe__useFiveInstance();
  const guideLine = five.plugins.guideLinePlugin;

  useEffect(() => {
    reloadGuideLine(visible);
    setCurrentObserversData(five.work.observers);
  }, [])

  // 显示/隐藏路径
  const handleVisibleChange = async (value: boolean) => {
    if (value) {
      guideLine.show()
    } else {
      guideLine.hide()
    }

    setVisible(value)
  }
  // 重载路径
  const reloadGuideLine = async (visible) => {
    guideLine.load({
      routes: [{
        panoIndexList: currentGuideLine,
        // arrowTextureUrl: '', // 自定义路径箭头icon
      }]
    })

    if (visible) {
      handleVisibleChange(true)
    } else {
      handleVisibleChange(false)
    }
  }

  // 选择坐标点
  const handleToggle = (value: number) => () => {
    const currentIndex = currentGuideLine.indexOf(value);
    const newChecked = [...currentGuideLine];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCurrentGuideLine(newChecked)
  };


  return (
    <Stack spacing={2} direction="row" sx={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'transparent' }}>
      <Stack spacing={2} direction="column" sx={{ backgroundColor: 'transparent' }}>
        <Button variant="contained" onClick={() => handleVisibleChange(!visible)}>{visible ? '隐藏' : '显示'}</Button>
        <Button variant="contained" onClick={() => reloadGuideLine(true)}>重载路径</Button>
      </Stack>
      <Stack spacing={2} direction="column" sx={{ backgroundColor: 'transparent' }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>当前路径：{currentGuideLine?.join(',')}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              选择节点，添加到当前路径中，然后点击重载路径
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', position: 'relative', overflow: "auto", maxHeight: 300, '& ul': { padding: 0 }, }}>
              {observersData?.map((item) => {
                const labelId = `checkbox-list-label-${item.panoIndex}`;
                return (
                  <ListItem
                    key={item.panoIndex}
                    disablePadding
                  >
                    <ListItemButton role={undefined} onClick={handleToggle(item.panoIndex)} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={currentGuideLine.indexOf(item.panoIndex) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={`Available PanoIndex ${item.panoIndex}`} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Stack >
  )
}

export default GuideLinePluginUse
