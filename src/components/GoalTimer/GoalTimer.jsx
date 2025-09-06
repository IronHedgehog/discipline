import { useEffect, useState } from "react";

const GoalTimer = ({ onStatusChange, time }) => {
  const [timeSpent, setTimeSpent] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState("Not Started");

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const handleStart = () => {
    setIsRunning(true);
    setStatus("In Progress");
    onStatusChange?.("In Progress");
  };

  const handlePause = () => {
    setIsRunning(false);
    setStatus("Paused");
    onStatusChange?.("Paused");
  };

  const handleComplete = () => {
    setIsRunning(false);
    setStatus("Completed");
    onStatusChange?.("Completed");
  };

  return (
    <div>
      {time ? (
        <p>
          Витрачено часу: <span>{formatTime(timeSpent)}</span>
        </p>
      ) : (
        <p>
          Витрачено часу: <span>{formatTime(timeSpent)}</span>
        </p>
      )}

      {status !== "Completed" && !time && (
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleStart();
            }}
          >
            Розпочати задачу
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePause();
            }}
          >
            Призупинити
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleComplete();
            }}
          >
            Завершити
          </button>
        </div>
      )}
    </div>
  );
};

export default GoalTimer;
