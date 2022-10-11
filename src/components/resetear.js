import React from 'react'

const Resetear = ({ restablecerTablero }) => {
  return (
    <button className="restart" onClick={() => restablecerTablero()}>
      Reinicia el juego
    </button>
  )
}

export default Resetear
