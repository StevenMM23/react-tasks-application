import { useContext, useEffect, useState } from "react";
import { TaskContext } from "./context/TaskContext";
function TaskForm() {
  const { createTask, currentId } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");

  const captureTitle = ({ target: { value } }) => {
    setTitle(value);
  };

  const captureTextArea = ({ target: { value } }) => {
    setdescription(value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: currentId,
      title,
      description,
    };
    createTask(newTask);
    setTitle("");
    setdescription("");
  };
  useEffect(() => {
    console.log("Render");
  }, []);
  return (
    <div>
      <form>
        <div>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Escribe tu Tarea"
            onChange={captureTitle}
            value={title}
            autoFocus
          />
        </div>
        <textarea
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
          style={{ display: "flex" }}
          placeholder="Escribe la descripcion de la tarea"
          cols="30"
          rows="10"
          onChange={captureTextArea}
          value={description}
        ></textarea>

        <button
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4 mt-4 w-full"
          onClick={HandleSubmit}
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
