import React from 'react'
import '../styles/TagCafecito.css'
// import cafecito from '../images/cafecito.svg'
import { useSpring, animated, config } from 'react-spring'
function TagCafecito() {
  const handleFocus = useSpring({
    from: {x: 50},
    to: {x: 0},
    config: {...config.wobbly, friction: 5},
    loop: {reset: true},
    delay: 5000
  })
  return (
    <animated.div style={handleFocus} className="TagCafecito">
      <a href="https://cafecito.app/melbaudon" target="_blank" rel="noopener noreferrer">Invítame un café</a>
      {/* <img src={cafecito} alt="" /> */}
    </animated.div>
  )
}

export default TagCafecito
