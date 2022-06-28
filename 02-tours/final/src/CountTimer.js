import React, { useEffect } from "react";
import { useState } from "react";

const CountTimer = () => {
  const [value, setValue] = useState(0);
  const [isPause, setPause] = useState(false);

  const second = 60;
  const minute = second * 60;
  const hour = minute * 60;
  
  let timer;

  const startHandler = () => {
    setPause(!isPause);
  };
  
  useEffect(() => {
    if (isPause) {
      timer = setInterval(() => {
        setValue((value) => value + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [value]);

  return (
    <div>
      <button type="button" onClick={startHandler}>
        Click {isPause ? "pause" : "count up"}
      </button>
      <span style={style}>
        Day: {value >= hour && Math.floor(value / hour)}
      </span>
      <span style={style}>
        Hour:{value >= minute && Math.floor(value / minute)}
      </span>
      <span style={style}>Mitute: {value >= second && Math.floor(value / second)}</span>
      <span style={style}>Second: {Math.floor(value % second)}</span>
    </div>
  );
};
const style = {
  color: "red",
  fontSize: "22px",
  paddingRight: "20px",
};

export default CountTimer;
