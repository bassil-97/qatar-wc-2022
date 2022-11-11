import React from "react";
import "./SectionHeader.css";

import WCLogo from "../assets/FIFA World Cup - Qatar 2022 Logo.png";

export default function SectionHeader({ title }) {
  return (
    <div className="section-header p-4" data-aos="fade-right">
      <img src={WCLogo} className="img-fluid wc-logo-section" alt="Logo" />
      <h1 className="mb-0 text-center">{title}</h1>
    </div>
  );
}
