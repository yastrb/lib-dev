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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
    ]
  };

  
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {data.map((item) => {
          const { id, img } = item;
          return (
            <div className='' key={id}>
              <div className='mx-3'>
                <img className=' mx-auto' src={img} alt="img" />
              </div>
            </div>
          )
        }
        )}
      </Slider>
    </div>

  )
}

export default Carousel