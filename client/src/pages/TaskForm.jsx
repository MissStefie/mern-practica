import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskProvider.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navidate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navidate("/");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            className="bg-color5 max-w-sm rounded-md p-4 mx-auto mt-10"
            onSubmit={handleSubmit}
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit Task" : "New Task"}
            </h1>
            <label className="block">Title</label>
            <input
              className="px-2 py-1 rounded-sm w-full"
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            ></input>
            <label className="block">Description</label>
            <textarea
              className="px-2 py-1 rounded-sm w-full"
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button
              className="block bg-color9 px-2 py-1 text-white w-full rounded-md"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
