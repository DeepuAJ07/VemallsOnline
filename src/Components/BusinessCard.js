import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nsk from '../assets/business/nsk fruits trending page.png'
import anamthara from '../assets/business/anamthara trending.png'
import vega from '../assets/business/vega-front.jpg'
import jht from '../assets/business/jht electronics trending.png'
import dfresh from '../assets/business/dfresh-trending.jpg'
import skom from '../assets/business/oil mills web.png'
export default function BusinessCard(){

  const trendingBusiness = [{id:1,name:'D FRESH FOODS',desc:"Toxic Free Foods",image:dfresh},
    {id:2,name:'NSK  FRUITS',desc:"Get upto 50% Off",image:nsk},
    {id:3,name:'NSK ANAMTHARA RESORT',desc:"Get upto 50% Off",image:anamthara},
    {id:5,name:'JHT ELECTRONICS',desc:"Get upto 50% Off",image:jht},
    {id:6,name:'VEGA DIGITAL HUB ',desc:"Digital Marketing Partner",image:vega}
  ]
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
        <h4>Trending Business</h4>
        <Slider {...settings}>
       {trendingBusiness.map((item,i)=>{
return(
  <div className="card p-4" key={i}>
   <img src={item.image} alt={item.name}/>
   <h4 className="text-center text-dark">{item.name}</h4>
   <h6 className="text-center text-primary">{item.desc}</h6>

  </div>
)
       })}
        
        
      </Slider>
          </div>
}