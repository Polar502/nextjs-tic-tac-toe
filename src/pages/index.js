import MyTicTacToe from './myTicTacToe'
import AlertProvider from '../context/alertProvider'
import AudioProvider from '../context/audioProvider'
import React, { useState, useEffect } from 'react'
import HashLoader from 'react-spinners/HashLoader'
import Navbar from '../components/nabvar'

function Totito() {
  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)

  // useEffect para buscar si el tema por defecto del sistema es dark o light
  useEffect(() => {
    const themeInitial = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    console.log('Esta activo el dark mode? ' + themeInitial)

    setDarkMode(themeInitial)
  }, [])

  // useEffect para el tiempo del loading inicial
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex flex-col bg-[#E3F1FA] dark:bg-neutral-800 min-h-screen">
        <AlertProvider>
          <AudioProvider>
            {loading ? (
              <div className="flex items-center justify-center bg-[#E3F1FA] dark:bg-neutral-800 min-h-screen">
                <HashLoader color="#0891B2" size={100} loading={loading} />
              </div>
            ) : (
              <div>
                <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
                <MyTicTacToe />
              </div>
            )}
          </AudioProvider>
        </AlertProvider>
      </div>
    </div>
  )
}

export default Totito
