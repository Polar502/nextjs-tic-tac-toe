const Cuadro = ({ valor, alHacerClick }) => {
  //Estilo del valor del cuadro
  const estilo = valor === 'X' ? 'x' : 'o'

  return (
    <button
      className={`square ${estilo}`}
      onClick={() => alHacerClick()}
    >
      {valor}
    </button>
  )
}

export default Cuadro
