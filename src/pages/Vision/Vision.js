import React from "react";
import "./Vision.css";

import SectionHeader from "../../UI/SectionHeader";
import data from "../../assets/wc-facts.json";

export default function Vision() {
  return (
    <div className="wc-vision__container">
      <div className="wc-vision__header">
        <SectionHeader title="Qatar Vision" />
      </div>
      <div className="container wc-profile__section">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title mb-5">
              PROFILE OF THE FIFA WORLD CUP QATAR 2022™
            </h2>
            <p>
              The FIFA World Cup 2022™ in Qatar is the first to be hosted in the
              Middle East and the most geographically compact since the
              inaugural edition of the tournament in 1930. The FIFA World Cup
              2022™ is unique in many respects, with the type of opportunities
              and challenges related to sustainability being no exception.
            </p>
            <p>
              The FIFA World Cup™ is the biggest single-sport competition in the
              world. After a preliminary competition, the 32 qualified men’s
              national football teams compete to become world champions in a
              final competition staged during one month in a host country
              selected by FIFA.
            </p>
            <p>
              It is anticipated that over one million spectators will attend the
              tournament’s 64 matches, and the competition will reach a global
              in-home television audience of over 3 billion people, with more
              than one billion fans tuning in to watch the final match. In
              addition to the matches, there are a host of other official
              competition-related events, including draws, team and referee
              seminars and workshops, opening and closing ceremonies, award
              ceremonies, cultural events, press conferences and launch events.
            </p>
            <p>
              Hosting the FIFA World Cup™ often represents a historical
              milestone and symbolic achievement for the host country, with
              major implications for local communities, infrastructure
              development and service provision. It includes the employment and
              training of thousands of workers and volunteers, the
              transportation of hundreds of thousands of fans and the protection
              of people’s health and safety throughout the tournament. The scale
              and complexity of the tournament can generate significant
              opportunities for all those involved, but they also present a
              range of risks that must be effectively managed in order to
              deliver a successful tournament.
            </p>
          </div>
        </div>
        <hr className="w-100" />
        <div className="row mt-5">
          <div className="col-lg-12">
            <h2 className="section-title mb-5">
              Unique characteristics of the tournament
            </h2>
            <p>
              The FIFA World Cup 2022™, which was awarded to Qatar in December
              2010, will be the first FIFA World Cup™ to be hosted in the Middle
              East. This is a tremendous opportunity for the region to welcome
              and connect with billions of people from across the globe,
              showcasing its unique identity and culture and building new
              bridges of understanding.
            </p>
            <p>
              The tournament will be held from 21 November to 18 December 2022,
              when the average temperature in Qatar ranges from 24-28 degrees
              Celsius. Early in the planning process, the tournament was moved
              to winter in Qatar, to protect athletes and attendees from the
              summer heat.
            </p>
            <p>
              It will also have the most geographically compact footprint in the
              tournament’s history since the inaugural single-stadium edition in
              1930, with all stadiums within 50km of the centre of Qatar’s
              capital city Doha. This hosting concept means that spectators and
              players will spend less time travelling and more time enjoying the
              tournament, and it will create opportunities to centralise the
              provision of some services and facilities.
            </p>
            <p>
              A key objective of the FIFA World Cup 2022™ is that it serves as a
              catalyst for the achievement of Qatar’s long-term development
              goals as laid out in the Qatar National Vision 2030 and the
              National Development Strategy 2018-2022.
            </p>
          </div>
          <div className="wc-facts-__list">
            {data.map((item) => (
              <div key={item.id} className="wc-facts-list__item">
                <h1>{item.count}</h1>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
