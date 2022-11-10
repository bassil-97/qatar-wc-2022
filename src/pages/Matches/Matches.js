import React, { useState } from "react";
import "./Matches.css";

import MatchesSection from "../../components/MatchesSection/MatchesSection";
import SectionHeader from "../../UI/SectionHeader";

import { data } from "../../assets/matches";

export default function Matches() {
  const [matches] = useState([
    data.filter((el) => el.group === "A"),
    data.filter((el) => el.group === "B"),
    data.filter((el) => el.group === "C"),
    data.filter((el) => el.group === "D"),
    data.filter((el) => el.group === "E"),
    data.filter((el) => el.group === "F"),
    data.filter((el) => el.group === "G"),
    data.filter((el) => el.group === "H"),
  ]);

  return (
    <div className="wc-matches__container">
      <SectionHeader title="Fixtures" />
      {matches.map((group) => (
        <MatchesSection data={group} key={group._id} />
      ))}
    </div>
  );
}
