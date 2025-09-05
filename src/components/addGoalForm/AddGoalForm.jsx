import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import { useState } from "react";
import * as Yup from "yup";

const GoalForm = ({ onSubmit }) => {
  const [subItems, setSubItems] = useState([]);
  const [subTaskInput, setSubTaskInput] = useState("");
  const initialValues = {
    title: "",
    startDate: new Date().toISOString().split("T")[0],
    description: "",
    project: "",
    priority: "Low",
    status: "Not started",
    deadline: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Обов’язкове поле"),
    priority: Yup.string().oneOf(["Low", "Medium", "High"]),
    status: Yup.string().oneOf(["Not started", "In progress", "Completed"]),
    startDate: Yup.date().required("Дата початку обов’язкова"),
    deadline: Yup.date()
      .required("Термін виконання обов’язковий")
      .min(Yup.ref("startDate"), "Deadline не може бути раніше дати початку"),
  });

  const handleAddSubTask = () => {
    if (subTaskInput.trim()) {
      setSubItems((prev) => [...prev, subTaskInput.trim()]);
      setSubTaskInput("");
    }
  };

  const handleRemoveSubTask = (index) => {
    setSubItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (values, { resetForm }) => {
    const newGoal = {
      id: nanoid(),
      subItems,
      ...values,
    };
    onSubmit(newGoal);
    setSubItems([]);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label>
          Назва задачі
          <Field name="title" />
          <ErrorMessage name="title" component="div" />
        </label>

        <label>
          Підзадачі
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <input
              type="text"
              value={subTaskInput}
              onChange={(e) => setSubTaskInput(e.target.value)}
              placeholder="Введіть підзадачу"
            />
            <button type="button" onClick={handleAddSubTask}>
              ➕
            </button>
          </div>
          {subItems.length > 0 && (
            <ul>
              {subItems.map((task, index) => (
                <li key={index}>
                  {task}{" "}
                  <button
                    type="button"
                    onClick={() => handleRemoveSubTask(index)}
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          )}
        </label>

        <label>
          Опис задачі
          <Field name="description" />
        </label>

        <label>
          Проєкт
          <Field name="project" />
        </label>

        <label>
          Початок
          <Field name="startDate" type="date" />
          <ErrorMessage name="title" component="div" />
        </label>

        <label>
          Дедлайн
          <Field name="deadline" type="date" />
          <ErrorMessage name="title" component="div" />
        </label>

        <label>
          Пріоритет
          <Field as="select" name="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Field>
        </label>

        <label>
          Статус
          <Field as="select" name="status">
            <option value="Not started">Not started</option>
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
          </Field>
        </label>

        <button type="submit">Зберегти задачу</button>
      </Form>
    </Formik>
  );
};

export default GoalForm;
