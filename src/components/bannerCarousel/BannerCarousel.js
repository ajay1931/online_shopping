import React from 'react';
import './BannerCarousel.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerCarousel = (props) => {
  const { data } = props

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  }
  return (
    <div className='bannerCarousel'>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.Imgsrc} alt='' className='bannerCarousel-img' />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default BannerCarousel
