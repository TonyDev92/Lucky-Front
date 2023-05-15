import "./Gallery.scss"
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Gallery = (props) => {
    const [animales, setAnimales] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        setAnimales(props.animales);
    }, [props.animales])
    const goToAnimalDetail = (e, index) => {
        navigate('/perfil', {state: {element : e}})
    }
    return (
      <div className='contenedorPadre'>
          {animales.length > 0 ? (
            animales.map((animal, index) => <div className='contenedorPadre__hijo'  key={index}>
                <img className='contenedorPadre__hijo--img'onClick={() => goToAnimalDetail(animal, index)} src={animal.datos.imagen} alt=''></img>
                <div className='contenedorPadre__hijo--textos'>
                    <h2 className='contenedorPadre__hijo--textos--nombre'>{animal.datos.nombre}</h2>
                    <div className='contenedorPadre__hijo--textos--textder'>
                        <p className='contenedorPadre__hijo--textos--textder--sexo'>{animal.datos.sexo}</p>
                        <p className='contenedorPadre__hijo--textos--textder--peso'>{animal.datos.peso}KG</p>
                    </div>
                </div>
            </div>)
          ) : (
            <p>No hay animales disponibles.</p>
          )}
      </div>
    )
}

export default Gallery
