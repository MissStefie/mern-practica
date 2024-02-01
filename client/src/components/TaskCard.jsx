import { useTasks } from "../context/TaskProvider.jsx";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-color5 text-white rounded-sm p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>{" "}
        <span>{task.done == 1 ? "★" : "☆"}</span>
      </header>

      <p className="text-xs">{task.description}</p>

      <span>{task.createdAt}</span>

      <div className="flex gap-x-1">
        <button
          className="bg-color8 px-2 py-1 text-black rounded-sm"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-color8 px-2 py-1 text-black rounded-sm"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-color7 px-2 py-1 text-black rounded-sm"
          onClick={() => handleDone()}
        >
          Toggle Task
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
