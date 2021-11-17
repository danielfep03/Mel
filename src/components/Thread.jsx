import React from 'react'

import logo from '../images/logo.jpg'
import twitter from '../images/twitter-color.png'
import '../styles/Thread.css'

function Thread({content}) {
  console.log(content.text)
  return (
    <div className="thread">
      <a href={`https://twitter.com/MelVonPato/status/${content.id}`} target="_blank" rel="noreferrer" className="thread__wrapper">
        <div className="thread__header">
          <div>
            <img src={logo} alt="logo" />
            <div className="thread__profile">
              <span><b>Mel</b></span>
              <span>@MelVonPato</span>
            </div>
          </div>
          <img src={twitter} alt="" />
        </div>
        <p className="thread__text">
          {content.text}
        </p>
        <div className="created_at">
          {content.created_at}
        </div>
      </a>
    </div>
  )
}

export default Thread