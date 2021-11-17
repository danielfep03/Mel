import React, {useState} from 'react'
import Categories from './Categories.jsx'
import Threads from './Threads.jsx'

import { programacion, diseño, marketing_digital,
  productividad, freelance, ingles,
  trabajoIt, herramientas, roadmap,
  marcaPersonal } from '../initialState.js'

import '../styles/Content.css'

function Content() {
  const [currentCategory, setCurrentCategory] = useState([{
    'created_at': '2021-07-12T10:37:21.000Z',
    'id': '1414534335928094725',
    'text': '¿Te interesa insertarte en el mercado laboral IT? Bienvenido/a!🌈 Te dejo este hilo con recursos gratis, info y consejos sobre Diseño UX/UI y Desarrollo Web (y más!)👇'
  }])

  const filter = (category) => {
    if (category == '🦄 Diseño') {
      setCurrentCategory(diseño)
    }
    else if (category === '💻 Programación') {
      setCurrentCategory(programacion)
    }
    else if (category === '🛍️ Marketing Digital') {
      setCurrentCategory(marketing_digital)
    }
    else if (category === '📑 Productividad') {
      setCurrentCategory(productividad)
    }
    else if (category === '💰 Freelance') {
      setCurrentCategory(freelance)
    }
    else if (category === '🌎 Inglés') {
      setCurrentCategory(ingles)
    }
    else if (category === '💼 Trabajo IT') {
      setCurrentCategory(trabajoIt)
    }
    else if (category === '🛠️ Herramientas') {
      setCurrentCategory(herramientas)
    }
    else if (category === '📚 Roadmap') {
      setCurrentCategory(roadmap)
    }
    else if (category === '👩🏻‍ Marca personal') {
      setCurrentCategory(marcaPersonal)
    }
  }

  return (
    <div className="Content">
      <h1>Universo Tech</h1>
      <h2>Artículos, herramientas y recopilación de hilos de Twitter sobre tecnología.</h2>
      <div className="created__by">
        <span>Creado por</span>
        <a className="button" href="https://twitter.com/MelVonPato" target="_blank" rel="noopener noreferrer">
          @melvonpato
        </a>
      </div>
      <Categories filter={filter}/>
      <Threads currentCategory={currentCategory}/>
    </div>
  )
}

export default Content
