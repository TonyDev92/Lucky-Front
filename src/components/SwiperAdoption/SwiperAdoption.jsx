import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SwiperAdoption.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

function SwiperAdoption() {
  return (
    <div className="container__swiper--padre">
      <Swiper
      effect={"coverflow"}
        centeredSlides={true}    
        // spaceBetween={0}
           slidesPerView={"3"} 
        pagination={{el: '.swiper-pagination',
        clickable: true,}}  
        coverflowEffect={{
          rotate: 1,
          stretch: -8,
          depth: 100,
          modifier: 5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >

        <SwiperSlide>
          <div className="container_animal">
            <div className="img_animal">
              <img className="img" src="./assets/img/logo/perro.png" alt="" />
            </div>
            <div className="info_cont">
            <p className="p">Apolo</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container_animal">
            <div className="img_animal">
              <img className="img" src="./assets/img/logo/ave.png" alt="" />
            </div>
            <div className="info_cont">
            <p className="p">Kiko</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container_animal">
          <div className="img_animal">
            <img className="img" src="./assets/img/logo/ave.png" alt="" />
          </div>
          <div className="info_cont">
            <p className="p">Dalí</p>
            </div>
          </div>
        </SwiperSlide>

        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
   
  )
}

export default SwiperAdoption