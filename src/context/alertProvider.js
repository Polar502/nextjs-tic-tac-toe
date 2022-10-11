import { createContext, useState } from 'react'
import Alert from '../components/alert'

export const AlertContext = createContext()

const AlertProvider = ({ children }) => {
  const [mostrarAlerta, setMostrarAlerta] = useState(false)
  const [activo, setActivo] = useState(false)
  const [titulo, setTitulo] = useState('Alerta')
  const [mensaje, setMensaje] = useState('')

  const AlertWrapper = {
    show: (titulo = 'Alerta', mensaje) => {
      if (activo === false) {
        setTitulo(titulo)
        setMensaje(mensaje)
        setMostrarAlerta(true)
        setActivo(true)
        setTimeout(() => setActivo(false), 3000)
        setTimeout(() => setMostrarAlerta(false), 3000)
      }
    },
    hide: () => {
      setMostrarAlerta(false)
    },
  }

  return (
    <AlertContext.Provider value={AlertWrapper}>
      {children}
      <Alert
        mostrarAlerta={mostrarAlerta}
        titulo={titulo}
        mensaje={mensaje}
        setMostrarAlerta={setMostrarAlerta}
      />
    </AlertContext.Provider>
  )
}

export default AlertProvider
