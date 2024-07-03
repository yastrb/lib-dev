import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from '../../constants';

const Carousel = () => {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  
  return (
    <div className="slider-container md:px-0 px-5 ">
      <Slider {...settings}>
        {data.map((item) => {
          const { id, img } = item;
          return (
            <div key={id}>
                <img className=' mx-auto' src={img} alt="img" />
            </div>
          )
        }
        )}
      </Slider>
    </div>

  )
}

export default Carousel