import "./Onboarding.css"; 
import React from 'react'
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <div>
      <section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
        <div>
            <Link className="close" to="/login">x</Link>
            <img src="../../assets/img/imagenes/chica_perro.png" alt=""></img>
            <p>Encuentra todo tipo 
            de servicios que tienes 
            cerca de ti</p>
        </div>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
      <div>
            <Link className="close" to="/login">x</Link>
            <img src="../../assets/img/imagenes/chica_pecera.png" alt=""></img>
            <p>Adopta desde tu móvil</p>
            <span>Puedes acceder al perfil de muchos animales 
            que están en adopción y filtrarlos para
            encontrar el que mejor se adapte a ti</span>
        </div>
      </div>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
      <div>
            <Link className="close" to="/login">x</Link>
            <img src="../../assets/img/imagenes/chico_gato.png" alt=""></img>
            <p>Si eres una asociación 
            sube a tus peludos para 
            darles más difusión</p>
        </div>
      </div>
    </li>
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="#carousel__slide1"
           class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button">Go to slide 3</a>
      </li>
    </ol>
  </aside>
</section>
    </div>
  )
}

export default Onboarding