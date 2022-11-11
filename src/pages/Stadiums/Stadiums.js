import React from "react";
import "./Stadiums.css";

import SectionHeader from "../../UI/SectionHeader";

import data from "../../assets/stadiums.json";

export default function Stadiums() {
  return (
    <div className="wc-stadiums__container">
      <div className="wc-stadiums__header">
        <SectionHeader title="Qatar Stadiums" />
      </div>
      <div className="wc-staduims__list">
        {data.map((el, index) => (
          <div key={el.id} className={`wc-staduim__item row w-100`}>
            <div
              className="col-lg-6 d-flex align-items-center justify-content-center flex-column"
              data-aos="fade-right"
            >
              <h1 className="fw-bold stadiums-font">{el.name}</h1>
              <p>{el.title}</p>
              <hr className="w-50 mt-1 mb-4" />
              <h6>{el.description}</h6>
              <div className="row mt-4">
                <div className="col-lg-6 mb-2" data-aos="zoom-in">
                  <div className="stadium-info">
                    <h6>Capacity</h6>
                    <h4 className="mb-0 mt-3">{el.capacity}</h4>
                  </div>
                </div>
                <div className="col-lg-6 mb-2" data-aos="zoom-in">
                  <div className="stadium-info">
                    <h6>Location</h6>
                    <h6 className="mb-0 mt-3">{el.location}</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0" data-aos="zoom-in">
              <img
                src={el.image}
                className="wc-stadium-img img-fluid"
                alt="Stadium"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
