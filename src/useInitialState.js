import {useState}from 'react'

import data from './initialState.js'

const dataArray = () => {
  let dataList = []
  for (const key in data) {
    dataList.push(...data[key])
  }

  return dataList
}

function useInitialState() {
  const [state, setState] = useState([{
    'created_at': '2021-07-12T10:37:21.000Z',
    'id': '1414534335928094725',
    'text': '¿Te interesa insertarte en el mercado laboral IT? Bienvenido/a!🌈 Te dejo este hilo con recursos gratis, info y consejos sobre Diseño UX/UI y Desarrollo Web (y más!)👇'
  }])

  const categorySelector = (category) => {
    if (category == '🦄 Diseño') {
      setState(data.diseño)
    }
    else if (category === '💻 Programación') {
      setState(data.programacion)
    }
    else if (category === '🛍️ Marketing Digital') {
      setState(data.marketing_digital)
    }
    else if (category === '📑 Productividad') {
      setState(data.productividad)
    }
    else if (category === '💰 Freelance') {
      setState(data.freelance)
    }
    else if (category === '🌎 Inglés') {
      setState(data.ingles)
    }
    else if (category === '💼 Trabajo IT') {
      setState(data.trabajoIt)
    }
    else if (category === '🛠️ Herramientas') {
      setState(data.herramientas)
    }
    else if (category === '📚 Roadmap') {
      setState(data.roadmap)
    }
    else if (category === '👩🏻‍ Marca personal') {
      setState(data.marcaPersonal)
    }
  }

  const handleSearch = (e) => {
    const value = e.target.value
    const dataList = dataArray()
    console.log(value)
    console.log(dataList)
    
    const newState = dataList.filter(item => item.text.toLowerCase().includes(value.toLowerCase()))
   
    setState([...newState])
  }

  return{
    categorySelector,
    handleSearch,
    state
  }
}

export default useInitialState
