import React from 'react'
import '../styles/Header.css'
import dribbble from '../images/dribbble.svg'
import instagram from '../images/instagram.svg'
import medium from '../images/medium.svg'
import twitter from '../images/twitter.svg'
import logo from '../images/logo.jpg'

function Header() {
  return (
    <div className="Header">
      <div className="wrapper__header">
        <img src={logo}  alt="" className="logo" />
        <div className="right__header">
          <input type="text" placeholder="Buscar" />
          <div className="network">
            <a href="https://baudonmel.medium.com" target="_blank" rel="noopener noreferrer">
              <img src={medium} alt="" />
            </a>
            <a href="">
              <img src={dribbble} alt="" />
            </a>
            <a href="https://www.instagram.com/melbaudon/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="" />
            </a>
            <a href="https://twitter.com/MelVonPato" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
