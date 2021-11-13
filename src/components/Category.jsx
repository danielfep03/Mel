import React from 'react'
import '../styles/Category.css'
function Category({name, selected, isSelected}) {
  return (
    <button className={'category ' + (selected ? 'selected' : '')}
      onClick={(e) => isSelected(e)}
    >
      {name}
    </button>
  )
}

export default Category
