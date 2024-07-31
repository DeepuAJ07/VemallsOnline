import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/underSearchbar/slider-new1.jpeg'
import image2 from '../assets/underSearchbar/slider-new2.jpeg'
import image3 from '../assets/underSearchbar/slider-new3.jpeg'
import image4 from '../assets/underSearchbar/slider-new4.jpeg'
import image5 from '../assets/underSearchbar/slider-new5.jpeg'
import image6 from '../assets/underSearchbar/slider-new6.jpeg'
import image7 from '../assets/underSearchbar/slider-new7.jpeg'
import image8 from '../assets/underSearchbar/slider-new8.jpeg'
import image9 from '../assets/underSearchbar/slider-new9.jpeg'
import image10 from '../assets/underSearchbar/undersearchbar1.jpeg'
import image11 from '../assets/underSearchbar/undersearchbar2.jpeg'
import image12 from '../assets/underSearchbar/undersearchbar3.jpeg'
export default function Card(){

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

return <div className="slider-container pt-5">
      <Slider {...settings}>
        <div className="card p-4">
          <img src={image1} alt="" />
        </div>
        <div className="card p-4">
          <img src={image2} alt=""/>
        </div>
        <div className="card p-4">
          <img src={image3} alt=""/>
        </div>
        <div className="card p-4">
          <img src={image4} alt=""/>
        </div>
        <div className="card p-4">
          <img src={image5} alt=""/>
        </div>
        <div className="card p-4">
          <img src={image6} alt=""/>
        </div>
        <div className="card p-4">
          <img src={image7} alt=""/>
        </div>
        <div className="card p-4">
          <img src={image8} alt=""/>
        </div>
        <div className="card p-4">
          <img src={image9} alt=""/>
        </div>
        <div className="card p-4">
          <img src={image10} alt=""/>
        </div>
        <div className="card p-4">
          <img src={image11} alt=""/>
        </div>
        <div className="card p-4">
          <img src={image12} alt=""/>
        </div>
        
      </Slider>
    </div>

 

   
}