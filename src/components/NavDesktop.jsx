import React from 'react'

import dribbble from '../images/dribbble.svg'
import instagram from '../images/instagram.svg'
import medium from '../images/medium.svg'
import twitter from '../images/twitter-outline.svg'

function NavDesktop() {
  return (
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
  )
}

export default NavDesktop
