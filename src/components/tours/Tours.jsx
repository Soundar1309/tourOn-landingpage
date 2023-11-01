import { React, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./tours.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import Popup from "../Popup";

const Tours = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setOpen(true);
    setStep(1);
  };

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Popular Cities</span>
          <span className="primaryText">Best Places to Visit</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div
                className="flexColStart r-card"
                onClick={() => handleCardClick(card)}
              >
                <img src={card.image} alt="home" />
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Popup
          open={open}
          setOpen={setOpen}
          step={step}
          setStep={setStep}
          selectedCard={selectedCard}
        />
      </div>
    </section>
  );
};

export default Tours;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
