import { Paper, Button, Modal, Box, TextField } from '@mui/material'
import { unsafe__useFiveInstance, useFiveState } from '@realsee/five/react'
import { useState } from 'react'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  bgcolor: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export function CustomWork(props?: { onChangeWork?: () => any }) {
  const five = unsafe__useFiveInstance()
  const [open, setOpen] = useState(false)
  const [text, setText] = useState<string>(
    five.work?.raw.works[0] ? JSON.stringify(JSON.parse(five.work?.raw.works[0] as string), null, 2) : '',
  )
  const handleOpen = () => {
    setOpen(true)
    setText(five.work?.raw.works[0] ? JSON.stringify(JSON.parse(five.work?.raw.works[0] as string), null, 2) : '')
  }
  const handleClose = () => setOpen(false)

  return (
    <>
      <Paper sx={{ position: 'fixed', bottom: 0, right: 0 }}>
        <Button variant="contained" onClick={handleOpen}>
          自定义work
        </Button>
      </Paper>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <TextField
            id="filled-multiline-static"
            label="Work"
            sx={{ width: '100%', height: '100%' }}
            multiline
            onChange={(e) => setText(e.target.value)}
            value={text}
            rows={20}
            variant="filled"
          />
          <Button sx={{ marginTop: '30px', marginRight: '10px' }} variant="outlined" onClick={handleClose}>
            取消
          </Button>
          <Button
            sx={{ marginTop: '30px' }}
            variant="contained"
            onClick={() => {
              if (text) {
                if (five.currentMode !== 'Panorama') {
                  five.changeMode('Panorama')
                }
                five.ready().then(() => {
                  if (text)
                    five.load(text).then(() => {
                      if (props?.onChangeWork) props.onChangeWork()
                      handleClose()
                    })
                })
              }
            }}
          >
            应用
          </Button>
        </Box>
      </Modal>
    </>
  )
}
