/**
 * Renderiza el tablero con los componentes 'cuadro'
 * @param valor {string}
 * @param alHacerClick {function}
 * @param ganadores {boolean}
 * @return Cuadro {div}
 */

const Cuadro = ({ valor, alHacerClick, ganadores }) => {
  //Estilo del cuadro (Cuadrado Ganador o Cuadrado por defecto)
  const estiloCuadro = ganadores === true ? 'squareWinner' : 'square'
  //Estilo del valor del cuadrado ('Jugador X' o 'Jugador O')
  const estiloValor = valor === 'X' ? 'x' : 'o'
  //Estilo del valor ganador (Animacion respectiva al valor; girar => 'X' o dar la vuelta => 'O')
  const estiloGanador = ganadores === true ? 'ganadores' : ''

  return (
    // Contenedor cuadrado con el estilo del cuadrado (cuadrado o cuadrado ganador)
    <div className={`${estiloCuadro}`} onClick={() => alHacerClick()}>
      {/* Contenedor del valor, contatenado el estilo del valo, con el del ganador  */}
      <div className={`${estiloValor} ${estiloGanador}`}>{valor}</div>
    </div>
  )
}

export default Cuadro
