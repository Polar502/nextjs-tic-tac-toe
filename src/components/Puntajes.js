import React from 'react'

/**
 * Puntajes es una función que toma dos props, puntaje y turno, y devuelve un div con dos divs adentro
 * de ella, cada una con los datos de jugador y su puntaje.
 *
 * El primer div también tiene una clase de activar si el turno prop es igual a 'X', y el segundo div de igual
 * manera tiene una clase de activador si el turno prop es igual a 'O'.
 *
 * * @returns A React component.
 */
const Puntajes = ({ puntaje, turno }) => {
  const { puntajeX, puntajeO } = puntaje
  const activarX = turno === 'X' ? 'activar' : ''
  const activarO = turno === 'O' ? 'activar' : ''
  return (
    <div className="div-score">
      <div className={`div-player ${activarX}`}>
        <span className="">Player X</span>
        <span className=""> {puntajeX} </span>
      </div>
      <div className={`div-player ${activarO}`}>
        <span className="">Player O</span>
        <span className=""> {puntajeO} </span>
      </div>
    </div>
  )
}

export default Puntajes
