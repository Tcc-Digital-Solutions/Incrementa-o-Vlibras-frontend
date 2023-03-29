import {Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import '../../assets/css/css-informacoes/Carouselinformacoes.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import CardInformacoes from './CardInformacoes';
import React, { useEffect, useState } from 'react';


export const Carouselinformacoes = (props) => {
    const { innerWidth: width, innerHeight: height } = window;
    const [slip, setSlip] = useState(3)

    useEffect(() => {
        if (innerHeight < 800){
            setSlip(2)
        }
    })

    return (
        <div className='Carousel-informacoes-div' >
            <span className='Carousel-informacoes-01'>
                <Swiper
                    slidesPerView={slip}
                    direction={'vertical'}
                    spaceBetween={15}
                    slidesPerGroup={slip}

                    loop={false}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 40000,
                        disableOnInteraction: false,
                    }}
                    
                    modules={[Navigation, Pagination, Scrollbar, A11y, Scrollbar]}
                    className="myswiper"
                >
                    <SwiperSlide className="swiper-slide-1"><CardInformacoes texto={'Bivolt 127v-220v. Pode ficar ligado até 18 horas.'} icone={'bateria'} /></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><CardInformacoes texto={'Luz de LED, para trabalhar em áreas menos iluminadas.'} icone={'lampada'} /></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><CardInformacoes texto={'1 ano de garantia! Quando produtos ou peças apresentarem defeitos e falhas.'} icone={'garantia'} /></SwiperSlide>
                    <SwiperSlide className="swiper-slide-1"><CardInformacoes texto={'Há um risco elevado de choque elétrico se seu corpo estiver aterrado.'} icone={'alerta'} /></SwiperSlide>

                </Swiper> 
                           
            </span>
            <span className='Carousel-informacoes-02'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ hide:true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className="swiper-slide-2"><CardInformacoes texto={'Bivolt 127v-220v. Pode ficar ligado até 18 horas.'} icone={'bateria'} /></SwiperSlide>
                    <SwiperSlide className="swiper-slide-2"><CardInformacoes texto={'Luz de LED, para trabalhar em áreas menos iluminadas.'} icone={'lampada'} /></SwiperSlide>
                    <SwiperSlide className="swiper-slide-2"><CardInformacoes texto={'1 ano de garantia! Quando produtos ou peças apresentarem defeitos e falhas.'} icone={'garantia'} /></SwiperSlide>
                    <SwiperSlide className="swiper-slide-2"><CardInformacoes texto={'Há um risco elevado de choque elétrico se seu corpo estiver aterrado.'} icone={'alerta'} /></SwiperSlide>
                </Swiper>     
            </span>
        </div>
    )
}