/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import "./hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Popup from "../Popup";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Hero left-section */}

        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Explore <br />
              your Dream <br />
              Destination Now
            </motion.h1>
          </div>

          {/* <div className="flexColStart secondaryText hero-des">
            <span>
              Plan your schedule and start to explore world.
              <br /> tourOn helps you to get great offers. For more
            </span>
            <span>offer you can always contact with us.</span>
          </div> */}

          {/* Connect Button */}

          <div className="contactus">
            <button
              className="button"
              onClick={() => {
                setStep(1);
                setOpen(true);
              }}
            >
              Customize Now
            </button>
            <Popup
              open={open}
              setOpen={setOpen}
              step={step}
              setStep={setStep}
            />
          </div>

          <div className="flexCenter stats">
            <div className="stat flexColStart">
              <span>
                <CountUp start={600} end={1200} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Successful Tours</span>
            </div>

            <div className="stat flexColCenter">
              <span>
                <CountUp start={2571} end={3500} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Travellers</span>
            </div>

            <div className="stat flexColCenter">
              <span>
                <CountUp end={30} />
                <span>+</span>
              </span>
              <span className="secondaryText">Countries Certified</span>
            </div>
          </div>
        </div>

        {/* Hero Right-section*/}

        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="image-container"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/touronapp-248e4.appspot.com/o/landing_page%2FYoutube.png?alt=media&token=0434d8da-c8c7-4e78-aea6-b2677584a151"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
