import React, {useState} from 'react'
import Category from './Category.jsx'
import {v4 as uuid} from 'uuid'

import '../styles/Categories.css'

function Categories() {
  const categories = [{name: '🦄 Diseño', selected: false},
    {name: '💻 Programación', selected: false},
    {name: '🛍️ Marketing Digital', selected: false},
    {name: '📑 Productividad', selected: false},
    {name: '💰 Freelance', selected: false},
    {name: '🌎 Inglés', selected: false},
    {name: '💼 Trabajo IT', selected: false},
    {name: '🛠️ Herramientas', selected: false},
    {name: '📚 Roadmap', selected: false},
    {name: '👩🏻‍ Marca personal', selected: false}
  ]

  const [selected, setSelected] = useState(categories)
 
  const isSelected = (item) => {
    // item.target.classList.toggle('selected')
    const name = item.target.outerText
    const newState = selected.map(category => {
      if(category.selected) {
        category.selected = !category.selected
      }
      if(category.name === name){
        category.selected = !category.selected
      }
      return category
    })
    setSelected([
      ...newState
    ])
  }

  return (
    <div className="Categories">
      {selected.map(item => <Category key={uuid()} name={item.name} selected={item.selected} isSelected={isSelected}/>)}
    </div>
  )
}

export default Categories