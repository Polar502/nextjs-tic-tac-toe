import { useState } from 'react'
import Cuadro from './cuadro'

const Tablero = () => {
  const [cuadros, setCuadros] = useState(Array(9).fill(''))
  const [turno, setTurno] = useState('X')
  const [animacion, setAnimacion] = useState(false)

  const pintaFigura = (indexItem) => {
    const misCuadritos = cuadros.slice()
    misCuadritos.splice(indexItem, 1, turno)

    //Si el cuadro esta vacio permitir llenar
    if (cuadros[indexItem] === '') {
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

  //Si animacion es True entonces sacudir de lo contario no sacudir
  const animar = animacion === true ? 'sacudirSi' : 'sacudirNo'

  return (
    //Animacion sacudir si esta lleno
    <div className={`board ${animar}`}>
      {/* Llenado del tablero */}
      {cuadros.map((item, indexItem) => {
        return (
          <Cuadro
            // Llave identificador del cuadro
            key={indexItem}
            // valor del item del cuadro
            valor={item}
            //accion al hacer click en el cuadro
            alHacerClick={() => pintaFigura(indexItem)}
          />
        )
      })}
    </div>
  )
}

export default Tablero
