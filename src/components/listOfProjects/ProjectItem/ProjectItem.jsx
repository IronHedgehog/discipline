const ProjectItem = ({
  id,
  title,
  status,
  deadline,
  priority,
  technologies,
  goals,
}) => {
  return (
    <li id={id}>
      <h3>{title}</h3>
      <p>{status}</p>
      <p>{deadline}</p>
      <p>{priority}</p>
      {technologies.length > 0 && (
        <p>
          <span>Технології:</span> {technologies.join(", ")}
        </p>
      )}

      {goals.length > 0 && (
        <div>
          <span>Цілі:</span>
          <ul>
            {goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default ProjectItem;
