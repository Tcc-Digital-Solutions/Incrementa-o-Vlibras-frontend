import {Swiper, SwiperSlide } from "swiper/react";
import '../../assets/css/css-home/Carousel.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import teste2 from '../../assets/img/BANNER 03_ INTERCAMBIALIDADE_18v.png'
import teste3 from '../../assets/img/BANNER 02_ MEDIÇÃO.png'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Cardproduto } from "./Cardproduto";

export const Carousel = (props) => {

    return (
        <div className='Carousel_react-div' >
            <span className='Carousel_react-01'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    // slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay,Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className="swiper-slide-1"><img className="Carousel-img" src={teste2} alt="" /></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><img className="Carousel-img" src={teste3} alt="" /></SwiperSlide>

                </Swiper>                
            </span>
            <span className='Carousel_react-02'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    // autoplay={{
                    //     delay: 4000,
                    //     disableOnInteraction: false,
                    // }}
                    navigation={true}
                    modules={[Autoplay,Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><Cardproduto/></SwiperSlide>
                </Swiper>                
            </span>

        </div>
    )
}