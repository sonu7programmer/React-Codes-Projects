import React, { useState, useEffect } from "react";

function ClockShop() {
  // The shop display board 🪧
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // 🏪 Step 1: Opening Day — You hire the worker
    console.log("Shop opened 🏪, worker hired ⏰");

    // ⏱️ Step 2: Worker updates the clock every second
    const worker = setInterval(() => {
      setTime(new Date().toLocaleTimeString()); // Worker updates the board
    }, 1000);

    // 🚪 Step 3: When the shop closes (component unmounts)
    return () => {
      clearInterval(worker); // Fire the worker to avoid memory leaks
      console.log("Shop closed 🚪, worker fired 🧹");
    };
  }, []); // 🧾 Empty array → You give this order only once

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🕒 Clock Shop Display</h2>
      <h1>{time}</h1>
      <p>(Updating every second — worker still at the job!)</p>
    </div>
  );
}

export default ClockShop;
