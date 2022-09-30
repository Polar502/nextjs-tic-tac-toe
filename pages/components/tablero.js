/**
 * @const Tablero, Renderiza el componente tablero (‘Con 9 componentes Cuadro’) del juego Tic Tac Toe.
 *
 * @version       3.0
 *
 * @author        Mario Arita <marioarita502@gmail.com>
 *
 * History
 * v3.0 – Se agrego la función calculaGanador, se agrego el button reset y se agregaron nuevas animaciones en el tailwind.config.js.
 * v2.0 – Se se mejoró el diseño y la distribuicion del tablero y se agrego la función pintaFigura.
 * v1.0 – Se implementaron los componentes del tablero 'Cuadro' inicialmente con div's.
 * ----
 */

import { useState } from 'react'
import Cuadro from './cuadro'

/**
 * Renderiza el tablero con los componentes 'cuadro'
 * @param  {null}
 * @return  {div}
 */

const Tablero = () => {
  const [cuadros, setCuadros] = useState(Array(9).fill(''))
  const [turno, setTurno] = useState('X')
  const [animacion, setAnimacion] = useState(false)

  const posiciones = [] //Costante para almacenar la lista de posiciones ganadoras
  const ganador = [] //Costante para almacenar el ganador (aun no utilizado)
  const gameOver = false //Constante para definir si el juego aun continua o ha finalizado

  const pintaFigura = (indexItem) => {
    const misCuadritos = cuadros.slice()
    misCuadritos.splice(indexItem, 1, turno)

    //Si el cuadro esta vacio y el juego aun no a terminado; permitir llenar
    if (cuadros[indexItem] === '' && gameOver === false) {
      setCuadros(misCuadritos)
      if (turno === 'X') {
        setTurno('O')
      } else {
        setTurno('X')
      }
      setAnimacion(false)
    } //De lo contario sacudir
    else {
      setAnimacion(!animacion) // Invertir animación ('Detalles que arreglar => no renderiza con el mismo valor de animación')
    }
  }

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
        gameOver = true
        //Obtener el Ganador y las posiciones que ganaron para luego almacenarlas con la función resultadoFinal
        resultadoFinal(myTablero[a], jugadasGanadoras[indiceJugada])
        return myTablero[a]
      }
    }
    return '' // Si no se encuntra un ganador, entonces retornar un vacio
  }

  const resultadoFinal = (ganadorR, posicionR) => {
    // Si el resultado final es diferente a vacio, entonces almacenar el ganador y las posiciones ganadoras
    if (resultadoFinal !== null) {
      ganador = ganadorR //Se almacena el ganador ('X' or 'O') -- Aun no es utilizada
      posiciones = posicionR //Se almacenan las posiciones ganadoras
    }
  }

  // Restablecer tablero con valor vacios y El gameOver en false
  const restablecerTablero = () => {
    gameOver = false // Un nuevo juego comienza
    setCuadros(Array(9).fill('')) // Sin ningún valor en los componentes ‘Cuadro’
  }

  //Si animacion es True entonces sacudir de lo contario no sacudir
  const animar = animacion === true ? 'sacudirSi' : 'sacudirNo'

  return (
    <div>
      <div className="h1-text">
        {'El Ganador es: ' + calculaGanador(cuadros)}
      </div>
      {/* Animacion sacudir si esta lleno */}
      <div className={`board ${animar}`}>
        {/* Llenado del tablero */}
        {cuadros.map((item, indexItem) => {
          return (
            <Cuadro
              // Llave identificador del cuadro
              key={indexItem}
              // valor del item del cuadro
              valor={item}
              // Cuadros con las posiciones Ganadoras (valor boolean)
              ganadores={posiciones.includes(indexItem)}
              //accion al hacer click en el cuadro
              alHacerClick={() => pintaFigura(indexItem)}
            />
          )
        })}
      </div>
      <button className="restart" onClick={() => restablecerTablero()}>
        Restart game
      </button>
    </div>
  )
}

export default Tablero
