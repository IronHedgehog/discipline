const ItemOfGoals = ({
  id,
  title,
  description,
  subItems,
  priority,
  status,
  //   setIsModalOpen,
}) => {
  console.log(subItems);
  return (
    <li id={id}>
      <h2>{title}</h2>
      <p>Приорітет: {priority}</p>
      <p>Статус: {status}</p>
      <p>Опис: {description}</p>
      {subItems?.length > 0 ? (
        <p>Кількість підзадач: {subItems.length}</p>
      ) : (
        <p>Підзадач немає</p>
      )}
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
