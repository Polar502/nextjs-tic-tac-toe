import React, { useState, createContext } from 'react'
import click from '../../public/sounds/click.mp3'
import error from '../../public/sounds/error.mp3'
import winner from '../../public/sounds/winner.mp3'
import draw from '../../public/sounds/draw.mp3'

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
  const [audioDraw] = useState(typeof Audio !== 'undefined' && new Audio(draw))

  const Playit = {
    play: (audio) => {
      if (audio === 'click') {
        audioClick.play() // Inicia a reproducirse
        audioClick.volume = 0.6 // audio al 60% de volume
      } else if (audio === 'error') {
        audioError.play()
        audioError.volume = 0.7
      } else if (audio === 'winner') {
        audioWinner.play()
        audioWinner.volume = 0.7
      } else if (audio === 'draw') {
        audioDraw.play()
        audioDraw.volume = 0.7
      }
    },
  }

  return (
    <AudioContext.Provider value={Playit}>{children}</AudioContext.Provider>
  )
}

export default AudioProvider
