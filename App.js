import React, { useEffect } from 'react'
import SplashScreen from 'react-native-lottie-splash-screen'
import Routes from './src/Routes'
import { Provider } from 'react-redux';
import {store} from './src/redux/core/store'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return(
  <Provider store={store}>
    <Routes />
  </Provider>
  )
}

export default App
