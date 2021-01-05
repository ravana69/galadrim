import React from "react";
import { useState, useEffect } from "react";

import "./Letter.css";

const Timer = (props) => {
  const { initialMinute = 0, initialSeconds = 25 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          props.function();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="letter timer" style={{ fontSize: "1em" }}>
      New letter in {seconds < 10 ? `0${seconds}` : seconds} seconds
    </div>
  );
};

export default Timer;
