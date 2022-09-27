import '../styles/globals.css' //Need to include to use @apply
import Tablero from './components/tablero'

function MyTicTacToe() {
  return (
    <div className="flex flex-col bg-neutral-900 items-center justify-center h-screen">
      {/* Llamado del tablero */}
      <Tablero />
    </div>
  )
}

export default MyTicTacToe
