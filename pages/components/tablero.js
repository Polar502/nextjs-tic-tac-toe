import { useState } from 'react'
import Cuadro from './cuadro'

const Tablero = () => {
  const [cuadros, setCuadros] = useState(Array(9).fill(''))
  const [turno, setTurno] = useState('X')
  const [animacion, setAnimacion] = useState(false)

  const posiciones = []
  const ganador = []
  const gameOver = false

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
      setAnimacion(!animacion)
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
        //El juego a terminado (no mas entradas)
        gameOver = true
        //Obtener el Ganador y las posiciones que ganaron
        resultadoFinal(myTablero[a], jugadasGanadoras[indiceJugada])
        return myTablero[a]
      }
    }
    return ''
  }

  // Si la resltado final es diferente a vacio entonces llenar las posicioens ganadoras y el ganador
  const resultadoFinal = (ganadorR, posicionR) => {
    if (resultadoFinal !== null) {
      ganador = ganadorR
      console.log('Este es el Ganador ' + ganador)
      posiciones = posicionR
      console.log('Estas son las Posiciones ' + posiciones)
    }
  }

  // Restablecer tablero con valor vacios y El gameOver en false
  const restablecerTablero = () => {
    gameOver = false
    setCuadros(Array(9).fill(''))
  }

  //Si animacion es True entonces sacudir de lo contario no sacudir
  const animar = animacion === true ? 'sacudirSi' : 'sacudirNo'
  
  return (
    <div>
      <div className="h1-text">
        {'El Ganador es: ' + ganador + calculaGanador(cuadros)}
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
              // Cuadros con las posiciones Ganadoras
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
