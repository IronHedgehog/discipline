import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const GoalForm = ({ onSubmit }) => {
  const initialValues = {
    title: "",
    parentItem: "",
    subItem: "",
    start: "",
    finish: "",
    startDate: "",
    endDate: "",
    progress: 0,
    project: "",
    priority: "Low",
    teammates: "",
    status: "Not started",
    deadline: "",
    duration: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Обов’язкове поле"),
    progress: Yup.number().min(0).max(100),
    priority: Yup.string().oneOf(["Low", "Medium", "High"]),
    status: Yup.string().oneOf(["Not started", "In progress", "Completed"]),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
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
          Parent item
          <Field name="parentItem" />
        </label>

        <label>
          Sub-item
          <Field name="subItem" />
        </label>

        <label>
          Почати
          <Field name="start" type="text" />
        </label>

        <label>
          Завершити
          <Field name="finish" type="text" />
        </label>

        <label>
          Початок
          <Field name="startDate" type="date" />
        </label>

        <label>
          Окончание
          <Field name="endDate" type="date" />
        </label>

        <label>
          Прогрес (%)
          <Field name="progress" type="number" />
        </label>

        <label>
          Проєкт
          <Field name="project" />
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
          Разом з
          <Field name="teammates" />
        </label>

        <label>
          Статус
          <Field as="select" name="status">
            <option value="Not started">Not started</option>
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
          </Field>
        </label>

        <label>
          Термін виконання
          <Field name="deadline" type="date" />
        </label>

        <label>
          Час виконання
          <Field name="duration" type="text" />
        </label>

        <button type="submit">Зберегти задачу</button>
      </Form>
    </Formik>
  );
};

export default GoalForm;
