import React from "react";
import "./Groups.css";

import GroupList from "../../components/GroupsList/GroupsList";
import SectionHeader from "../../UI/SectionHeader";

import data from "../../assets/data.json";

export default function Groups() {
  return (
    <div className="wc-groups__container">
      <SectionHeader title="Groups" />
      <GroupList data={data} />
    </div>
  );
}
