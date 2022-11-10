import React from "react";
import "./Countdown.css";

import { useCountdown } from "../../hooks/useCountdown";
import CountdownItem from "./CountdownItem";

export default function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown(
    new Date("Nov 21, 2022 00:00:00").getTime()
  );

  return (
    <div className="countdown__contianer">
      <CountdownItem title={"days"} data={days} />
      <CountdownItem title={"hours"} data={hours} />
      <CountdownItem title={"minutes"} data={minutes} />
      <CountdownItem title={"seconds"} data={seconds} />
    </div>
  );
}
