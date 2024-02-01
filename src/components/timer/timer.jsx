// Timer
import React, { useState } from "react";
function Timer() {
  setInterval(updatetime, 1000);
  const now = new Date().toLocaleTimeString();
  // state
  const [time, setTime] = useState(now);

  function updatetime(){
    const newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }

  return (
      <>{time}</>
  );

}

export default Timer;