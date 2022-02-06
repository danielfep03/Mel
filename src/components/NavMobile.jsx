import React, {useState} from 'react'
import Frame from '../images/Frame.svg'

import dribbble from '../images/dribbble.svg'
import instagram from '../images/instagram.svg'
import medium from '../images/medium.svg'
import twitter from '../images/twitter.svg'
import '../styles/NavMobile.css'

function NavMobile() {
  const [isActive, setIsActive] = useState(false)

  const handleIsActive = () => setIsActive(!isActive)

  return (
    <div className="NavMobile">
      <button className="NavButton" onClick={handleIsActive}>
        <img src={Frame} alt="" />
      </button>
      <div className={isActive ? 'side-bar active' : 'side-bar'}>
        <span>Seguime en</span>
        <a href="https://baudonmel.medium.com" target="_blank" rel="noopener noreferrer">
          <img src={medium} alt="" />
        </a>
        <a href="https://dribbble.com/melbaudon" target="_blank" rel="noopener noreferrer">
          <img src={dribbble} alt="" />
        </a>
        <a href="https://www.instagram.com/melbaudon/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="" />
        </a>
        <a href="https://twitter.com/melbaudon" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="instagram" />
        </a>
      </div>
    </div>
  )
}

export default NavMobile
