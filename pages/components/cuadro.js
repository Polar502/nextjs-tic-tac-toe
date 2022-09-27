const Cuadro = ({ valor, animacion, alHacerClick }) => {
  //Estilo del valor del cuadro
  const estilo = valor === 'X' ? 'x' : 'o'

  //Si animacion es True entonces sacudir de lo contario no sacudir
  const animar = animacion === true ? 'sacudirSi' : 'sacudirNo'
  return (
    <button
      className={`square ${estilo} ${animar}`}
      onClick={() => alHacerClick()}
    >
      {valor}
    </button>
  )
}

export default Cuadro
