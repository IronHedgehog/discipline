import { useState } from "react";
import GoalTimer from "../../GoalTimer/GoalTimer";
import Modal from "../../Modal/Modal";

const ItemOfGoals = ({
  id,
  title,
  description,
  subItems,
  priority,
  status: initialStatus,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState(initialStatus || "Not Started");

  return (
    <li
      id={id}
      style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}
      onClick={(e) => {
        setIsModalOpen(true), e.stopPropagation();
      }}
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

      <GoalTimer onStatusChange={setStatus} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>{title}</h2>
        <p>
          <strong>Пріоритет:</strong> {priority}
        </p>
        <p>
          <strong>Статус:</strong> {status}
        </p>
        <p>
          <strong>Опис:</strong> {description}
        </p>

        <h3>Підзадачі:</h3>
        {subItems?.length > 0 ? (
          <ul>
            {subItems.map((sub, idx) => (
              <li key={idx}>{sub}</li>
            ))}
          </ul>
        ) : (
          <p>Підзадач немає</p>
        )}

        <GoalTimer onStatusChange={setStatus} time />
      </Modal>
    </li>
  );
};

export default ItemOfGoals;
