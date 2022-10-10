import React from 'react'

const Resetear = ({ restablecerTablero }) => {
  return (
    <button className="restart" onClick={() => restablecerTablero()}>
      Restart game
    </button>
  )
}

export default Resetear
