import { useState, useRef } from "react";
import ReactDOM from "react-dom/client";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function Start() {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIsRunning(true);
    }
  }

  function Stop() {
    if (isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  }

  function Reset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
    setIsRunning(false);
  }

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div className="page">
      <div className="stopwatch-card">
        <p className="tag">Time Tracker</p>
        <h1 className="title">Modern Stopwatch</h1>
        <p className="subtitle">Simple, clean and professional stopwatch UI</p>

        <div className="time-display">
          <span>{minutes}</span>
          <span className="colon">:</span>
          <span>{seconds}</span>
        </div>

        <p className="status">
          Status: <span>{isRunning ? "Running" : "Stopped"}</span>
        </p>

        <div className="button-group">
          <button className="btn btn-start" onClick={Start}>
            Start
          </button>
          <button className="btn btn-stop" onClick={Stop}>
            Stop
          </button>
          <button className="btn btn-reset" onClick={Reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<StopWatch />);