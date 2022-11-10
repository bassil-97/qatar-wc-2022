import React from "react";

import "./GroupsList.css";

export default function GroupsList({ data }) {
  return (
    <div className="groups-list">
      {data.map((group) => (
        <div className="group-list__item" data-aos="zoom-in">
          <h3 className="mb-0">Group {group.group}</h3>
          <hr className="w-100" />
          <ul className="group-teams__list">
            {group.teams.map((team) => (
              <li>
                <img
                  src={team.flag}
                  className="img-fluid team-flag"
                  alt="team flag"
                />
                <h5>{team.name_en}</h5>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
