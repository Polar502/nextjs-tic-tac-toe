const Cuadro = ({ valor, alHacerClick, ganadores }) => {
  //Estilo del cuadro (Cuadrado Ganador o Cuadrado por defecto)
  const estiloCuadro = ganadores === true ? 'squareWinner' : 'square'
  //Estilo del valor del cuadrado ('Jugador X' o 'Jugador O')
  const estiloValor = valor === 'X' ? 'x' : 'o'
  //Estilo del valor ganador (Animacion respectiva al valor; girar => 'X' o dar la vuelta => 'O')
  const estiloGanador = ganadores === true ? 'ganadores' : ''

  return (
    // Boton cuadrado con el estilo del cuadrado (cuadrado o cuadrado ganador)
    <button className={`${estiloCuadro}`} onClick={() => alHacerClick()}>
      {/* Span del valor, contatenado el estilo del valor y del ganador  */}
      <span className={`${estiloValor} ${estiloGanador}`}>{valor}</span>
    </button>
  )
}

export default Cuadro
