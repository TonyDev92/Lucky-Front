import React from 'react'
import "./AdoptStateFlter.css"

const AdoptStateFilter = (props) => {

  return (
    <div className='AdoptStateFilter-padre'>
      <div className='AdoptStateFilter-content'>
        <h2 className="title-AdoptStateFilter">Filtros</h2>
        <div className='filters-AdoptStateFilter'>
        <div>
          <button className='Butt-type-AdoptStateFilter'><img className='AdoptStateFilter-img' src='./assets/img/logo/completado.png' alt=''></img>Aceptado</button>
          </div>
          <button className='Butt-type-AdoptStateFilter'><div className='AdoptStateFilter-flex-but-img' ><img className='AdoptStateFilter-img' src='./assets/img/logo/en_proceso.png' alt=''></img></div>En proceso</button>
          <div>
          <button className='Butt-type-AdoptStateFilter'><img className='AdoptStateFilter-img' src='./assets/img/logo/rechazado.png' alt=''></img>Rechazado</button>
          </div>
        </div>
        <button className='Aply-Button-AdoptStateFilter' onClick={props.onApply}>Aplicar</button>
      </div>
    </div>
  )
}

export default AdoptStateFilter
