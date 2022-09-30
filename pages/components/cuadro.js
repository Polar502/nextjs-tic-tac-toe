const Cuadro = ({ valor, alHacerClick, ganadores }) => {
  //Estilo del cuadro
  const estiloCuadro = ganadores === true ? 'squareWinner' : 'square'
  //Estilo del valor del cuadro
  const estiloValor = valor === 'X' ? 'x' : 'o'
  //Estilo del valor ganador
  const estiloGanador = ganadores === true ? 'ganadores' : ''

  return (
    // contender cuadrado con el estilo del cuadrado
    <div className={`${estiloCuadro}`} onClick={() => alHacerClick()}>
      {/* // contender del valor con el estilo del valor contatenado con el estilo del ganador  */}
      <div className={`${estiloValor} ${estiloGanador}`}>{valor}</div>
    </div>
  )
}

export default Cuadro
