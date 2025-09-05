import { useState } from "react";
import GoalForm from "../addGoalForm/AddGoalForm";
import Container from "../container/Container";
import ListOfGoals from "../listOfGoals/ListOfGoals";
import Modal from "../Modal/Modal";

const AllGoals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Запустити власний стартап",
      description:
        "Розробити та запустити SaaS продукт для управління проектами",
      parentItem: null,
      subItems: [
        "Дослідження ринку та конкурентів",
        "Створення MVP версії продукту",
        "Залучення перших 100 користувачів",
        "Пошук інвесторів для seed раунду",
      ],
      startDate: "2025-01-15",
      endDate: "2025-12-31",
      progress: 35,
      project: "Стартап 2025",
      priority: "High",
      status: "In Progress",
      executionTime: "6-8 годин на тиждень",
      tags: ["бізнес", "технології", "стартап"],
      notes: "Фокус на B2B сегменті. Планую використати React та Node.js",
    },
    {
      id: 2,
      title: "Отримати сертифікат AWS Solutions Architect",
      description: "Підготуватися та успішно скласти іспит AWS SAA-C03",
      parentItem: "Кар'єрний розвиток",
      subItems: [
        "Пройти онлайн курс",
        "Практичні лабораторні роботи",
        "Здати пробні тести",
        "Записатися на іспит",
      ],
      startDate: "2025-02-01",
      endDate: "2025-06-30",
      progress: 60,
      project: "Професійний розвиток",
      priority: "Medium",
      status: "In Progress",
      executionTime: "10 годин на тиждень",
      tags: ["навчання", "IT", "сертифікація"],
      notes: "Бюджет на курси та іспит: $500. Планую здавати в червні",
    },
    {
      id: 3,
      title: "Пробігти напівмарафон",
      description:
        "Підготуватися та успішно фінішувати напівмарафон за 2:15:00",
      parentItem: null,
      subItems: [
        "Базова підготовка 12 тижнів",
        "Покращення техніки бігу",
        "Участь у підготовчих забігах",
        "Правильне харчування та відновлення",
      ],
      startDate: "2025-03-01",
      endDate: "2025-09-15",
      progress: 25,
      project: "Здоровий спосіб життя",
      priority: "Medium",
      status: "Not Started",
      executionTime: "5-6 годин на тиждень",
      tags: ["спорт", "здоров'я", "біг"],
      notes:
        "Зареєструватися на Київський напівмарафон. Купити професійні кросівки",
    },
    {
      id: 4,
      title: "Написати книгу про розвиток продукту",
      description: "Створити практичний посібник для Product Manager'ів",
      parentItem: "Особистий бренд",
      subItems: [
        "Написати план та структуру",
        "Написати 10 розділів (200+ сторінок)",
        "Редагування та коректура",
        "Пошук видавця або самовидання",
      ],
      startDate: "2025-04-01",
      endDate: "2025-12-31",
      progress: 15,
      project: "Контент створення",
      priority: "Low",
      status: "Planning",
      executionTime: "4-5 годин на тиждень",
      tags: ["писанство", "продукт", "кар'єра"],
      notes: "Орієнтовний обсяг 250-300 сторінок. Розглядаю варіант e-book",
    },
  ]);

  const onSubmit = (newGoal) => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  return (
    <section>
      <Container>
        <h2>Мої цілі</h2>
        <button onClick={() => setIsModalOpen(true)}>
          <svg>
            <use href=""></use>
          </svg>
          Додати ціль
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <GoalForm onSubmit={onSubmit} />
        </Modal>
        <ListOfGoals allGoals={goals} isModalOpen={setIsModalOpen} />
      </Container>
    </section>
  );
};

export default AllGoals;
