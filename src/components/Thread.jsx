import React from 'react'

import logo from '../images/logo.jpg'
import twitter from '../images/twitter-color.png'
import '../styles/Thread.css'

function Thread() {
  return (
    <div className="thread">
      <div className="thread__wrapper">
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
        <div className="thread__text">
      ¿Te interesa insertarte en el mercado laboral IT? Bienvenido/a!Rainbow Te dejo este hilo con recursos gratis, info y consejos sobre Diseño UX/UI y Desarrollo Web (y más!)Down pointing backhand index 
        </div>
      </div>
    </div>
  )
}

export default Thread