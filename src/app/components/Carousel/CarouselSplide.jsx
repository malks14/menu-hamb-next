'use client'
import React from 'react'
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const CarouselSplide = ({data}) => {
    return (
      <Splide options={{arrows: false, pagination:false}}>
        {data.map((link, i) => (
          <SplideSlide >
            <p  key={i}>{link.subtitulo}</p>
            </SplideSlide>
            ))}
      </Splide>
    )
  }
  


export default CarouselSplide