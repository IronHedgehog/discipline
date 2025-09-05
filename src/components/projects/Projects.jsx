import { useState } from "react";
import ListOfProjects from "../listOfProjects/ListOfProjects";

const Projects = () => {
  const [projects, _] = useState([
    {
      id: 1,
      title: "Особистий сайт-портфоліо",
      description:
        "Створити сучасний сайт-візитку для демонстрації навичок та проєктів",
      status: "In Progress",
      deadline: "2025-10-15",
      priority: "High",
      technologies: ["React", "Tailwind", "Vite"],
      goals: [1, 4], // айдішки цілей, пов'язаних з проєктом
    },
    {
      id: 2,
      title: "Трекер цілей (Samurai Path App)",
      description: "Застосунок для постановки і досягнення особистих цілей",
      status: "Planning",
      deadline: "2025-12-31",
      priority: "High",
      technologies: ["React", "Redux Toolkit", "Node.js", "MongoDB"],
      goals: [2, 3, 5],
    },
    {
      id: 3,
      title: "Фріланс-проєкт: Landing page для клієнта",
      description: "Розробити адаптивний лендинг для малого бізнесу",
      status: "Not Started",
      deadline: "2025-09-25",
      priority: "Medium",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      goals: [],
    },
    {
      id: 4,
      title: "Open Source внесок",
      description: "Додати кілька pull request у популярний open-source проєкт",
      status: "In Progress",
      deadline: "2025-11-30",
      priority: "Low",
      technologies: ["TypeScript", "React", "GitHub Actions"],
      goals: [],
    },
    {
      id: 5,
      title: "Курс для дітей по Frontend",
      description:
        "Підготувати навчальну програму та завдання для курсу з React",
      status: "Planning",
      deadline: "2026-01-15",
      priority: "Medium",
      technologies: ["React", "Vite", "Styled Components"],
      goals: [],
    },
    {
      id: 6,
      title: "Фітнес-трекер",
      description: "Простий застосунок для відстеження тренувань і прогресу",
      status: "Not Started",
      deadline: "2025-12-01",
      priority: "Low",
      technologies: ["React Native", "Expo", "SQLite"],
      goals: [],
    },
  ]);

  return (
    <section>
      <h2>Мої проекти</h2>
      <ListOfProjects projects={projects} />
    </section>
  );
};

export default Projects;
