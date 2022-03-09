import React, { useState } from 'react'
// import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

function Stationery () {
  const [keyboard, setKeyboard] = useState({ x: 300, y: 500 })
  const bindKeyboard = useDrag((params) => {
    params.event.preventDefault()
    setKeyboard({
      x: params.offset[0],
      y: params.offset[1]
    })
  })

  const [mouse, setMouse] = useState({ x: 315, y: 535 })
  const bindMouse = useDrag((params) => {
    params.event.preventDefault()
    setMouse({
      x: params.offset[0],
      y: params.offset[1]
    })
  })

  const [pencils, setPencils] = useState({ x: 880, y: 425 })
  const bindPencils = useDrag((params) => {
    params.event.preventDefault()
    setPencils({
      x: params.offset[0],
      y: params.offset[1]
    })
  })

  const [plant1, setPlant1] = useState({ x: -250, y: 445 })
  const bindPlant1 = useDrag((params) => {
    params.event.preventDefault()
    setPlant1({
      x: params.offset[0],
      y: params.offset[1]
    })
  })

  const [speaker1, setSpeaker1] = useState({ x: 800, y: 425 })
  const bindSpeaker1 = useDrag((params) => {
    params.event.preventDefault()
    setSpeaker1({
      x: params.offset[0],
      y: params.offset[1]
    })
  })

  const [speaker2, setSpeaker2] = useState({ x: -300, y: 425 })
  const bindSpeaker2 = useDrag((params) => {
    params.event.preventDefault()
    setSpeaker2({
      x: params.offset[0],
      y: params.offset[1]
    })
  })

  const [light, setLight] = useState({ x: 50, y: 315 })
  const bindLight = useDrag((params) => {
    params.event.preventDefault()
    setLight({
      x: params.offset[0],
      y: params.offset[1]
    })
  })

  const [stickyNote, setStickyNote] = useState({ x: 50, y: 70 })
  const bindStickyNote = useDrag((params) => {
    params.event.preventDefault()
    setStickyNote({
      x: params.offset[0],
      y: params.offset[1]
    })
  })

  return (
    <div className='stationery'>
      <div {...bindKeyboard()}
        style ={{
          position: 'relative',
          width: '15rem',
          height: 'auto',
          top: keyboard.y,
          left: keyboard.x,
          zIndex: 2
        }}>
        <div >
          <img src='/images/keyboard.svg' />
        </div>
      </div>

      <div {...bindMouse()}
        style ={{
          position: 'relative',
          width: '2rem',
          height: 'auto',
          top: mouse.y,
          left: mouse.x,
          zIndex: 2
        }}>
        <div >
          <img src='/images/mouse.svg' />
        </div>
      </div>

      <div {...bindPencils()}
        style ={{
          position: 'relative',
          width: '4rem',
          height: 'auto',
          top: pencils.y,
          left: pencils.x,
          zIndex: 3
        }}>
        <div >
          <img src='/images/pencils.svg' />
        </div>
      </div>

      <div {...bindPlant1()}
        style ={{
          position: 'relative',
          width: '4rem',
          height: 'auto',
          top: plant1.y,
          left: plant1.x,
          zIndex: 3
        }}>
        <div >
          <img src='/images/plant1.svg' />
        </div>
      </div>

      <div {...bindSpeaker1()}
        style ={{
          position: 'relative',
          width: '4rem',
          height: 'auto',
          top: speaker1.y,
          left: speaker1.x,
          zIndex: 2
        }}>
        <div >
          <img src='/images/speaker.svg' />
        </div>
      </div>

      <div {...bindSpeaker2()}
        style ={{
          position: 'relative',
          width: '4rem',
          height: 'auto',
          top: speaker2.y,
          left: speaker2.x,
          zIndex: 2
        }}>
        <div >
          <img src='/images/speaker.svg' />
        </div>
      </div>

      <div {...bindLight()}
        style ={{
          position: 'relative',
          width: '10rem',
          height: 'auto',
          top: light.y,
          left: light.x,
          zIndex: 2
        }}>
        <div >
          <img src='/images/light.svg' />
        </div>
      </div>

      <div {...bindStickyNote()}
        style ={{
          position: 'relative',
          width: '5rem',
          height: 'auto',
          top: stickyNote.y,
          left: stickyNote.x,
          zIndex: 2
        }}>
        <div >
          <img src='/images/stickyNote.svg' />
        </div>
      </div>

    </div>
  )
}

export default Stationery
