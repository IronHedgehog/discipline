import { useEffect, useState } from "react";

const ItemOfGoals = ({
  id,
  title,
  description,
  subItems,
  priority,
  status: initialStatus,
}) => {
  const [status, setStatus] = useState(initialStatus || "Not Started");
  const [timeSpent, setTimeSpent] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Лічильник часу
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  // Форматування часу
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  // Обробники кнопок
  const handleStart = () => {
    setIsRunning(true);
    setStatus("In Progress");
  };

  const handlePause = () => {
    setIsRunning(false);
    setStatus("Paused");
  };

  const handleComplete = () => {
    setIsRunning(false);
    setStatus("Completed");
  };

  return (
    <li
      id={id}
      style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}
    >
      <h2>{title}</h2>
      <p>Пріоритет: {priority}</p>
      <p>Статус: {status}</p>
      <p>Опис: {description}</p>
      {subItems?.length > 0 ? (
        <p>Кількість підзадач: {subItems.length}</p>
      ) : (
        <p>Підзадач немає</p>
      )}
      <p>
        Витрачено часу: <span>{formatTime(timeSpent)}</span>
      </p>

      {status !== "Completed" && (
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button onClick={handleStart}>Розпочати задачу</button>
          <button onClick={handlePause}>Призупинити виконання задачі</button>
          <button onClick={handleComplete}>Завершити задачу</button>
        </div>
      )}
    </li>
  );
};

export default ItemOfGoals;
