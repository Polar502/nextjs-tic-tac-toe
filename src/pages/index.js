import MyTicTacToe from './myTicTacToe'
import AlertProvider from '../context/alertProvider'
import AudioProvider from '../context/audioProvider'

const Totito = () => {
  return (
    <div className="flex flex-col bg-neutral-800 items-center justify-center min-h-screen">
      <AlertProvider>
        <AudioProvider>
          <MyTicTacToe className="m-5 p-2"></MyTicTacToe>
        </AudioProvider>
      </AlertProvider>
    </div>
  )
}

export default Totito
