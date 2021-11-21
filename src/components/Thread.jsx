import React from 'react'

import logo from '../images/logo.svg'
import twitter from '../images/twitter.svg'
import '../styles/Thread.css'

function Thread({content}) {
  const newDate = new Date(content.created_at)
  return (
    <a className="thread" href={`https://twitter.com/MelVonPato/status/${content.id}`} target="_blank" rel="noreferrer">
      <div className="thread__wrapper">
        <div className="thread__header">
          <div>
            <img src={logo} alt="logo" />
            <div className="thread__profile">
              <span>Mel</span>
              <span>@MelVonPato</span>
            </div>
          </div>
          <img src={twitter} alt="" />
        </div>
        <p className="thread__text">
          {content.text}
        </p>
        <div className="created_at">
          {newDate.toDateString()} • Twitter Web App
        </div>
      </div>
    </a>
  )
}

export default Thread