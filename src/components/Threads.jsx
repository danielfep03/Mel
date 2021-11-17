import React from 'react'
import {v4 as uuid} from 'uuid'

import Thread from './Thread.jsx'
import '../styles/Threads.css'

function Threads({currentCategory}) {
  return (
    <div className="Threads">
      {currentCategory.map(item => (<Thread content={item} key={uuid()}/>))}
    </div>
  )
}

export default Threads
