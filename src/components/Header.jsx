import React, {useContext} from 'react'
import AppContext from '../AppContext'

import '../styles/Header.css'
import dribbble from '../images/dribbble.svg'
import instagram from '../images/instagram.svg'
import medium from '../images/medium.svg'
import twitter from '../images/twitter.svg'
import logo from '../images/logo.svg'

function Header() {
  const {handleSearch} = useContext(AppContext)
  return (
    <div className="Header">
      <div className="wrapper__header">
        <img src={logo} alt="" className="logo" />
        <div className="right__header">
          <input type="text" placeholder="Buscar" onChange={handleSearch}/>
          <div className="network">
            <a href="https://baudonmel.medium.com" target="_blank" rel="noopener noreferrer">
              <img src={medium} alt="" />
            </a>
            <a href="https://dribbble.com/melbaudon" target="_blank" rel="noopener noreferrer">
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
