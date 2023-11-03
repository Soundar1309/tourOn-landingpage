/* eslint-disable no-unused-vars */
import React from "react";
import "./footer.css";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="https://firebasestorage.googleapis.com/v0/b/touronapp-248e4.appspot.com/o/landing_page%2Flogo.png?alt=media&token=723d4199-36ac-4007-b821-aa1376755c90" alt="Logo" width={110} />

          <span className="secondaryText">
            Our Vision is to make happy all people <br />
            explore the best place with us.
          </span>
        </div>
        {/* Center */}
        {/* <div className="flexColCenter">
          <p className="g-text">See us in action here!</p>
          <div className="FlexCenter badge">
          <a href="https://play.google.com/store/apps/details?id=com.touron.travelapp">
            <img src="./google-play.png" alt="" className="googlebadge" />
          </a>
          <a href="https://apps.apple.com/in/app/tour-on/id1544389334">
          <img src="./app-store.png" alt="" className="applebadge" />
          </a>
          </div>
        </div> */}
        {/* RightSide */}
        <div className="flexColEnd f-right">
          <span className="primaryText">Address</span>
          <span className="secondaryText add">
            The Hive, Level 3,
            <br />
            VR Mall, Madras House <br /> Anna Nagar, Chennai-40
          </span>

          <div className="flexCenter f-social">
            <span>
              <a
                href="https://www.instagram.com/touronholidays/"
                target="_balnk"
              >
                <BsInstagram size={25} />
              </a>
            </span>
            <span>
              <a href="https://www.twitter.com/touronholidays/" target="_balnk">
                <BsTwitter size={25} />
              </a>
            </span>
            <span>
              <a
                href="https://www.facebook.com/touronholidays/"
                target="_balnk"
              >
                <BsFacebook size={25} />
              </a>
            </span>
            <span>
              <a href="mailto:hello@touron.in" target="_balnk">
                <GrMail size={30} />
              </a>
            </span>
          </div>

          {/* <div className="flexCenter f-menu">
            <span>
              <a href="https://www.touron.in/surprise-tour">Surprise Tour</a>
            </span>
            <span>
              <a href="https://www.touron.in/planned-tour">Planned Tour</a>
            </span>
            <span>
              <a href="https://www.touron.in/honeymoon-tour/">Honeymoon Tour</a>
            </span>
            <span>
              <a href="https://www.touron.in/luxury-tour/">Luxury Tour</a>
            </span>
          </div> */}
        </div>
      </div>
      <div className="paddings innerWidth flexCenter f2-container">
        <span className="copyright">
          © 2023{" "}
          <span>
            {" "}
            <a target="_blank" rel="noreferrer" href="https://www.touron.in/">
              tourOn<i className="mdi mdi-toy-brick-plus-outline:"></i>
            </a>
          </span>{" "}
          | All rights reserved.
        </span>
      </div>
    </section>
  );
};

export default Footer;
