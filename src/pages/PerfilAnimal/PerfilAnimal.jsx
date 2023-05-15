import React from 'react'
import PerfilAnimalPage from '../PerfilAnimalPage/PerfilAnimalPage'
import { useLocation } from 'react-router-dom'

const PerfilAnimal = () => {
    const location = useLocation();
    const element = location.state.element;
    console.log(element);
  return (
    <div>
      <PerfilAnimalPage animal={element}/>
    </div>
  )
}

export default PerfilAnimal
