import React, { useContext }from 'react'
import AppContext from '../AppContext'
import Categories from './Categories.jsx'
import Threads from './Threads.jsx'

import '../styles/Content.css'

function Content() {
  const {state, categorySelector} = useContext(AppContext)

  return (
    <div className="Content">
      <h1>Universo Tech</h1>
      <h2>Artículos, herramientas y recopilación de hilos de Twitter sobre tecnología.</h2>
      <div className="created__by">
        <span>Creado por</span>
        <a className="button" href="https://twitter.com/MelVonPato" target="_blank" rel="noopener noreferrer">
          <span>@melvonpato</span>
        </a>
      </div>
      <div className="wrapper-categories">
        <Categories filter={categorySelector}/>
      </div>
      <Threads currentCategory={state}/>
    </div>
  )
}

export default Content
