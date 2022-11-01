import * as React from 'react'
import { useState, useEffect } from 'react'
import { unsafe__useFiveInstance, } from '@realsee/five/react'
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
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

export interface State extends SnackbarOrigin {
  open: boolean;
}

const CruisePluginUse = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [currentSpeed, setCurrentSpeed] = useState<number>(1);
  const [currentGuideLine, setCurrentGuideLine] = useState<number[]>([0, 1, 2, 3, 4]);
  // 可选的路径
  const [observersData, setCurrentObserversData] = useState<WorkObserver[]>([]);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [currentState, setCurrentState] = useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = currentState;

  const five = unsafe__useFiveInstance();
  const cruisePlugin = five.plugins.cruisePlugin;

  useEffect(() => {
    initData();
  }, [])

  const initData = async () => {
    await cruisePlugin.load({
      panoIndexList: currentGuideLine,
      moveToFirstPanoEffect: 'montage',
      stay: 1000,
    })

    setCurrentObserversData(five.work.observers);

    if (visible) {
      handleVisibleChange(true)
    } else {
      handleVisibleChange(false)
    }
  }

  // 显示/隐藏路径
  const handleVisibleChange = async (value: boolean) => {
    if (value) {
      cruisePlugin.show()
    } else {
      cruisePlugin.hide()
    }

    setVisible(value)
  }

  // 重载插件
  const reloadCruisePlugin = async () => {
    await cruisePlugin.load({
      panoIndexList: currentGuideLine,
      moveToFirstPanoEffect: 'montage',
      stay: 1000,
    })

    setCurrentObserversData(five.work.observers);

    if (visible) {
      handleVisibleChange(true)
    } else {
      handleVisibleChange(false)
    }

    handleClick("路径重载成功，请点击“开始漫游”进行预览")
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

  // 设置开始的节点
  const handleStartIndexChange = (event: SelectChangeEvent) => {
    const currentIndex = Number(event.target.value);
    setStartIndex(currentIndex);
    cruisePlugin.playFrom({ index: currentIndex })
  };

  // 设置漫游速度
  const handleSpeedChange = (event: SelectChangeEvent) => {
    const currentSpeed = Number(event.target.value);
    setCurrentSpeed(currentSpeed);
    cruisePlugin.setState({ speed: currentSpeed });
    handleClick("漫游速度设置成功，请点击“开始漫游”进行预览")
  };


  // 显示Toast提示信息
  const handleClick = (message: string) => {
    setCurrentState({ ...currentState, open: true, });
    setToastMessage(message);
  };

  // 关闭Toast提示信息
  const handleClose = () => {
    setCurrentState({ ...currentState, open: false });
  };

  // 渲染开始节点选择器
  const renderStartIndexSelect = () => {
    return (
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={startIndex.toString() || '0'}
        onChange={handleStartIndexChange}
        autoWidth
        sx={{ color: "#fff", backgroundColor: "#1976d2" }}
      >
        {currentGuideLine.length > 0 ? currentGuideLine?.map((item, index) => {
          return (
            <MenuItem value={index || 0} key={item}>
              <em>从点位{item}开始</em>
            </MenuItem>
          )
        }) : null}
      </Select>
    );
  }

  // 渲染漫游速度节点选择器
  const renderSpeedSelect = () => {
    return (
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={currentSpeed.toString() || '1'}
        onChange={handleSpeedChange}
        autoWidth
        sx={{ color: "#fff", backgroundColor: "#1976d2" }}
      >
        <MenuItem value={0.3} >
          <em>设置漫游速度: 0.3</em>
        </MenuItem>
        <MenuItem value={0.5} >
          <em>设置漫游速度: 0.5</em>
        </MenuItem>
        <MenuItem value={1} >
          <em>设置漫游速度: 1</em>
        </MenuItem>
        <MenuItem value={2} >
          <em>设置漫游速度: 2</em>
        </MenuItem>
      </Select>
    );
  }

  // 渲染节点路径选择器
  const renderRouterIndexSelectAccordion = () => {
    return (
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
            选择节点，添加到当前路径中，然后点击“重载路径”，路径加载完成之后点击“开始漫游”
          </Typography>
          <List sx={{
            width: '100%',
            maxWidth: 300,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
          }}>
            {observersData.length > 0 ? observersData.map((item) => {
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
            }) : null}
          </List>
        </AccordionDetails>
      </Accordion>
    )
  }

  return (
    <Stack spacing={2} direction="row" sx={{ position: 'fixed', top: '10px', left: '10px', width: '100%', backgroundColor: 'transparent', overflow: 'scroll' }}>
      <Box component="span">
        <Stack spacing={1} direction="row" sx={{ backgroundColor: 'transparent' }}>
          <Button variant="contained" onClick={() => handleVisibleChange(!visible)}>{visible ? '隐藏路径' : '显示路径'}</Button>
          <Button variant="contained" onClick={() => reloadCruisePlugin()}>重载路径</Button>
          <Button variant="contained" onClick={() => cruisePlugin.play()}>开始漫游</Button>
          <Button variant="contained" onClick={() => cruisePlugin.pause()}>暂停漫游</Button>
          <Button variant="contained" onClick={() => cruisePlugin.playFromStart()}>从头开始</Button>
          <Box>{renderStartIndexSelect()}</Box>
          <Box>{renderSpeedSelect()}</Box>
        </Stack>
      </Box >
      <Stack spacing={0} direction="column" sx={{ backgroundColor: 'transparent', maxWidth: 360, }}>
        {renderRouterIndexSelectAccordion()}
      </Stack>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={2000}
        open={open}
        onClose={handleClose}
        message={toastMessage}
        key={vertical + horizontal}
      />
    </Stack >
  )
}

export default CruisePluginUse
