import React from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Countdown from "../../components/Countdown/Countdown";

import WCLogo from "../../assets/FIFA World Cup - Qatar 2022 Logo.png";
import Mascot from "../../assets/2022-fifa-world-cup-mascot-logo-brandlogos.net_rjc13d27d.svg";

export default function Home() {
  return (
    <div className="home-page__container">
      <div className="home-page__content">
        <Navbar />
        <img
          src={WCLogo}
          className="img-fluid wc-logo"
          alt="WC-Logo"
          data-aos="zoom-in"
        />
        <div className="home-page_body">
          <div className="row">
            <div className="col-lg-6 col-sm-12 d-flex align-items-center justify-content-center">
              <div className="home-page__text">
                <h6 className="fw-bold w-100">November 21 - December 18</h6>
                <h1>Feel the Moment of Winnig</h1>
                <button
                  type="button"
                  className="btn primary-btn text-uppercase mt-4"
                >
                  book ticket
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 d-flex align-items-center justify-content-center">
              <img
                src={Mascot}
                className="img-fluid mascot"
                alt="Mascot"
                data-aos="zoom-in"
              />
            </div>
          </div>
        </div>
        <div className="home-page_footer">
          <Countdown />
          <h1 className="mb-0 text-center mt-4 fw-bold">
            Countdown to Qatar 2022
          </h1>
        </div>
      </div>
    </div>
  );
}
