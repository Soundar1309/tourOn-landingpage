/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./contact.css";
import { MdCall, MdMail } from "react-icons/md";
import Input from "@mui/joy/Input";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Name: name,
      Email: email,
      Phone: phone,
      Date: date
    };
    axios
      .post(
        `https://sheet.best/api/sheets/35f758ae-e54c-4bb8-b05b-35ea3a334993`,
        data
      )
      .then((res) => {
        setName("");
        setEmail("");
        setPhone("");
        setDate("");

      });
  };
  return (
    <section className="c-wrapper">
      <div className="flexColCenter c-title">
        <span className="cont-title">Arrange a Callback</span>
        <div className="cl-title">
          {/* <h3>Connect with Us</h3> */}
          <p className="po-text">
            Your Privacy, Our Commitment <br />
            Expect Only Essential Callbacks from Us. Trust in Our Contact Policy.
          </p>
        </div>
        {/* <span className="primaryText">Easy to Connect us</span> */}
      </div>
      <div className="paddings innerWidth flexCenter c-container">
        {/* LeftSide */}
        <div className="flexStart c-left">
          {/* ContactModes */}
          <div className="flexStart contactmodes">
            <div className="flexStart row">
              {/* Call mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={30} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondarText">+91 91766 67761</span>
                  </div>
                </div>
              </div>

              {/* E-Mail mode */}

              <div className="flexCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdMail size={30} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Mail</span>
                    <span className="secondarText">hello@touron.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="img-container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/touronapp-248e4.appspot.com/o/landing_page%2Fcontact.jpg?alt=media&token=cc15defe-9075-4716-9ac9-d874f4965aea"
              alt="Conatct"
            />
          </div>
        </div>

        {/* RightSide */}

        <div className="c-right flexColCenter">
          <form
            method="POST"
            className="contact_form flex-start"
            name="Contact"
          >

            {/* name */}

            <div className="contact_form-div flex-start">
              <input type="hidden" name="form-name" value="name_of_my_form" />
              <label className="contact_form-tag">Name</label>
              <Input
                color="primary"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                size="lg"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            {/* Email */}

            <div className="contact_form-div flex-start">
              <label className="contact_form-tag">Email</label>
              <Input
                color="primary"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                size="lg"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            
            {/* mobile Number */}

            <div className="contact_form-div flex-start">
              <label className="contact_form-tag"> Mobile or WhatsApp Number </label>
              <Input
                color="primary"
                type="phone"
                name="phone"
                placeholder="Enter Your Number"
                size="lg"
                variant="outlined"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            
            {/* Date for CallBack */}

            <div className="contact_form-div flex-start">
              <label className="contact_form-tag"> Date for Callback</label>
              <Input 
                type="date"
                color="primary"
                name="date"
                size="lg"
                variant="outlined"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                slotProps={{
                  input: {
                    min: "2018-06-07T00:00",
                    max: "2018-06-14T00:00",
                  },
                }}
              />
            </div>
            <button type="submit" className="button" onClick={handleSubmit}>
              Contact US
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
