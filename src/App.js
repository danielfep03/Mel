import React from 'react'
import AppContext from './AppContext'
import useInitialState from './useInitialState'
import './App.css'
import Header from './components/Header'
import Content from './components/Content.jsx'

function App() {
  const initialState = useInitialState()
  return (
    <div className="App">
      <AppContext.Provider value={initialState}>
        <Header />
        <Content />
      </AppContext.Provider>
    </div>
  )
}

export default App
