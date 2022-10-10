import MyTicTacToe from './myTicTacToe'
import AlertProvider from '../context/AlertProvider'

const Totito = () => {
  return (
    <div className="flex flex-col bg-neutral-800 items-center justify-center min-h-screen">
      <AlertProvider>
        <MyTicTacToe className="m-5 p-2"></MyTicTacToe>
      </AlertProvider>
    </div>
  )
}

export default Totito
