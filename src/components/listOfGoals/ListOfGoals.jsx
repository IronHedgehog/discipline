import ItemOfGoals from "./ItemOfGoals/ItemOfGoals";

const ListOfGoals = ({ allGoals }) => {
  return (
    <ul>
      {allGoals.map(
        ({
          id,
          title,
          description,
          subItems,
          priority,
          status,
          executionTime,
          setIsModalOpen,
        }) => {
          return (
            <ItemOfGoals
              setIsModalOpen={setIsModalOpen}
              key={id}
              id={id}
              title={title}
              description={description}
              subItems={subItems}
              priority={priority}
              status={status}
              executionTime={executionTime}
            />
          );
        }
      )}
    </ul>
  );
};

export default ListOfGoals;
