import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";

function TaskCard({ notes: { title, id, description } }) {
  const { deleteTask } = useContext(TaskContext);
  const value = useContext(TaskContext);
  console.log(value);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-x1 font-bold capitalize">{title}</h1>
      <p className="text-gray-400 text-sm">{description}</p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 " onClick={() => deleteTask(id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
