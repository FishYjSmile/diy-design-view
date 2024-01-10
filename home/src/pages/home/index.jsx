import CustomInput from "@/components/classComponents/customInput"
import React, { useState } from 'react'
import CanvasRnd from '@/components/classComponents/canvas'
import { v4 as uuidv4 } from 'uuid';
import { ThemeContext, TextContext } from '@/utils/context/index'

import { EventEmitter } from 'events'
React.$createUUID = uuidv4
React.$bus = new EventEmitter()


// import dynamic from 'next/dynamic'

// const CanvasRnd = dynamic(import("@/components/classComponents/canvas/index"), {
//   ssr: false,
//   loading: () => <p>Loading ...</p>
// })

export default function Home() {
  const [value, setValue] = useState('')

  function changeValue(ev) {
    setValue((() => ev))
  }

  return (
    <ThemeContext.Provider value={{color: 'red'}}>
      <TextContext.Provider value={{text: '1122222'}}>
        <div>
          Home
          <CustomInput
          size="small"
          max="32"
          value={ value }
          change={ changeValue }
          ></CustomInput>
          <div id='canvas'
          style={{
            width: '500px',
            height: '500px',
            background: 'red'
          }}
          >
            <CanvasRnd ></CanvasRnd>
          </div>
        </div>
      </TextContext.Provider>
    </ThemeContext.Provider>
  )
}
