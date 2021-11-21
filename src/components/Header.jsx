import React, {useContext, useEffect, useState} from 'react'
import AppContext from '../AppContext'

import NavDesktop from './NavDesktop.jsx'
import NavMobile from './NavMobile.jsx'
import '../styles/Header.css'
import logo from '../images/logo.svg'

function Header() {
  const {handleSearch} = useContext(AppContext)
  const [width, setWidth] = useState(window.innerWidth)
  const mobileSize = 780

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <div className="Header">
      <div className="wrapper__header">
        <a href="#">
          <img src={logo} alt="" className="logo" />
        </a>
        <input type="text" placeholder="Buscar" onChange={handleSearch} className="search-input" />
        {width > mobileSize ? <NavDesktop /> : <NavMobile />}
      </div>
    </div>
  )
}

export default Header
