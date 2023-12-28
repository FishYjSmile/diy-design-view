import CustomInput from "@/components/classComponents/customInput"
import { useState } from 'react'
import CanvasRnd from '@/components/classComponents/canvas'
import { v4 as uuidv4 } from 'uuid';
import React from 'react'

// import dynamic from 'next/dynamic'

// const CanvasRnd = dynamic(import("@/components/classComponents/canvas/index"), {
//   ssr: false,
//   loading: () => <p>Loading ...</p>
// })

export default function Home() {
  React.$createUUID = uuidv4

  const [value, setValue] = useState('')

  function changeValue(ev) {
    setValue((() => ev))
  }

  return (
    <div>
      Home
      <CustomInput
      size="small"
      max="32"
      value={ value }
      change={ changeValue }
      ></CustomInput>

      <CanvasRnd></CanvasRnd>
    </div>
  )
}
