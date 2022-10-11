import Cuadro from './cuadro'
// import click from '../../public/sounds/click.mp3'
// import error from '../../public/sounds/error.mp3'
// import winner from '../../public/sounds/winner.mp3'
// import { useState } from 'react'

const Tablero = ({ cuadros, animacion, audio, posiciones, alHacerClick }) => {
  //Si animacion es True entonces sacudir de lo contario no sacudir
  const animar = animacion === true ? 'sacudirSi' : 'sacudirNo'

  // const [audioClick] = useState(
  //   typeof Audio !== 'undefined' && new Audio(click)
  // )
  // const [audioError] = useState(
  //   typeof Audio !== 'undefined' && new Audio(error)
  // )
  // const [audioWinner] = useState(
  //   typeof Audio !== 'undefined' && new Audio(winner)
  // )

  // console.log(audio)

  // function Playit() {
  //   if (audio === 'click') {
  //     audioClick.play()
  //   } else if (audio === 'error') {
  //     audioError.play()
  //   } else if (audio === 'winner') {
  //     audioWinner.play()
  //   }
  // }
  return (
    <>
      {/* <>{Playit()}</> */}
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
              alHacerClick={() => {
                alHacerClick(indexItem)
              }}
            />
          )
        })}
      </div>
    </>
  )
}

export default Tablero
