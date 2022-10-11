import Cuadro from './cuadro'

const Tablero = ({ cuadros, animacion, audio, posiciones, alHacerClick }) => {
  //Si animacion es True entonces sacudir de lo contario no sacudir
  const animar = animacion === true ? 'sacudirSi' : 'sacudirNo'

  return (
    <>
      <div className={`board ${animar}`}>
        {/* Llenado del tablero */}
        {cuadros.map((item, indexItem) => {
          return (
            <Cuadro
              // Llave identificadgit push -u origin masteror del cuadro
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
