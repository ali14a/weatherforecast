import React, { useEffect } from 'react'
import SplashScreen from 'react-native-lottie-splash-screen'
import Routes from './src/Routes'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return <Routes />
}

export default App
