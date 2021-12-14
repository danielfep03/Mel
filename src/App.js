import React from 'react'
import AppContext from './AppContext'
import useInitialState from './useInitialState'
import './App.css'
import Header from './components/Header'
import Content from './components/Content.jsx'
import TagCafecito from './components/TagCafecito.jsx'

function App() {
  const initialState = useInitialState()
  return (
    <div className="App">
      <AppContext.Provider value={initialState}>
        <Header />
        <Content />
        <TagCafecito />
      </AppContext.Provider>
    </div>
  )
}

export default App
