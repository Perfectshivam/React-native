import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AppContainer from './Navigator/AppContainer'
import { persistor,store } from './Sources/Redux/Store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
   <AppContainer/>
   </PersistGate>
   </Provider>
  )
}

export default App