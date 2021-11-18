import React, {useContext} from 'react'
import AppContext from '../AppContext.js'
import {v4 as uuid} from 'uuid'

import Thread from './Thread.jsx'
import '../styles/Threads.css'

function Threads() {
  const {state} = useContext(AppContext)
  return (
    <div className="Threads">
      {state.map(item => (<Thread content={item} key={uuid()}/>))}
    </div>
  )
}

export default Threads
