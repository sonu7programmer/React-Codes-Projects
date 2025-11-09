import React, { useRef, useState } from "react";

function FancyStopwatch() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const isRunning = useRef(false);

  const startTimer = () => {
    if (isRunning.current) return;
    isRunning.current = true;

    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    isRunning.current = false;
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    isRunning.current = false;
    setTime(0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>⏱️ React Stopwatch</h1>
      <div style={styles.timer}>{time}s</div>

      <div style={styles.buttons}>
        <button style={{ ...styles.button, backgroundColor: "#4CAF50" }} onClick={startTimer}>
          Start
        </button>
        <button style={{ ...styles.button, backgroundColor: "#FF9800" }} onClick={stopTimer}>
          Stop
        </button>
        <button style={{ ...styles.button, backgroundColor: "#F44336" }} onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px",
    background: "linear-gradient(135deg, #1e1e2f, #2e2e3f)",
    color: "white",
    padding: "40px",
    borderRadius: "20px",
    width: "350px",
    margin: "auto",
    boxShadow: "0 0 25px rgba(0,0,0,0.3)",
  },
  heading: {
    fontFamily: "Poppins, sans-serif",
    marginBottom: "20px",
  },
  timer: {
    fontSize: "60px",
    fontWeight: "bold",
    color: "#00e676",
    textShadow: "0 0 20px #00e676, 0 0 40px #00e676",
    marginBottom: "30px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    border: "none",
    padding: "10px 20px",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
    transition: "all 0.2s ease-in-out",
  },
};

export default FancyStopwatch;
