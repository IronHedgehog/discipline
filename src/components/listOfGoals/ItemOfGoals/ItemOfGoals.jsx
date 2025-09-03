const ItemOfGoals = ({
  id,
  title,
  description,
  subItems,
  priority,
  status,
  //   setIsModalOpen,
}) => {
  return (
    <li id={id}>
      <h2>{title}</h2>
      <p>Приорітет:{priority}</p>
      <p>Статус{status}</p>
      <p>Опис:{description}</p>
      <p>Кількість підзадач:{subItems.length}</p>
      <button>Розпочати задачу</button>
      <p>
        Витрачено часу: <span>-</span>
      </p>
      <button>Призупинити виконання задачі</button>
      <button>Завершити задачу</button>
    </li>
  );
};

export default ItemOfGoals;
