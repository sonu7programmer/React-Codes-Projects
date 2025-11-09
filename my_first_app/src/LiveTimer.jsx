import React, { useState, useEffect } from "react";

function LiveTimer() {
  // Step 1️⃣: useState to store time
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Step 2️⃣: useEffect to update every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString()); // updates time every second
    }, 3000);

    // Step 3️⃣: Cleanup when component unmounts
    return () => clearInterval(timer);
  }, []); // empty dependency → runs only once

  // Step 4️⃣: Display it
  return (
    <div>
      <h2>🕒 Current Time: {time}</h2>
    </div>
  );
}

export default LiveTimer;
