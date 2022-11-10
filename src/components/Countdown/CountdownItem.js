import React from "react";

export default function CountdownItem({ title, data }) {
  return (
    <div className="countdown__item">
      <small>{title}</small>
      <div className="d-flex justify-content-center gap-2">
        <div className="time-square">{data.toString()}</div>
      </div>
    </div>
  );
}
