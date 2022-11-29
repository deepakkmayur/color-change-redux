import React from 'react'
import Home from './components/Home'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers/Reducer'


const App = () => {
  const store=createStore(reducer)
  return (

    <Provider store={store}>
      {<Home/>}
      </Provider>
  )
}

export default App