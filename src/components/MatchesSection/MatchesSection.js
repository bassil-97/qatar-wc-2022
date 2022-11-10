import React from "react";
import "./MatchesSection.css";

export default function MatchesSection({ data }) {
  const group = data["0"]["group"];

  return (
    <div className="wc-matches__section" data-aos="zoom-in">
      <div className="matches-section__header">
        <h6 className="mb-0 fw-bold text-uppercase">Group {group}</h6>
      </div>
      {data.map((el) => (
        <div className="mb-4" key={el._id}>
          <div className="match-teams">
            <h6>
              <img
                src={el.home_flag}
                className="img-fluid match-flag me-2"
                alt="team flag"
              />
              {el.home_team_en}
            </h6>
            <small className="text-center fw-bold">VS</small>
            <h6>
              {el.away_team_en}{" "}
              <img
                src={el.away_flag}
                className="img-fluid match-flag ms-2"
                alt="team flag"
              />
            </h6>
          </div>
          <div className="match-details text-center mt-2">
            <h6 className="mb-0">
              {el.local_date.split(" ")[0]} - {el.local_date.split(" ")[1]}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
}
