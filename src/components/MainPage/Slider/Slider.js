import React , { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import image2 from '../../../assets/images/sushi.png';

import image1 from '../../../assets/images/slide.jpg'

export default function MainSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div className='main-slider'>
            <div className='slider-inside'>
        <Slider {...settings}>
            <div ><img className= 'slider-image' src={image1}/></div>
            <div ><img className= 'slider-image' src={image1}/></div>
            <div ><img className= 'slider-image' src={image1}/></div>
            {/*<div ><img src={image1}/></div>*/}
            {/*<div ><img src={image1}/></div>*/}
            {/*<div ><img src={image1}/></div>*/}



        </Slider>
        </div>
        </div>
    );
}

