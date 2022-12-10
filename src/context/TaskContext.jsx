import { createContext, useState, useEffect } from "react";
import { task as data } from "../task";
export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  const createTask = function (task) {
    setTasks([...tasks, task]);
  };
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{ tasks, deleteTask, createTask, currentId: tasks.length }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
