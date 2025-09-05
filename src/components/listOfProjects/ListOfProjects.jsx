import ProjectItem from "./ProjectItem/ProjectItem";

const ListOfProjects = ({ projects }) => {
  return (
    <ul>
      {projects?.map(
        ({ id, title, status, deadline, priority, technologies, goals }) => {
          return (
            <ProjectItem
              key={id}
              id={id}
              title={title}
              status={status}
              deadline={deadline}
              priority={priority}
              technologies={technologies}
              goals={goals}
            />
          );
        }
      )}
    </ul>
  );
};

export default ListOfProjects;
