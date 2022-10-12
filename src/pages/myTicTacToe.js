/**
 * @const Tablero, Renderiza el componente tablero (‘Con 9 componentes Cuadro’) del juego Tic Tac Toe.
 *
 * @version       4.2
 *
 * @author        Mario Arita <marioarita502@gmail.com>
 *
 * History
 * v4.3 - Se agregaron las alertas y sonidos para los empates
 * v4.2 - Se creo el audioContext para mejorar la interacion de los usuario con audios de acciones.
 * v4.1 - Se agregaron y mejoraron animaciones, se agregaron svg icons y mejoras de diseño visual
 * v4.0 - Se agregaron alertas con useContext, se agrego el componente puntaje, se mejoraron la funciones de animacion, se mejoraron estilos del tablero y se agrego el estilo de fuente de manera local.
 * v3.0 – Se agrego la función calculaGanador, se agrego el button reset y se agregaron nuevas animaciones en el tailwind.config.js.
 * v2.0 – Se se mejoró el diseño y la distribuicion del tablero y se agrego la función pintaFigura.
 * v1.0 – Se implementaron los componentes del tablero 'Cuadro' inicialmente con div's.
 */

import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/alertProvider'
import { AudioContext } from '../context/audioProvider'
import Tablero from '../components/tablero'
import Resetear from '../components/resetear'
import Puntajes from '../components/puntajes'

const MyTicTacToe = () => {
  const [cuadros, setCuadros] = useState(Array(9).fill(''))
  const [turno, setTurno] = useState('X')
  const [animacion, setAnimacion] = useState(false)
  const [puntaje, setPuntaje] = useState({ puntajeX: 0, puntajeO: 0 })
  const [posiciones, setPosiciones] = useState([]) //Costante para almacenar la lista de posiciones ganadoras
  const [gameOver, setGameOver] = useState(false) //Constante para definir si el juego aun continua o ha finalizado

  // context area
  const alert = useContext(AlertContext)
  const audio = useContext(AudioContext)

  //1. Funcion al hacer click en cualquier cuadro del tablero
  const pintaFigura = (indexItem) => {
    const misCuadritos = cuadros.slice()
    misCuadritos.splice(indexItem, 1, turno)

    //Si el cuadro esta vacio y el juego aun no a terminado; permitir llenar
    if (gameOver === false) {
      if (cuadros[indexItem] === '') {
        audio.play('click')

        setCuadros(misCuadritos)
        if (turno === 'X') {
          setTurno('O')
        } else {
          setTurno('X')
        }
        setAnimacion(false)

        const nuevoGanador = calculaGanador(misCuadritos)

        if (nuevoGanador) {
          if (nuevoGanador === 'O') {
            let { puntajeO } = puntaje
            puntajeO += 1
            setPuntaje({ ...puntaje, puntajeO })
          } else {
            let { puntajeX } = puntaje
            puntajeX += 1
            setPuntaje({ ...puntaje, puntajeX })
          }
        }
      } //De lo contario sacudir
      else {
        alert.show(
          'ATENCIÓN',
          `El cuadro ${indexItem + 1} ya tiene un valor, intente con otro.`
        )
        audio.play('error')

        setAnimacion(true)
        setTimeout(() => setAnimacion(false), 1000)
      }
    } else {
      alert.show('ATENCIÓN', 'El juego ya ha terminado, reinicia el juego.')
      audio.play('error')

      setAnimacion(true)
      setTimeout(() => setAnimacion(false), 1000)
    }
  }

  //2. Calcular si dentro del tablero hay un ganador
  const calculaGanador = (myTablero) => {
    const jugadasGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (
      let indiceJugada = 0;
      indiceJugada < jugadasGanadoras.length;
      indiceJugada++
    ) {
      const [a, b, c] = jugadasGanadoras[indiceJugada]
      if (
        myTablero[a] &&
        myTablero[a] === myTablero[b] &&
        myTablero[a] === myTablero[c]
      ) {
        //El juego a terminado ('no mas entradas')
        setGameOver(true)
        setPosiciones(jugadasGanadoras[indiceJugada])
        // setTimeout(() => restablecerTablero(), 4000)
        alert.show('HAY UN GANADOR', `El ganador a sido → ${myTablero[a]}`)
        audio.play('winner')

        return myTablero[a]
      } else if (
        !myTablero.includes('') &&
        gameOver === false &&
        posiciones !== []
      ) {
        setGameOver(true)
        alert.show(
          'NO HAY GANADOR',
          'Esta vez no hay un ganador, inicia una nueva partida.'
        )
        audio.play('draw')
      }
    }
  }

  // // 3. Restablecer tablero con valor vacios y El gameOver en false
  const restablecerTablero = () => {
    setGameOver(false) // Un nuevo juego comienza
    setAnimacion(false)
    setPosiciones([])
    setCuadros(Array(9).fill('')) // Sin ningún valor en los componentes ‘Cuadro’
    // audio.play('')
  }

  return (
    <div className="flex flex-col bg-neutral-800 items-center justify-center min-h-screen">
      <div className="grow-1">
        <Puntajes puntaje={puntaje} turno={turno} />
        <Tablero
          cuadros={cuadros}
          animacion={animacion}
          audio={audio}
          alHacerClick={pintaFigura}
          posiciones={posiciones}
        />
        <Resetear restablecerTablero={restablecerTablero} />
      </div>
    </div>
  )
}

export default MyTicTacToe
