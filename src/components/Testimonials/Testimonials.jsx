import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import { sliderSettings } from '../../utils/common';
import data from "../../utils/testimonial.json";

const Testimonials = () => {
    return (
        <section className='t-container'>
            <div className="paddings innerWidth">
                <div className="t-head flexColStart">
                    <span className="primaryText t-headtext">Star-Studded Sojourns: Our Celebrity Guests</span>
                </div>
            </div>
            <div className="t-inner">
            <Swiper {...sliderSettings}>
              <SliderButtons/>
              {data.map((card, i) =>(
                  <SwiperSlide key={i}>
                    <div className="flexColCenter t-card ">
                      <img src={card.image} alt="home"/>

                      <span className="reviewText">{card.name}</span>
                      <span className="secondaryText">{card.review}</span>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
            </div>
        </section>
    )
}

export default Testimonials

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter t-button">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
};