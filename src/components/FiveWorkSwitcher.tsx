import { Container, FormControlLabel, Paper, Radio, RadioGroup } from '@mui/material'
import { unsafe__useFiveInstance } from '@realsee/five/react'
import { useState } from 'react'

export function FiveWorkSwitcher(props: { workCodes: string[] }) {
  const five = unsafe__useFiveInstance()

  return (
    <div style={{ position: 'fixed', bottom: 0, right: 0 }}>
      <RadioGroup
        row
        defaultValue={props.workCodes[0]}
        onChange={(_: any, workCode: string) => {
          const requestUrl = `/dnalogel/open-works/real/${workCode}/work.json`
          const realWork = fetch(requestUrl)
            .then((response) => response.json())
            .catch((error) => {
              console.warn(`拉取${requestUrl}数据失败，error log: ${error}`)
            })

          const requestUrl2 = `/dnalogel/open-works/virtual/${workCode}/work.json`
          const virtualWork = fetch(requestUrl2)
            .then((response) => response.json())
            .catch((error) => {
              console.warn(`拉取${requestUrl2}数据失败，error log: ${error}`)
            })

          Promise.all([realWork, virtualWork]).then(([real, virtual]) => {
            const work = real ?? virtual
            five.load(work)
          })
        }}
      >
        {props.workCodes.map((workCode) => (
          <FormControlLabel value={workCode} key={workCode} control={<Radio size="small" />} label={workCode} />
        ))}
      </RadioGroup>
    </div>
  )
}
