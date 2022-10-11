import URL from '../../public/sounds/error.mp3'
import React, { useState, useEffect } from 'react'

const Sound = () => {
  // const [audio, setAudio] = useState(typeof Audio !== "undefined" && new Audio(URL));
  // const [audio, SetAudio] = useState('')

  // const start = () => {
  //   audio.play()
  // }

  const [audio, SetAudio] = useState('')

  useEffect(() => {
    SetAudio(new Audio(URL))
  }, [])

  return (
    <div>
      <button onClick={Playit}>Play</button>
    </div>
  )
}

export default Sound
