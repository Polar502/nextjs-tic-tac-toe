import React, { useState, createContext } from 'react'
import click from '../../public/sounds/click.mp3'
import error from '../../public/sounds/error.mp3'
import winner from '../../public/sounds/winner.mp3'

export const AudioContext = createContext()

const AudioProvider = ({ children }) => {
  const [audioClick] = useState(
    typeof Audio !== 'undefined' && new Audio(click)
  )
  const [audioError] = useState(
    typeof Audio !== 'undefined' && new Audio(error)
  )
  const [audioWinner] = useState(
    typeof Audio !== 'undefined' && new Audio(winner)
  )
  const Playit = {
    play: (audio) => {
      if (audio === 'click') {
        audioClick.play()
      } else if (audio === 'error') {
        audioError.play()
      } else if (audio === 'winner') {
        audioWinner.play()
      }
    },
  }

  return (
    <AudioContext.Provider value={Playit}>{children}</AudioContext.Provider>
  )
}

export default AudioProvider